export function resolveAuth(source) {
  const auth = source.auth;
  if (!auth) return {};

  const val = auth.env ? process.env[auth.env] : null;
  if (!val) {
    if (auth.required) throw new Error(`Missing env var: ${auth.env}`);
    return {};
  }

  if (auth.type === "apiKey") return { params: { [auth.param]: val } };
  if (auth.type === "header") return { headers: { [auth.header]: val } };
  if (auth.type === "bearer") return { headers: { Authorization: `Bearer ${val}` } };
  return {};
}
