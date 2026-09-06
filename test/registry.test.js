import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry, searchTools } from "../src/lib/registry.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources, toolIndex } = loadRegistry(join(__dirname, "../src/providers"));

describe("registry", () => {
  it("loads all sources", () => {
    assert.ok(sources.size >= 6);
  });

  it("indexes tools with tags", () => {
    assert.ok(toolIndex.length > 0);
    const entry = toolIndex.find((t) => t.source === "pubchem" && t.tool === "search");
    assert.ok(entry);
    assert.ok(entry.tags.includes("compounds"));
  });

  it("searchTools finds by keyword", () => {
    const results = searchTools(toolIndex, "protein structure");
    assert.ok(results.length > 0);
    assert.ok(results.some((r) => r.source === "pdb"));
  });

  it("searchTools filters by tag", () => {
    const results = searchTools(toolIndex, null, ["chemistry"]);
    assert.ok(results.length > 0);
  });

  it("searchTools returns empty for nonsense", () => {
    const results = searchTools(toolIndex, "xyzzyplugh");
    assert.equal(results.length, 0);
  });

  it("searchTools finds across overlapping sources", () => {
    const results = searchTools(toolIndex, "compound search");
    const srcs = [...new Set(results.map((r) => r.source))];
    assert.ok(srcs.includes("pubchem"));
    assert.ok(srcs.includes("chembl"));
  });
});
