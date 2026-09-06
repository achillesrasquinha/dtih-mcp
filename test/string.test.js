import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("string");

describe("string", () => {
  it("gets protein-protein interactions for TP53", async () => {
    const result = await request(src, src.tools.getInteractions, { identifiers: "TP53" });
    assert.ok(Array.isArray(result) && result.length > 0);
    assert.ok(result[0].preferredName_A || result[0].stringId_A);
  });

  it("gets functional enrichment for TP53", async () => {
    const result = await request(src, src.tools.getEnrichment, { identifiers: "TP53" });
    assert.ok(Array.isArray(result) && result.length > 0);
    assert.ok(result[0].term || result[0].category);
  });
});
