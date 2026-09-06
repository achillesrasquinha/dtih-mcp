import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ucsc");

describe("ucsc", () => {
  it("lists available genome assemblies", async () => {
    const result = await request(src, src.tools.getGenomes, {});
    assert.ok(result.ucscGenomes);
    assert.ok(result.ucscGenomes.hg38);
  });

  it("gets track data for hg38 gold on chr1", async () => {
    const result = await request(src, src.tools.getTrack, {
      genome: "hg38",
      track: "gold",
      chrom: "chr1",
      start: 0,
      end: 100000,
    });
    assert.ok(result);
  });
});
