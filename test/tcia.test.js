import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("tcia");

describe("tcia", () => {
  it("lists available collections", async () => {
    const result = await request(src, src.tools.getCollections, {});
    assert.ok(Array.isArray(result), "expected an array of collections");
    assert.ok(result.length > 0, "expected at least one collection");
    assert.ok(result[0].Collection);
  });

  it("gets patient data for TCGA-LUAD", async () => {
    const result = await request(src, src.tools.getPatients, {
      collection: "TCGA-LUAD",
    });
    assert.ok(Array.isArray(result), "expected an array of patients");
    assert.ok(result.length > 0, "expected at least one patient");
    assert.ok(result[0].PatientID);
  });
});
