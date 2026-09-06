import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("orphanet");

describe("orphanet", () => {
  it("searches for Marfan syndrome", async () => {
    const result = await request(src, src.tools.searchDisease, { query: "Marfan" });
    assert.ok(Array.isArray(result));
    assert.ok(result.length > 0);
    assert.ok(result[0].ORPHAcode);
    assert.ok(result[0]["Preferred term"]);
  });

  it("gets disease 558 (Marfan syndrome)", async () => {
    const result = await request(src, src.tools.getDisease, { orphacode: "558" });
    assert.ok(result.ORPHAcode === 558);
    assert.ok(result["Preferred term"]);
  });
});
