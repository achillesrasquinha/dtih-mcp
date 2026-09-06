import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("drugcentral");

describe("drugcentral (DailyMed)", () => {
  it("searches drug names for metformin", async () => {
    const result = await request(src, src.tools.search, { query: "metformin" });
    assert.ok(result.data?.length > 0);
    assert.ok(result.data[0].drug_name);
  });

  it("gets drug product labels for aspirin", async () => {
    const result = await request(src, src.tools.getLabel, { query: "aspirin" });
    assert.ok(result.data?.length > 0);
    assert.ok(result.data[0].title);
  });
});
