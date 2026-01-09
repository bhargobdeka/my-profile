// Auto-generated wrapper - do not edit manually
// This file is regenerated during build
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const handler = require("./handler.cjs");

export default async function(req: any, res: any): Promise<void> {
  const fn = handler.default || handler;
  return fn(req, res);
}
