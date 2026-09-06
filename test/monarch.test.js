import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("monarch");

describe("monarch", () => {
  it("searches for Marfan syndrome", async () => {
    const result = await request(src, src.tools.search, { query: "Marfan syndrome" });
    assert.ok(result.items?.length > 0 || result.total > 0);
  });

  it("gets entity details for MONDO:0007947", async () => {
    const result = await request(src, src.tools.getEntity, { id: "MONDO:0007947" });
    assert.ok(result.id || result.name || result.category);
  });
});
