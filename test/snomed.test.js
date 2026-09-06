import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("snomed");

describe("snomed", () => {
  it("searches for diabetes concepts", async () => {
    const result = await request(src, src.tools.searchConcepts, { term: "diabetes" });
    assert.equal(result.resourceType, "ValueSet");
    assert.ok(result.expansion?.contains?.length > 0, "expected at least one concept");
    const codes = result.expansion.contains.map((c) => c.code);
    assert.ok(codes.length > 0, "expected SNOMED codes");
  });

  it("looks up concept 73211009 (diabetes mellitus)", async () => {
    const result = await request(src, src.tools.getConcept, { code: "73211009" });
    assert.equal(result.resourceType, "Parameters");
    const display = result.parameter?.find((p) => p.name === "display");
    assert.ok(display?.valueString?.toLowerCase().includes("diabetes"), "expected diabetes mellitus");
  });
});
