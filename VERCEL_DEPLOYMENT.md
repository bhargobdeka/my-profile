# Vercel Deployment Guide

## Prerequisites

1. **GitHub Repository**: Your code should be pushed to a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you haven't already

## Deployment Steps

### 1. Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the project

### 2. Configure Environment Variables

In your Vercel project settings, add the following environment variables:

- **`DATABASE_URL`**: Your PostgreSQL connection string
  - Format: `postgresql://username:password@host:port/database`
  - For production, use a managed database service (e.g., Vercel Postgres, Supabase, Neon)

- **`NODE_ENV`**: Set to `production` (Vercel sets this automatically)

- **`GH_TOKEN`**: (Optional) Only needed if you're using GitHub MCP features

### 3. Build Settings

Vercel will automatically detect:
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

These are already configured in `vercel.json`.

### 4. Deploy

1. Click "Deploy"
2. Vercel will:
   - Install dependencies
   - Run the build command
   - Deploy your application

## Project Structure

- **`api/index.ts`**: Serverless function handler for API routes
- **`vercel.json`**: Vercel configuration
- **`dist/public`**: Built static files (client)
- **`dist/index.cjs`**: Built server code (not used in Vercel deployment)

## API Routes

All API routes are handled by the serverless function at `/api/*`:
- `/api/projects` - GET projects list
- `/api/articles` - GET articles list
- `/api/experience` - GET experience list
- `/api/publications` - GET publications list
- `/api/skills` - GET skills list
- `/api/contact` - POST contact form submission

## Static Files

Static files (React app) are served from `dist/public` and handled by Vercel's CDN.

## Troubleshooting

### Database Connection Issues

- Ensure `DATABASE_URL` is correctly set in Vercel environment variables
- Make sure your database allows connections from Vercel's IP addresses
- For managed databases, check firewall/network settings

### Build Failures

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation passes locally

### API Routes Not Working

- Check that `api/index.ts` exists and exports a default handler
- Verify routes are registered in `server/routes.ts`
- Check Vercel function logs for errors

## Notes

- The Express app is converted to a serverless function for Vercel
- Static file serving is handled by Vercel, not Express
- Database connections should use connection pooling for serverless environments
