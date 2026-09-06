import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("gtex");

describe("gtex", () => {
  it("looks up BRCA1 gene reference info", async () => {
    const result = await request(src, src.tools.getGene, { geneId: "BRCA1" });
    assert.ok(result.data?.length > 0);
    assert.ok(result.data[0].geneSymbol === "BRCA1");
  });

  it("gets median gene expression for BRCA1 across tissues", async () => {
    const result = await request(src, src.tools.getExpression, { gencodeId: "ENSG00000012048.20" });
    assert.ok(result.data?.length > 0);
    assert.ok(result.data[0].median !== undefined);
    assert.ok(result.data[0].tissueSiteDetailId);
  });
});
