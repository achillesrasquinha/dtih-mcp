import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("msigdb");

describe("msigdb", () => {
  it("gets HALLMARK_APOPTOSIS gene set", async () => {
    const result = await request(src, src.tools.getGeneSet, {
      geneSetName: "HALLMARK_APOPTOSIS",
    });
    assert.ok(result.HALLMARK_APOPTOSIS);
    assert.ok(result.HALLMARK_APOPTOSIS.geneSymbols.length > 0);
  });
});
