import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("hgnc");

describe("hgnc", () => {
  it("searches for BRCA1 gene", async () => {
    const result = await request(src, src.tools.search, { query: "BRCA1" });
    assert.ok(result.response?.docs?.length > 0 || result.response?.numFound > 0);
  });

  it("gets gene record for BRCA1 symbol", async () => {
    const result = await request(src, src.tools.getGene, { symbol: "BRCA1" });
    assert.ok(result.response?.docs?.length > 0);
    assert.ok(result.response.docs[0].symbol === "BRCA1");
  });
});
