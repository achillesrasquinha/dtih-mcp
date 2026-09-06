import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("kegg");

describe("kegg", () => {
  it("searches for insulin genes", async () => {
    const result = await request(src, src.tools.search, { query: "insulin" });
    assert.ok(result.raw?.length > 0);
    assert.ok(result.raw.toLowerCase().includes("insulin") || result.raw.includes("INS"));
  });

  it("gets KEGG entry for human insulin gene", async () => {
    const result = await request(src, src.tools.getEntry, { entryId: "hsa:3630" });
    assert.ok(result.raw?.length > 0);
    assert.ok(result.raw.includes("3630") || result.raw.includes("INS"));
  });
});
