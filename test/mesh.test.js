import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("mesh");

describe("mesh", () => {
  it("searches for asthma MeSH terms", async () => {
    const result = await request(src, src.tools.search, { query: "asthma" });
    assert.ok(result.esearchresult?.idlist?.length > 0);
  });

  it("gets MeSH descriptor summary by ID", async () => {
    const result = await request(src, src.tools.getSummary, { id: "68001249" });
    assert.ok(result.result?.["68001249"]);
  });
});
