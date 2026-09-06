#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry, findTools } from "./lib/registry/index.js";
import { request } from "./lib/http/index.js";
import { encode as toon } from "@toon-format/toon";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources, toolIndex } = loadRegistry(join(__dirname, "providers"));

const server = new McpServer({
  name: "life-science-mcp",
  version: "0.2.0",
});

function reply(data) {
  return { content: [{ type: "text", text: toon(data) }] };
}

function error(msg) {
  return { content: [{ type: "text", text: msg }], isError: true };
}

server.tool(
  "findTools",
  "Find life science API tools by keyword, intent, or tag. Returns tool names, descriptions, and inline parameter signatures — enough to call them directly without a separate schema lookup.",
  { query: z.string().optional(), tags: z.array(z.string()).optional() },
  async ({ query, tags }) => reply(findTools(toolIndex, query, tags))
);

server.tool(
  "callTools",
  "Execute one or more life science API tools. Accepts a single call or a batch array — batch calls run in parallel and return keyed results.",
  {
    source: z.string().optional(),
    tool: z.string().optional(),
    params: z.record(z.any()).optional(),
    batch: z
      .array(
        z.object({
          source: z.string(),
          tool: z.string(),
          params: z.record(z.any()).optional(),
        })
      )
      .optional(),
  },
  async ({ source: srcName, tool: toolName, params, batch }) => {
    if (batch?.length) {
      const results = await Promise.allSettled(
        batch.map((call) => execOne(call.source, call.tool, call.params || {}))
      );
      const keyed = {};
      batch.forEach((call, i) => {
        let base = `${call.source}.${call.tool}`;
        let key = base;
        let n = 1;
        while (key in keyed) key = `${base}.${n++}`;
        const r = results[i];
        keyed[key] = r.status === "fulfilled" ? r.value : { error: r.reason?.message || String(r.reason) };
      });
      return reply(keyed);
    }

    if (!srcName || !toolName) return error("Provide source + tool, or a batch array");
    try {
      return reply(await execOne(srcName, toolName, params || {}));
    } catch (err) {
      return error(`Error: ${err.message}`);
    }
  }
);

async function execOne(srcName, toolName, params) {
  const src = sources.get(srcName);
  if (!src) throw new Error(`Unknown source: ${srcName}`);
  const tool = src.tools[toolName];
  if (!tool) throw new Error(`Unknown tool: ${toolName} on ${srcName}`);
  return request(src, tool, params);
}

const transport = new StdioServerTransport();
await server.connect(transport);
