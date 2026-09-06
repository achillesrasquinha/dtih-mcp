import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("glygen");

describe("glygen", () => {
  it("initializes glycan search and gets available parameters", async () => {
    const result = await request(src, src.tools.searchGlycans, {});
    assert.ok(result.organism);
    assert.ok(result.organism.length > 0);
  });

  it("gets protein P00734 (prothrombin) details", async () => {
    const result = await request(src, src.tools.getProtein, { accession: "P00734" });
    assert.ok(result.mass);
    assert.ok(result.refseq);
  });
});
