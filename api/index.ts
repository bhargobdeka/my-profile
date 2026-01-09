import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";

// Create Express app for API routes only
const app = express();

app.use(
  express.json({
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Initialize routes
let appInitialized = false;

async function initializeApp() {
  if (!appInitialized) {
    // Create a dummy httpServer for registerRoutes (it expects it but we don't use it)
    const { createServer } = await import("http");
    const httpServer = createServer(app);
    await registerRoutes(httpServer, app);
    appInitialized = true;
  }
}

// Vercel serverless function handler
// Vercel will automatically provide req and res that are compatible with Express
export default async function handler(req: any, res: any) {
  // Initialize app on first request
  await initializeApp();
  
  // Handle request through Express
  return new Promise<void>((resolve) => {
    app(req, res, () => {
      resolve();
    });
  });
}
