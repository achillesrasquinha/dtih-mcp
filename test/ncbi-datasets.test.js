import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ncbi-datasets");

describe("ncbi-datasets", () => {
  it("gets gene info for TP53 in human", async () => {
    const result = await request(src, src.tools.getGeneBySymbol, {
      symbol: "TP53",
      taxon: "human",
    });
    assert.ok(result.reports?.length > 0);
    assert.equal(result.reports[0].gene.symbol, "TP53");
  });
});
