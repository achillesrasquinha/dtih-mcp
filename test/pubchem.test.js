import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("pubchem");

describe("pubchem", () => {
  it("searches for aspirin", async () => {
    const result = await request(src, src.tools.search, { query: "aspirin" });
    assert.ok(result.IdentifierList?.CID?.length > 0);
  });

  it("gets compound properties", async () => {
    const result = await request(src, src.tools.getCompound, { cid: "2244" });
    const props = result.PropertyTable?.Properties?.[0];
    assert.ok(props);
    assert.ok(props.MolecularFormula);
    assert.ok(props.IUPACName);
  });

  it("gets synonyms", async () => {
    const result = await request(src, src.tools.getSynonyms, { cid: "2244" });
    const syns = result.InformationList?.Information?.[0]?.Synonym;
    assert.ok(syns?.length > 0);
  });
});
