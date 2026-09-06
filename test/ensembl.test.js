import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ensembl");

describe("ensembl", () => {
  it("looks up BRCA2 gene", async () => {
    const result = await request(src, src.tools.lookupSymbol, { symbol: "BRCA2", species: "homo_sapiens" });
    assert.ok(result.id);
    assert.ok(result.display_name === "BRCA2");
  });

  it("gets sequence for an Ensembl ID", async () => {
    const result = await request(src, src.tools.getSequence, { id: "ENSG00000139618" });
    assert.ok(result.seq);
    assert.ok(result.id === "ENSG00000139618");
  });
});
