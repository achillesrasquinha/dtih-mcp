import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("catalogueoflife");

describe("catalogueoflife", () => {
  it("searches taxa for Felis catus", async () => {
    const result = await request(src, src.tools.searchTaxa, { query: "Felis catus" });
    assert.ok(result.result?.length > 0, "expected search results");
    assert.ok(result.total > 0, "expected total > 0");
  });

  it("gets taxon by ID", async () => {
    // First search to get a valid ID
    const search = await request(src, src.tools.searchTaxa, { query: "Felis catus" });
    const taxonId = search.result[0].id;
    const result = await request(src, src.tools.getTaxon, { id: taxonId });
    assert.ok(result.id, "expected taxon ID in result");
    assert.ok(result.name, "expected name object in result");
  });
});
