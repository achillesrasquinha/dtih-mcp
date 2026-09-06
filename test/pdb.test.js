import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("pdb");

describe("pdb", () => {
  it("gets entry for hemoglobin (4HHB)", async () => {
    const result = await request(src, src.tools.getEntry, { entryId: "4HHB" });
    assert.ok(result.entry?.id === "4HHB" || result.rcsb_id === "4HHB");
    assert.ok(result.struct?.title || result.rcsb_entry_info);
  });

  it("gets polymer entity", async () => {
    const result = await request(src, src.tools.getPolymerEntity, { entryId: "4HHB", entityId: "1" });
    assert.ok(result.entity_poly?.pdbx_seq_one_letter_code);
  });
});
