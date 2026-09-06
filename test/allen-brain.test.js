import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("allen-brain");

describe("allen-brain", () => {
  it("gets brain structures with default criteria", async () => {
    const result = await request(src, src.tools.getStructures, {});
    assert.ok(result);
    assert.ok(Array.isArray(result.msg));
  });
});
