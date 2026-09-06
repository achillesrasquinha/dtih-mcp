import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { loadRegistry } from "../src/lib/registry/index.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { sources } = loadRegistry(join(__dirname, "../src/providers"));

describe("provider schemas", () => {
  for (const [name, source] of sources) {
    describe(name, () => {
      it("has required fields", () => {
        assert.ok(source.name, "missing name");
        assert.ok(source.displayName, "missing displayName");
        assert.ok(source.description, "missing description");
        assert.ok(Array.isArray(source.tags) && source.tags.length > 0, "missing or empty tags");
        assert.ok(source.baseUrl, "missing baseUrl");
      });

      it("has valid tools", () => {
        assert.ok(source.tools && Object.keys(source.tools).length > 0, "no tools defined");
        for (const [toolName, tool] of Object.entries(source.tools)) {
          assert.ok(tool.description, `${toolName}: missing description`);
          if (source.protocol === "graphql") {
            assert.ok(tool.query, `${toolName}: graphql tool missing query`);
          } else {
            assert.ok(tool.method || tool.path, `${toolName}: missing method or path`);
          }
        }
      });

      it("has valid param definitions", () => {
        for (const [toolName, tool] of Object.entries(source.tools)) {
          if (!tool.params) continue;
          for (const [paramName, param] of Object.entries(tool.params)) {
            assert.ok(param.type, `${toolName}.${paramName}: missing type`);
          }
        }
      });
    });
  }
});
