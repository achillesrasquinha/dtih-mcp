import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("omnipath");

describe("omnipath", () => {
  it("gets signaling interactions for TP53", async () => {
    const result = await request(src, src.tools.getInteractions, { partners: "TP53", limit: 5 });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].source_genesymbol || result[0].target_genesymbol);
  });

  it("gets enzyme-substrate relationships for AKT1", async () => {
    const result = await request(src, src.tools.getEnzSubstrate, { partners: "AKT1", limit: 5 });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
  });
});
