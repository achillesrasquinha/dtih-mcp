import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("biomodels");

describe("biomodels", () => {
  it("searches for apoptosis models", async () => {
    const result = await request(src, src.tools.search, { query: "apoptosis" });
    assert.ok(result.facetStats || result.models);
  });

  it("gets model BIOMD0000000012", async () => {
    const result = await request(src, src.tools.getModel, { id: "BIOMD0000000012" });
    assert.ok(result.name);
    assert.ok(result.name.includes("Repressilator") || result.description);
  });
});
