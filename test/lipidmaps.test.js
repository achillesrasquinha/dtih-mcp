import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("lipidmaps");

describe("lipidmaps", () => {
  it("gets compound by LIPID MAPS ID", async () => {
    const result = await request(src, src.tools.getCompound, { lmId: "LMFA01010001" });
    assert.ok(result);
    assert.ok(Array.isArray(result) ? result.length > 0 : result.name || result.lm_id || result.raw);
  });

  it("searches lipids by abbreviated chain name", async () => {
    const result = await request(src, src.tools.getByName, { name: "DHA" });
    assert.ok(result);
  });
});
