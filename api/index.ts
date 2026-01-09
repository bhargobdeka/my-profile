import "dotenv/config";
import express, { type Request, Response, NextFunction } from "express";
import { storage } from "../server/storage";
import { api } from "../shared/routes";
import { z } from "zod";

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
        // Register API routes directly
        // Projects
        app.get(api.projects.list.path, async (req, res) => {
          const projects = await storage.getProjects();
          res.json(projects);
        });

        // Articles
        app.get(api.articles.list.path, async (req, res) => {
          const articles = await storage.getArticles();
          res.json(articles);
        });

        // Experience
        app.get(api.experience.list.path, async (req, res) => {
          const experience = await storage.getExperience();
          res.json(experience);
        });

        // Publications
        app.get(api.publications.list.path, async (req, res) => {
          const publications = await storage.getPublications();
          res.json(publications);
        });

        // Skills
        app.get(api.skills.list.path, async (req, res) => {
          const skills = await storage.getSkills();
          res.json(skills);
        });

        // Contact
        app.post(api.contact.submit.path, async (req, res) => {
          try {
            const input = api.contact.submit.input.parse(req.body);
            await storage.createMessage(input);
            res.status(201).json({ success: true, message: "Message sent successfully" });
          } catch (err) {
            if (err instanceof z.ZodError) {
              return res.status(400).json({
                message: err.errors[0].message,
                field: err.errors[0].path.join('.'),
              });
            }
            throw err;
          }
        });

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
