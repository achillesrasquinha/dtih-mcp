import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("metabolomics-workbench");

describe("metabolomics-workbench", () => {
  it("searches studies by title keyword diabetes", async () => {
    const result = await request(src, src.tools.searchStudies, { query: "diabetes" });
    assert.ok(typeof result === "object");
    const studies = Object.values(result);
    assert.ok(studies.length > 0);
    assert.ok(studies[0].study_id);
  });

  it("gets metabolite Glucose from RefMet", async () => {
    const result = await request(src, src.tools.getMetabolite, { name: "Glucose" });
    assert.ok(result.name === "Glucose");
    assert.ok(result.formula === "C6H12O6");
  });
});
