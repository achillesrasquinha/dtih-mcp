import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("rhea");

describe("rhea", () => {
  it("searches for ATP reactions", async () => {
    const result = await request(src, src.tools.search, { query: "ATP" });
    assert.ok(result.count > 0);
    assert.ok(result.results?.length > 0);
    assert.ok(result.results[0].equation);
  });

  it("gets reaction RHEA:10000", async () => {
    const result = await request(src, src.tools.getReaction, { rheaId: "RHEA:10000" });
    assert.ok(result.count >= 1);
    assert.ok(result.results?.[0]?.equation);
  });
});
