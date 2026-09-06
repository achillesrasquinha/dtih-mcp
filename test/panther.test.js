import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("panther");

describe("panther", () => {
  it("searches gene info for BRCA1", async () => {
    const result = await request(src, src.tools.searchGenes, { geneInputList: "BRCA1" });
    assert.ok(result.search, "expected search object in response");
    assert.ok(result.search.mapped_genes, "expected mapped_genes");
  });

  it("runs enrichment analysis for BRCA1,TP53", async () => {
    const result = await request(src, src.tools.getEnrichment, { geneInputList: "BRCA1,TP53" });
    assert.ok(result.results, "expected results object");
    assert.ok(result.results.reference, "expected reference in results");
  });
});
