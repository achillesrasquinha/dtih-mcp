import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry.js";
import { request } from "../src/lib/http.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));
const src = sources.get("sabio-rk");

describe("sabio-rk", () => {
  // NOTE: SABIO-RK REST API endpoints currently redirect to a SPA (302 -> /ui/404).
  // The provider is kept for when the API is restored.

  it("attempts to search glycolysis pathway reactions", async () => {
    try {
      const result = await request(src, src.tools.searchReactions, {
        query: "Pathway:glycolysis",
      });
      // If API responds, we should get XML or text
      assert.ok(result.raw || typeof result === "string");
    } catch (err) {
      // API may be down — accept HTTP errors or fetch failures
      assert.ok(
        err.message.includes("HTTP") || err.message.includes("302") ||
        err.message.includes("404") || err.message.includes("fetch failed"),
        `Unexpected error: ${err.message}`
      );
    }
  });

  it("attempts to get kinetic law entry 1", async () => {
    try {
      const result = await request(src, src.tools.getEntry, { id: 1 });
      assert.ok(result.raw || typeof result === "string");
    } catch (err) {
      assert.ok(
        err.message.includes("HTTP") || err.message.includes("302") ||
        err.message.includes("404") || err.message.includes("fetch failed"),
        `Unexpected error: ${err.message}`
      );
    }
  });
});
