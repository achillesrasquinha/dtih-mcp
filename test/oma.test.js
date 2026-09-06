import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("oma");

describe("oma", () => {
  it("gets protein info for P04637", async () => {
    const result = await request(src, src.tools.getProtein, { proteinId: "P04637" });
    assert.ok(result);
    assert.ok(result.entry_nr || result.sequence || result.omaid || result.raw);
  });
});
