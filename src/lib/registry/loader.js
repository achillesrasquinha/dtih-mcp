import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { parse } from "yaml";

export function loadRegistry(providersDir) {
  const sources = new Map();
  const toolIndex = [];

  for (const file of walkYaml(providersDir)) {
    const raw = readFileSync(file, "utf-8");
    const source = parse(raw);
    if (!source?.name || !source?.tools) continue;

    sources.set(source.name, source);

    for (const [toolName, tool] of Object.entries(source.tools)) {
      toolIndex.push({
        source: source.name,
        displayName: source.displayName || source.name,
        tool: toolName,
        description: tool.description || "",
        tags: [...(source.tags || []), ...(tool.tags || [])],
        params: compactParams(tool.params),
      });
    }
  }

  return { sources, toolIndex };
}

function compactParams(params) {
  if (!params) return "";
  return Object.entries(params)
    .map(([name, def]) => {
      const type = def.type || "string";
      const req = def.required ? "*" : "";
      const dflt = def.default !== undefined ? `=${def.default}` : "";
      return `${name}${req} (${type}${dflt})`;
    })
    .join(", ");
}

function* walkYaml(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) yield* walkYaml(full);
    else if (extname(full) === ".yaml" || extname(full) === ".yml") yield full;
  }
}
