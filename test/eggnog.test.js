import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("eggnog");

describe("eggnog", () => {
  it("searches for kinase orthologous groups", async () => {
    const result = await request(src, src.tools.searchOG, {
      q: "kinase",
    });
    assert.ok(result);
  });
});
