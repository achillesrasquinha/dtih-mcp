import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("gbif");

describe("gbif", () => {
  it("searches for Panthera leo", async () => {
    const result = await request(src, src.tools.searchSpecies, { query: "Panthera leo" });
    assert.ok(result.results?.length > 0, "expected species search results");
    assert.ok(result.results[0].scientificName, "expected scientificName field");
  });

  it("gets occurrence records for a taxon key", async () => {
    const result = await request(src, src.tools.getOccurrences, { taxonKey: 5219404 });
    assert.ok(result.results?.length > 0, "expected occurrence results");
  });

  it("gets species detail by key", async () => {
    const result = await request(src, src.tools.getSpecies, { key: 5219404 });
    assert.equal(result.species, "Panthera leo");
  });
});
