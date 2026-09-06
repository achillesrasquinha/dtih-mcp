import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("wormbase");

describe("wormbase", () => {
  it("gets gene detail for unc-26 (WB:WBGene00006763)", async () => {
    const result = await request(src, src.tools.getGene, { geneId: "WB:WBGene00006763" });
    assert.ok(result.gene, "expected gene object");
    assert.ok(result.gene.primaryExternalId, "expected primaryExternalId");
  });

  it("searches for unc-26 via autocomplete", async () => {
    const result = await request(src, src.tools.searchGene, { query: "unc-26" });
    assert.ok(result.results?.length > 0, "expected autocomplete results");
    assert.ok(result.results[0].symbol === "unc-26" || result.results[0].name === "unc-26", "expected unc-26 in results");
  });
});
