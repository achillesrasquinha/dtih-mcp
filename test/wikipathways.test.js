import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("wikipathways");

describe("wikipathways", () => {
  it("gets pathway graph data for WP254 (apoptosis)", async () => {
    const result = await request(src, src.tools.getPathway, { pwId: "WP254" });
    assert.ok(result.entitiesById || result.entities);
  });

  it("gets data nodes for WP254", async () => {
    const result = await request(src, src.tools.getDataNodes, { pwId: "WP254" });
    assert.ok(result.raw?.length > 0);
    assert.ok(result.raw.includes("Label") || result.raw.includes("GeneProduct"));
  });
});
