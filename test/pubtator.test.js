import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("pubtator");

describe("pubtator", () => {
  it("annotates PMID 35153516", async () => {
    const result = await request(src, src.tools.annotate, { pmid: "35153516" });
    assert.ok(result.PubTator3?.length > 0 || result.id, "expected annotation data");
  });

  it("searches for BRCA1 cancer", async () => {
    const result = await request(src, src.tools.search, { query: "BRCA1 cancer" });
    assert.ok(result.results?.length > 0 || result.count >= 0, "expected search results");
  });
});
