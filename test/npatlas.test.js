import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("npatlas");

describe("npatlas", () => {
  it("searches for tetracycline", async () => {
    const result = await request(src, src.tools.search, { query: "tetracycline" });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].original_name || result[0].npaid);
  });

  it("gets compound by NP Atlas ID", async () => {
    const result = await request(src, src.tools.getCompound, { npatlasId: "NPA000001" });
    assert.ok(result);
    assert.ok(result.original_name || result.npaid);
  });
});
