import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("zinc");

describe("zinc", () => {
  it("searches for aspirin", async () => {
    const result = await request(src, src.tools.search, { query: "aspirin" });
    assert.ok(result);
    assert.ok(Array.isArray(result) ? result.length > 0 : result.substances || result.raw);
  });

  it("gets substance by ZINC ID", async () => {
    const result = await request(src, src.tools.getSubstance, { zincId: "ZINC000000000001" });
    assert.ok(result);
    assert.ok(result.zinc_id || result.name || result.smiles || result.raw);
  });
});
