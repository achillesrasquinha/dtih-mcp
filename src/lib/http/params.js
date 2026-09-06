export function mapParams(tool, params) {
  const mapped = {};
  const schema = tool.params || {};
  for (const [key, def] of Object.entries(schema)) {
    const value = params[key] ?? def.default;
    if (value === undefined) {
      if (def.required) throw new Error(`Missing required param: ${key}`);
      continue;
    }
    mapped[def.mapsTo || key] = def.prefix ? def.prefix + value : value;
  }
  return mapped;
}
