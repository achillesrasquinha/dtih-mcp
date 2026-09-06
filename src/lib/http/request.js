import { throttle } from "./throttle.js";
import { resolveAuth } from "./auth.js";
import { mapParams } from "./params.js";
import { pluck } from "./pluck.js";
import { parseTsv, parseLines, parseKeyValue, parseXml } from "./parsers.js";

const USER_AGENT = "life-science-mcp/0.1.0";

export async function request(source, tool, params) {
  const rps = source.rateLimit?.requestsPerSecond || null;
  await throttle(source.name, rps);

  if (source.protocol === "graphql") return graphqlRequest(source, tool, params);
  return restRequest(source, tool, params);
}

async function restRequest(source, tool, params) {
  let path = tool.path || "";
  const mapped = mapParams(tool, params);

  for (const [k, v] of Object.entries(mapped)) {
    const placeholder = `{${k}}`;
    if (path.includes(placeholder)) {
      path = path.replaceAll(placeholder, encodeURIComponent(String(v)));
      delete mapped[k];
    }
  }

  const url = new URL((source.baseUrl || "") + path);
  const auth = resolveAuth(source);
  const baseHeaders = { "User-Agent": USER_AGENT, ...(source.headers || {}), ...(auth.headers || {}) };

  if (tool.method === "POST") {
    const headers = { "Content-Type": "application/json", ...baseHeaders };
    if (auth.params) Object.assign(mapped, auth.params);
    const res = await fetch(url.toString(), {
      method: "POST",
      headers,
      body: JSON.stringify(mapped),
    });
    return parseResponse(res, tool);
  }

  if (auth.params) Object.assign(mapped, auth.params);
  for (const [k, v] of Object.entries(mapped)) {
    url.searchParams.set(k, String(v));
  }

  const res = await fetch(url.toString(), { headers: baseHeaders });
  return parseResponse(res, tool);
}

async function graphqlRequest(source, tool, params) {
  const variables = mapParams(tool, params);
  const auth = resolveAuth(source);
  const res = await fetch(source.baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "User-Agent": USER_AGENT, ...(auth.headers || {}) },
    body: JSON.stringify({ query: tool.query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

async function parseResponse(res, tool) {
  const ct = res.headers.get("content-type") || "";
  const text = await res.text();

  if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);

  const fmt = tool.response?.format;
  const fields = tool.response?.fields;

  if (ct.includes("json") || fmt === "json") {
    try {
      const data = JSON.parse(text);
      return fields?.length ? pluck(data, fields) : data;
    } catch { return { raw: text }; }
  }

  if (fmt === "tsv" || fmt === "lines" || fmt === "keyvalue" || fmt === "xml") {
    const data = parseText(text, fmt, tool.response);
    return fields?.length ? pluck(data, fields) : data;
  }

  return { raw: text };
}

function parseText(text, fmt, responseConfig) {
  if (fmt === "tsv") return parseTsv(text, responseConfig);
  if (fmt === "lines") return parseLines(text);
  if (fmt === "keyvalue") return parseKeyValue(text);
  if (fmt === "xml") return parseXml(text);
  return { raw: text };
}
