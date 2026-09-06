import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("obis");

describe("obis", () => {
  it("searches occurrences for Carcharodon carcharias", async () => {
    const result = await request(src, src.tools.searchOccurrences, { name: "Carcharodon carcharias" });
    assert.ok(result.results?.length > 0, "expected occurrence results for great white shark");
  });

  it("searches checklist for Carcharodon carcharias", async () => {
    const result = await request(src, src.tools.searchTaxa, { name: "Carcharodon carcharias" });
    assert.ok(result.results?.length > 0, "expected checklist results");
    assert.ok(result.results[0].taxonID, "expected taxonID field");
  });

  it("gets taxon by AphiaID 105838", async () => {
    const result = await request(src, src.tools.getTaxon, { taxonId: 105838 });
    assert.ok(result.results?.length > 0, "expected taxon result");
    assert.equal(result.results[0].scientificName, "Carcharodon carcharias");
  });
});
