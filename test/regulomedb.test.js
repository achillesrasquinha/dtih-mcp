import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("regulomedb");

describe("regulomedb", () => {
  it("searches for regulatory variants in a region", async () => {
    const result = await request(src, src.tools.search, {
      regions: "chr1:39447519-39447520",
      genome: "GRCh38",
    });
    assert.ok(typeof result.total === "number");
  });
});
