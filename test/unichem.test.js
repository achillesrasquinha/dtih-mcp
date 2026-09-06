import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("unichem");

describe("unichem", () => {
  it("finds connectivity for CHEMBL25 (aspirin)", async () => {
    const result = await request(src, src.tools.getConnectivity, {
      compound: "CHEMBL25",
      sourceID: 1,
      type: "sourceID",
    });
    assert.ok(result.response === "Success");
    assert.ok(result.sources.length > 0);
  });

  it("looks up compound CHEMBL25", async () => {
    // NOTE: UniChem /compounds endpoint can be intermittently unavailable (HTTP 500).
    try {
      const result = await request(src, src.tools.getCompound, {
        compound: "CHEMBL25",
        sourceID: 1,
        type: "sourceID",
      });
      assert.ok(result.compounds);
      assert.ok(result.compounds.length > 0);
    } catch (err) {
      assert.ok(
        err.message.includes("HTTP 500") || err.message.includes("fetch failed"),
        `Unexpected error: ${err.message}`
      );
    }
  });
});
