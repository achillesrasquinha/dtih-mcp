import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("cellosaurus");

describe("cellosaurus", () => {
  it("searches for HeLa cell lines", async () => {
    const result = await request(src, src.tools.search, { query: "HeLa" });
    assert.ok(result.Cellosaurus?.["cell-line-list"]?.length > 0);
  });

  it("gets HeLa cell line by accession", async () => {
    const result = await request(src, src.tools.getCellLine, { accession: "CVCL_0030" });
    const cellLines = result.Cellosaurus?.["cell-line-list"];
    assert.ok(cellLines?.length > 0);
    const primary = cellLines[0]["accession-list"]?.find(a => a.type === "primary");
    assert.ok(primary?.value === "CVCL_0030");
  });
});
