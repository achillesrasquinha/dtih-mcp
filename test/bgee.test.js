import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("bgee");

describe("bgee", () => {
  it("searches for BRCA1 gene", async () => {
    const result = await request(src, src.tools.search, { query: "BRCA1" });
    assert.ok(result.data?.result?.geneMatches?.length > 0 || result.data?.result?.totalMatchCount > 0);
  });

  it("gets gene info for BRCA1 by Ensembl ID", async () => {
    const result = await request(src, src.tools.getGene, { gene_id: "ENSG00000012048" });
    assert.ok(result.data?.genes?.length > 0);
    assert.ok(result.data.genes[0].name === "BRCA1");
  });
});
