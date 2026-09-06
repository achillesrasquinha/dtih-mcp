import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("cellxgene");

describe("cellxgene", () => {
  it("lists dataset collections", async () => {
    const result = await request(src, src.tools.getCollections, {});
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
  });
});
