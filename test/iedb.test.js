import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("iedb");

describe("iedb", () => {
  it("searches for SIINFEKL epitope", async () => {
    const result = await request(src, src.tools.searchEpitopes, {
      sequence: "eq.SIINFEKL",
    });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].structure_id);
  });

  it("gets epitope 35572", async () => {
    const result = await request(src, src.tools.getEpitope, { id: "eq.35572" });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.equal(result[0].structure_id, 35572);
  });
});
