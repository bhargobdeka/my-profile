import { z } from 'zod';
import { insertMessageSchema, projectSchema, articleSchema, experienceSchema, publicationSchema, skillSchema } from './schema';

export { insertMessageSchema, projectSchema, articleSchema, experienceSchema, publicationSchema, skillSchema };

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(projectSchema),
      },
    },
  },
  articles: {
    list: {
      method: 'GET' as const,
      path: '/api/articles',
      responses: {
        200: z.array(articleSchema),
      },
    },
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience',
      responses: {
        200: z.array(experienceSchema),
      },
    },
  },
  publications: {
    list: {
      method: 'GET' as const,
      path: '/api/publications',
      responses: {
        200: z.array(publicationSchema),
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(skillSchema),
      },
    },
  },
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertMessageSchema,
      responses: {
        201: z.object({ success: z.boolean(), message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type ProjectResponse = z.infer<typeof api.projects.list.responses[200]>;
export type ArticleResponse = z.infer<typeof api.articles.list.responses[200]>;
export type ExperienceResponse = z.infer<typeof api.experience.list.responses[200]>;
