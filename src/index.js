#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry, searchTools } from "./lib/registry.js";
import { request } from "./lib/http.js";
import { encode as toon } from "@toon-format/toon";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources, toolIndex } = loadRegistry(join(__dirname, "providers"));

const server = new McpServer({
  name: "life-science-mcp",
  version: "0.1.0",
});

function reply(data) {
  return { content: [{ type: "text", text: toon(data) }] };
}

function error(msg) {
  return { content: [{ type: "text", text: msg }], isError: true };
}

server.tool(
  "searchTools",
  "Search across all life science sources by intent, keyword, or tag",
  { query: z.string().optional(), tags: z.array(z.string()).optional() },
  async ({ query, tags }) => reply(searchTools(toolIndex, query, tags))
);

server.tool(
  "getToolInfo",
  "Get full parameter schema for a specific tool on a source",
  { source: z.string(), tool: z.string() },
  async ({ source: srcName, tool: toolName }) => {
    const src = sources.get(srcName);
    if (!src) return error(`Unknown source: ${srcName}`);
    const tool = src.tools[toolName];
    if (!tool) return error(`Unknown tool: ${toolName} on ${srcName}`);
    return reply({
      source: srcName,
      tool: toolName,
      description: tool.description,
      tags: [...(src.tags || []), ...(tool.tags || [])],
      params: tool.params || {},
      auth: src.auth ? { type: src.auth.type, required: src.auth.required ?? true } : "none",
      rateLimit: src.rateLimit || null,
    });
  }
);

server.tool(
  "callTool",
  "Execute a tool on a life science source",
  { source: z.string(), tool: z.string(), params: z.record(z.any()).optional() },
  async ({ source: srcName, tool: toolName, params }) => {
    const src = sources.get(srcName);
    if (!src) return error(`Unknown source: ${srcName}`);
    const tool = src.tools[toolName];
    if (!tool) return error(`Unknown tool: ${toolName} on ${srcName}`);
    try {
      const result = await request(src, tool, params || {});
      return reply(result);
    } catch (err) {
      return error(`Error: ${err.message}`);
    }
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
