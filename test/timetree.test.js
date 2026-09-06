import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("timetree");

describe("timetree", () => {
  it("gets pairwise divergence time between Homo sapiens and Mus musculus", async () => {
    const result = await request(src, src.tools.getPairwiseTime, {
      taxonA: "Homo sapiens",
      taxonB: "Mus musculus",
    });
    assert.ok(result);
    assert.ok(result.studies || result.time || result.raw);
  });
});
