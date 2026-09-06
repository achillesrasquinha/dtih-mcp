import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("guidetopharmacology");

describe("guidetopharmacology", () => {
  it("searches targets for EGFR", async () => {
    const result = await request(src, src.tools.searchTargets, { name: "EGFR" });
    assert.ok(result);
    assert.ok(Array.isArray(result) ? result.length > 0 : result.targets || result.raw);
  });

  it("searches ligands for erlotinib", async () => {
    const result = await request(src, src.tools.searchLigands, { name: "erlotinib" });
    assert.ok(result);
    assert.ok(Array.isArray(result) ? result.length > 0 : result.ligands || result.raw);
  });
});
