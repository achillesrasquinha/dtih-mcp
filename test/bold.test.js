import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("bold");

describe("bold", () => {
  // NOTE: BOLD API is currently offline (as of Sept 2026).
  // These tests will fail until the service is restored.
  it("searches specimens for Danaus plexippus", { skip: "BOLD API is offline" }, async () => {
    const result = await request(src, src.tools.searchSpecimen, { name: "Danaus plexippus" });
    assert.ok(result, "expected specimen response");
  });

  it("searches sequences for Danaus plexippus", { skip: "BOLD API is offline" }, async () => {
    const result = await request(src, src.tools.searchSequences, { name: "Danaus plexippus" });
    assert.ok(result, "expected sequence response");
  });
});
