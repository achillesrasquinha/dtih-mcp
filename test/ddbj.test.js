import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ddbj");

describe("ddbj", () => {
  it("gets entry for AB000001", async () => {
    const result = await request(src, src.tools.getEntry, {
      id: "AB000001",
    });
    assert.ok(result.raw);
    assert.ok(result.raw.length > 0);
    assert.ok(result.raw.includes("AB000001"));
  });
});
