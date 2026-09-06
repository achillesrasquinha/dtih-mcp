import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("nci-cir");

describe("nci-cir", () => {
  it("resolves aspirin to SMILES", async () => {
    const result = await request(src, src.tools.resolveName, { name: "aspirin" });
    assert.ok(result.raw);
    assert.ok(result.raw.includes("C"));
  });

  it("converts aspirin to InChI", async () => {
    const result = await request(src, src.tools.convertFormat, {
      identifier: "aspirin",
      format: "inchi",
    });
    assert.ok(result.raw);
    assert.ok(result.raw.includes("InChI"));
  });
});
