import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("opentreeoflife");

describe("opentreeoflife", () => {
  it("matches taxon names for Homo sapiens", async () => {
    const result = await request(src, src.tools.searchTaxa, { names: ["Homo sapiens"] });
    assert.ok(result.results?.length > 0, "expected TNRS match results");
    assert.ok(result.matched_names?.includes("Homo sapiens"), "expected Homo sapiens in matched_names");
  });

  it("gets subtree for Homo sapiens (OTT ID 770315)", async () => {
    const result = await request(src, src.tools.getSubtree, { ott_id: 770315 });
    assert.ok(result.newick, "expected newick tree string");
    assert.ok(result.newick.includes("Homo_sapiens"), "expected Homo sapiens in tree");
  });
});
