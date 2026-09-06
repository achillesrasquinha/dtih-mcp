import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("semanticscholar");

describe("semanticscholar", () => {
  it("searches for CRISPR Cas9 papers", async () => {
    const result = await request(src, src.tools.searchPapers, { query: "CRISPR Cas9" });
    assert.ok(result.data?.length > 0, "expected at least one paper");
    assert.ok(result.data[0].title);
  });

  it("gets a known paper by ID", async () => {
    // "Construction of the Literature Graph in Semantic Scholar"
    const result = await request(src, src.tools.getPaper, {
      paperId: "649def34f8be52c8b66281af98ae884c09aef38b",
    });
    assert.ok(result.title);
    assert.equal(result.paperId, "649def34f8be52c8b66281af98ae884c09aef38b");
  });
});
