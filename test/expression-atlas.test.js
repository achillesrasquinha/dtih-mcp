import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("expression-atlas");

describe("expression-atlas", () => {
  it("lists available experiments", async () => {
    const result = await request(src, src.tools.listExperiments, {});
    assert.ok(result.experiments?.length > 0);
    assert.ok(result.experiments[0].experimentAccession);
  });

  it("gets experiment E-MTAB-513 details", async () => {
    const result = await request(src, src.tools.getExperiment, { experimentId: "E-MTAB-513" });
    assert.ok(result.columnHeaders || result.profiles || result.experiment);
  });
});
