import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("opentargets");

describe("opentargets", () => {
  it("searches for EGFR target", async () => {
    const result = await request(src, src.tools.searchTarget, { queryString: "EGFR" });
    assert.ok(result.search?.total > 0);
    assert.ok(result.search.hits.length > 0);
    assert.ok(result.search.hits[0].name);
  });

  it("gets target details with disease associations", async () => {
    const result = await request(src, src.tools.getTarget, { ensemblId: "ENSG00000146648" });
    assert.ok(result.target?.approvedSymbol === "EGFR");
    assert.ok(result.target?.associatedDiseases?.count > 0);
  });
});
