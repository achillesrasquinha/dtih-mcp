import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("europepmc");

describe("europepmc", () => {
  it("searches for CRISPR literature", async () => {
    const result = await request(src, src.tools.search, { query: "CRISPR" });
    assert.ok(result.hitCount > 0);
    assert.ok(result.resultList?.result?.length > 0);
  });

  it("gets a specific article by PMID", async () => {
    const result = await request(src, src.tools.getArticle, { pmid: "EXT_ID:33086985" });
    assert.ok(result.hitCount >= 1);
    assert.ok(result.resultList?.result?.[0]?.pmid === "33086985");
  });
});
