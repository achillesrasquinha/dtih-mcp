import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("enrichr");

// NOTE: Enrichr requires a userListId obtained by POSTing a gene list via form data.
// Since http.js sends JSON for POST (and Enrichr addList requires form-encoded data),
// we use a pre-existing userListId for testing the GET endpoints.
const TEST_USER_LIST_ID = 137022000;

describe("enrichr", () => {
  it("views a previously submitted gene list", async () => {
    const result = await request(src, src.tools.viewList, { userListId: TEST_USER_LIST_ID });
    assert.ok(result.genes);
    assert.ok(result.genes.length > 0);
  });

  it("gets KEGG enrichment results for a gene list", async () => {
    const result = await request(src, src.tools.enrich, {
      userListId: TEST_USER_LIST_ID,
      backgroundType: "KEGG_2021_Human",
    });
    assert.ok(result.KEGG_2021_Human);
    assert.ok(result.KEGG_2021_Human.length > 0);
  });
});
