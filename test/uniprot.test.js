import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("uniprot");

describe("uniprot", () => {
  it("searches for BRCA1 human", async () => {
    const result = await request(src, src.tools.search, { query: "BRCA1 AND organism_id:9606" });
    assert.ok(result.results?.length > 0);
    assert.ok(result.results[0].primaryAccession);
  });

  it("gets entry by accession", async () => {
    const result = await request(src, src.tools.getEntry, { accession: "P00533" });
    assert.ok(result.primaryAccession === "P00533");
    assert.ok(result.proteinDescription);
  });
});
