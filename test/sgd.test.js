import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("sgd");

describe("sgd", () => {
  it("gets locus details for CDC28", async () => {
    const result = await request(src, src.tools.getLocusDetails, { sgdId: "CDC28" });
    assert.ok(result, "expected a response");
    assert.ok(result.display_name || result.gene_name, "expected gene info");
  });
});
