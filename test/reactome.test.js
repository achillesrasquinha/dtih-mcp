import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("reactome");

describe("reactome", () => {
  it("searches for apoptosis pathways", async () => {
    const result = await request(src, src.tools.search, { query: "apoptosis" });
    assert.ok(result.results?.length > 0);
  });

  it("gets pathway by stable ID", async () => {
    const result = await request(src, src.tools.getPathway, { pathwayId: "R-HSA-109581" });
    assert.ok(result.stId === "R-HSA-109581" || result.displayName);
  });
});
