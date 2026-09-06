import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("who-gho");

describe("who-gho", () => {
  it("lists indicators containing malaria", async () => {
    const result = await request(src, src.tools.getIndicators, {
      query: "contains(IndicatorName,'malaria')",
    });
    assert.ok(result.value?.length > 0, "expected at least one indicator");
    assert.ok(result.value[0].IndicatorCode);
    assert.ok(result.value[0].IndicatorName);
  });

  it("gets data for indicator WHOSIS_000001", async () => {
    const result = await request(src, src.tools.getData, {
      indicatorCode: "WHOSIS_000001",
    });
    assert.ok(result.value?.length > 0, "expected at least one data point");
  });
});
