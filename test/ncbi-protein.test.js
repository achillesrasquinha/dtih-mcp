import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("ncbi-protein");

describe("ncbi-protein", () => {
  it("searches for hemoglobin human proteins", async () => {
    const result = await request(src, src.tools.search, { query: "hemoglobin human" });
    assert.ok(result.esearchresult?.idlist?.length > 0);
  });

  it("gets protein summary by ID", async () => {
    const result = await request(src, src.tools.getSummary, { id: "4504349" });
    assert.ok(result.result?.["4504349"]);
  });
});
