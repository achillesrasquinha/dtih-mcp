import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("disprot");

describe("disprot", () => {
  it("searches for p53 disordered proteins", async () => {
    const result = await request(src, src.tools.search, { q: "p53" });
    assert.ok(result.data?.length > 0);
  });

  it("gets a DisProt entry by ID", async () => {
    const result = await request(src, src.tools.getEntry, { disprotId: "DP00086" });
    assert.ok(result.disprot_id || result.name || result.acc);
  });
});
