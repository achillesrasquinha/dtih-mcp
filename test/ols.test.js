import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ols");

describe("ols", () => {
  it("searches for apoptosis terms", async () => {
    const result = await request(src, src.tools.searchTerms, { query: "apoptosis" });
    assert.ok(result.response?.docs?.length > 0);
    assert.ok(result.response.docs[0].iri);
  });

  it("gets GO ontology metadata", async () => {
    const result = await request(src, src.tools.getOntology, { id: "go" });
    assert.equal(result.ontologyId, "go");
    assert.ok(result.numberOfTerms > 0);
  });
});
