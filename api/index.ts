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
  console.error("API Error:", err);
  res.status(status).json({ message });
});

// Initialize routes
let appInitialized = false;
let initializationPromise: Promise<void> | null = null;

async function initializeApp() {
  if (initializationPromise) {
    return initializationPromise;
  }
  
  initializationPromise = (async () => {
    if (!appInitialized) {
      try {
        // Create a dummy httpServer for registerRoutes (it expects it but we don't use it)
        const { createServer } = await import("http");
        const httpServer = createServer(app);
        await registerRoutes(httpServer, app);
        appInitialized = true;
        console.log("API routes initialized");
      } catch (error) {
        console.error("Failed to initialize routes:", error);
        throw error;
      }
    }
  })();
  
  return initializationPromise;
}

// Vercel serverless function handler
export default async function handler(req: any, res: any) {
  try {
    // Initialize app on first request
    await initializeApp();
    
    // Handle request through Express
    return new Promise<void>((resolve, reject) => {
      app(req, res, (err?: any) => {
        if (err) {
          console.error("Request handling error:", err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ 
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : String(error)
    });
  }
}
