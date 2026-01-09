import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, writeFile } from "fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });

  console.log("building Vercel API handler...");
  // Bundle the API handler with ALL dependencies for Vercel
  // Use CommonJS format with .cjs extension to avoid ESM resolution issues
  // This is the solution that worked for CoLiving project
  await esbuild({
    entryPoints: ["server/api.ts"],
    platform: "node",
    target: "node20",
    bundle: true,
    format: "cjs",
    outfile: "api/handler.cjs",  // Explicit .cjs extension
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    keepNames: true,
    external: [],  // Bundle everything - no externals
    logLevel: "info",
    alias: {
      "@shared": "./shared",
    },
  });

  // Generate ESM wrapper that uses createRequire for CJS/ESM interop
  // Vercel detects api/index.ts but executes the bundled handler.cjs
  console.log("generating API wrapper...");
  const wrapperContent = `// Auto-generated wrapper - do not edit manually
// This file is regenerated during build
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const handler = require("./handler.cjs");

export default async function(req: any, res: any): Promise<void> {
  const fn = handler.default || handler;
  return fn(req, res);
}
`;
  await writeFile("api/index.ts", wrapperContent, "utf-8");
  console.log("API wrapper generated at api/index.ts");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
