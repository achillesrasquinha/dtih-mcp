import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("chebi");

describe("chebi", () => {
  it("searches for aspirin in ChEBI ontology", async () => {
    const result = await request(src, src.tools.search, { query: "aspirin" });
    assert.ok(result.response?.numFound > 0);
    assert.ok(result.response.docs[0].label);
  });

  it("gets aspirin term by short form CHEBI_15365", async () => {
    const result = await request(src, src.tools.getTerm, { shortForm: "CHEBI_15365" });
    const terms = result._embedded?.terms;
    assert.ok(terms?.length > 0);
    assert.ok(terms[0].iri === "http://purl.obolibrary.org/obo/CHEBI_15365");
    assert.ok(terms[0].description?.length > 0);
  });
});
