import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("bern2");

describe("bern2", () => {
  it("annotates free text for biomedical entities", async () => {
    const result = await request(src, src.tools.annotateText, {
      text: "Aspirin inhibits COX-2 and treats pain",
    });
    assert.ok(result.annotations?.length > 0 || result.denotations?.length > 0, "expected annotations");
  });

  it("annotates a PubMed article by PMID", async () => {
    const result = await request(src, src.tools.annotatePmid, { pmid: "35153516" });
    assert.ok(result.annotations?.length > 0 || result.denotations?.length > 0, "expected annotations");
  });
});
