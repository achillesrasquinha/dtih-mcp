import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("pdbe");

describe("pdbe", () => {
  it("gets summary for PDB entry 1cbs", async () => {
    const result = await request(src, src.tools.getSummary, { pdbId: "1cbs" });
    assert.ok(result["1cbs"]);
    assert.ok(result["1cbs"][0].title);
  });

  it("gets molecules for PDB entry 1cbs", async () => {
    const result = await request(src, src.tools.getMolecules, { pdbId: "1cbs" });
    assert.ok(result["1cbs"]);
    assert.ok(result["1cbs"][0].molecule_name);
  });
});
