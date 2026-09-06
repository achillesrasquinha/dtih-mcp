import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("jaspar");

describe("jaspar", () => {
  it("searches for TP53 transcription factor motifs", async () => {
    const result = await request(src, src.tools.searchMotifs, { query: "TP53" });
    assert.ok(result.results?.length > 0 || result.count > 0);
  });

  it("gets a specific matrix by ID", async () => {
    const result = await request(src, src.tools.getMatrix, { id: "MA0106.1" });
    assert.ok(result.matrix_id || result.name);
  });
});
