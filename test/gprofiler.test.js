import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("gprofiler");

describe("gprofiler", () => {
  it("runs enrichment analysis on BRCA1, TP53, EGFR", async () => {
    const result = await request(src, src.tools.analyze, {
      query: ["BRCA1", "TP53", "EGFR"],
      organism: "hsapiens",
    });
    assert.ok(result.result?.length > 0);
    assert.ok(result.result[0].source);
    assert.ok(result.result[0].native);
  });

  it("converts gene symbols to Ensembl IDs", async () => {
    const result = await request(src, src.tools.convert, {
      query: ["BRCA1", "TP53"],
      organism: "hsapiens",
      target: "ENSG",
    });
    assert.ok(result.result?.length > 0);
  });
});
