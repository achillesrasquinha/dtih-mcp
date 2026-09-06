import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("proteinatlas");

describe("proteinatlas", () => {
  it("gets TP53 gene data by Ensembl ID", async () => {
    const result = await request(src, src.tools.getGene, { ensemblId: "ENSG00000141510" });
    assert.ok(result.Gene === "TP53");
    assert.ok(result.Ensembl === "ENSG00000141510");
  });
});
