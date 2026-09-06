import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("gnomad");

describe("gnomad", () => {
  it("searches for PCSK9 gene information", async () => {
    const result = await request(src, src.tools.searchVariant, { geneSymbol: "PCSK9" });
    assert.ok(result.gene);
    assert.ok(result.gene.gene_id);
    assert.ok(result.gene.symbol === "PCSK9");
  });

  it("gets a specific variant by ID", async () => {
    const result = await request(src, src.tools.getVariant, { variantId: "1-55516888-G-A" });
    assert.ok(result.variant);
    assert.ok(result.variant.variantId === "1-55516888-G-A");
  });
});
