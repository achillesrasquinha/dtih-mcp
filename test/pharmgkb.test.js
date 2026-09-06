import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("pharmgkb");

describe("pharmgkb", () => {
  it("searches for warfarin", async () => {
    const result = await request(src, src.tools.searchDrugs, { name: "eq.warfarin" });
    assert.ok(Array.isArray(result), "expected an array");
    assert.ok(result.length > 0, "expected at least one drug");
    assert.equal(result[0].name, "warfarin");
  });

  it("gets drug-gene pairs for warfarin (RxNorm:11289)", async () => {
    const result = await request(src, src.tools.getDrugGenePairs, {
      drugid: "eq.RxNorm:11289",
    });
    assert.ok(Array.isArray(result), "expected an array");
    assert.ok(result.length > 0, "expected at least one pair");
    assert.ok(result[0].genesymbol);
  });
});
