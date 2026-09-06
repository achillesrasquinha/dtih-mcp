const buckets = new Map();

async function throttle(sourceName, rps) {
  if (!rps) return;
  if (!buckets.has(sourceName)) buckets.set(sourceName, { last: 0 });
  const bucket = buckets.get(sourceName);
  const now = Date.now();
  const interval = 1000 / rps;
  const wait = interval - (now - bucket.last);
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  bucket.last = Date.now();
}

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

  const baseHeaders = { "User-Agent": "life-science-mcp/0.1.0", ...(source.headers || {}), ...(auth.headers || {}) };

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
    headers: { "Content-Type": "application/json", "User-Agent": "life-science-mcp/0.1.0", ...(auth.headers || {}) },
    body: JSON.stringify({ query: tool.query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

function mapParams(tool, params) {
  const mapped = {};
  const schema = tool.params || {};
  for (const [key, def] of Object.entries(schema)) {
    const value = params[key] ?? def.default;
    if (value === undefined) {
      if (def.required) throw new Error(`Missing required param: ${key}`);
      continue;
    }
    mapped[def.mapsTo || key] = value;
  }
  return mapped;
}

function resolveAuth(source) {
  const auth = source.auth;
  if (!auth) return {};
  const val = auth.env ? process.env[auth.env] : null;
  if (!val) {
    if (auth.required) throw new Error(`Missing env var: ${auth.env}`);
    return {};
  }
  if (auth.type === "apiKey") return { params: { [auth.param]: val } };
  if (auth.type === "header") return { headers: { [auth.header]: val } };
  if (auth.type === "bearer") return { headers: { Authorization: `Bearer ${val}` } };
  return {};
}

async function parseResponse(res, tool) {
  const ct = res.headers.get("content-type") || "";
  const text = await res.text();

  if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);

  if (ct.includes("json") || (tool.response?.format === "json")) {
    try { return JSON.parse(text); } catch { return { raw: text }; }
  }

  return { raw: text };
}
