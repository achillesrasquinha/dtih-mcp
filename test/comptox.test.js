import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("comptox");

describe("comptox", () => {
  it("searches for bisphenol chemicals", async () => {
    const result = await request(src, src.tools.searchChemical, { query: "bisphenol" });
    assert.ok(result, "expected a response");
    assert.ok(Array.isArray(result), "expected an array of results");
    assert.ok(result.length > 0, "expected at least one result");
  });

  it("searches for phthalate chemicals by substring", async () => {
    const result = await request(src, src.tools.searchContain, { query: "phthalate" });
    assert.ok(result, "expected a response");
    assert.ok(Array.isArray(result), "expected an array of results");
  });
});
