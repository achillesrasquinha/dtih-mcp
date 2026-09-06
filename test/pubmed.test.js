import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("pubmed");

describe("pubmed", () => {
  it("searches for CRISPR papers", async () => {
    const result = await request(src, src.tools.search, { query: "CRISPR cas9 therapy" });
    assert.ok(result.esearchresult?.idlist?.length > 0);
  });

  it("gets article summary by PMID", async () => {
    const result = await request(src, src.tools.getSummary, { ids: "33086985" });
    assert.ok(result.result?.["33086985"]?.title);
  });
});
