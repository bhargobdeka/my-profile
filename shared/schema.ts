import { pgTable, text, serial, timestamp, boolean, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact Messages Table
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  type: text("type").notNull(), // "Hiring", "Contract", "Consultation", "Other"
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertMessageSchema = createInsertSchema(messages).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  email: z.string().email(),
  type: z.enum(["Hiring", "Technical Writing Contract", "Consultation", "Other"])
});

// Explicit Types
export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;

// Static Content Types
export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  html_url: z.string(),
  homepage: z.string().nullable(),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  topics: z.array(z.string()),
  updated_at: z.string(),
});
export type Project = z.infer<typeof projectSchema>;

export const articleSchema = z.object({
  title: z.string(),
  link: z.string(),
  pubDate: z.string(),
  thumbnail: z.string().optional(),
  author: z.string(),
  categories: z.array(z.string()).optional(),
  client: z.string().optional(),
});
export type Article = z.infer<typeof articleSchema>;

export const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  period: z.string(),
  location: z.string(),
  description: z.string().optional(),
  achievements: z.array(z.string()),
  techStack: z.array(z.string()),
});
export type Experience = z.infer<typeof experienceSchema>;

export const publicationSchema = z.object({
  title: z.string(),
  publisher: z.string(),
  year: z.string(),
  authors: z.string(),
});
export type Publication = z.infer<typeof publicationSchema>;

export const skillCategorySchema = z.object({
  category: z.string(),
  skills: z.array(z.string()),
});
export type SkillCategory = z.infer<typeof skillCategorySchema>;
