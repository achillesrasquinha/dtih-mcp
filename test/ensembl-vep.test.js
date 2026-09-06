import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ensembl-vep");

describe("ensembl-vep", () => {
  it("predicts variant effects by HGVS notation", async () => {
    const result = await request(src, src.tools.predictByHgvs, {
      hgvs: "ENST00000366667:c.803C>T",
    });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].transcript_consequences);
  });
});
