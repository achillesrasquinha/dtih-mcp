import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("mygene");

describe("mygene", () => {
  it("searches for kinase genes in human", async () => {
    const result = await request(src, src.tools.search, { query: "kinase", species: "human" });
    assert.ok(result.hits?.length > 0);
    assert.ok(result.hits[0].entrezgene || result.hits[0]._id);
  });

  it("gets BRCA1 gene annotation by Entrez ID", async () => {
    const result = await request(src, src.tools.getGene, { geneId: "672" });
    assert.ok(result.symbol === "BRCA1");
    assert.ok(result.name);
  });
});
