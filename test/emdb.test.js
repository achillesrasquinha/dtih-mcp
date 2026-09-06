import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("emdb");

describe("emdb", () => {
  it("searches for ribosome entries", async () => {
    const result = await request(src, src.tools.search, { query: "ribosome" });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
  });

  it("gets entry EMD-1234", async () => {
    const result = await request(src, src.tools.getEntry, { id: "EMD-1234" });
    assert.ok(result);
    assert.ok(result.admin || result._id);
  });
});
