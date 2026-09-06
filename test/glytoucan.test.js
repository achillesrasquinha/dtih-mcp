import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("glytoucan");

describe("glytoucan", () => {
  it("lists glycan entries", async () => {
    const result = await request(src, src.tools.listGlycans, {});
    assert.ok(result);
  });

  it("gets glycan G00055MO details", async () => {
    const result = await request(src, src.tools.getGlycan, { accession_number: "G00055MO" });
    assert.ok(result);
  });
});
