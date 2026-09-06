import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("mobidb");

describe("mobidb", () => {
  it("gets disorder annotations for P04637 (TP53)", async () => {
    const result = await request(src, src.tools.getEntry, { acc: "P04637" });
    assert.ok(result);
    assert.ok(result.acc || result.gene, "expected protein info");
  });
});
