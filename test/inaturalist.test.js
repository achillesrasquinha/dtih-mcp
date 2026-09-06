import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("inaturalist");

describe("inaturalist", () => {
  it("searches observations for Monarch butterfly", async () => {
    const result = await request(src, src.tools.searchObservations, { query: "Monarch butterfly" });
    assert.ok(result.results?.length > 0, "expected observation results");
  });

  it("searches taxa for Danaus plexippus", async () => {
    const result = await request(src, src.tools.searchTaxa, { query: "Danaus plexippus" });
    assert.ok(result.results?.length > 0, "expected taxon results");
    assert.ok(result.results[0].name, "expected name field");
  });

  it("gets taxon by ID (Monarch butterfly = 48662)", async () => {
    const result = await request(src, src.tools.getTaxon, { id: 48662 });
    assert.ok(result.results?.length > 0, "expected taxon result");
    assert.equal(result.results[0].name, "Danaus plexippus");
  });
});
