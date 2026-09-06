import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("hpo");

describe("hpo", () => {
  it("searches for epilepsy phenotype terms", async () => {
    const result = await request(src, src.tools.searchTerms, { query: "epilepsy", max: 5 });
    assert.ok(result.terms?.length > 0);
    assert.ok(result.terms[0].id);
    assert.ok(result.terms[0].name);
  });

  it("gets HPO term HP:0001250 (Seizure)", async () => {
    const result = await request(src, src.tools.getTerm, { id: "HP:0001250" });
    assert.ok(result.id === "HP:0001250");
    assert.ok(result.name);
  });
});
