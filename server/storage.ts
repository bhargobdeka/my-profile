import { db } from "./db";
import { messages, type Message, type InsertMessage, type Project, type Article, type Experience } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
  
  // Projects (Dynamic or Mock)
  getProjects(): Promise<Project[]>;
  
  // Articles (Dynamic or Mock)
  getArticles(): Promise<Article[]>;
  
  // Experience (Static)
  getExperience(): Promise<Experience[]>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async getProjects(): Promise<Project[]> {
    // Try to fetch from GitHub if token and username are present
    const githubToken = process.env.GITHUB_TOKEN;
    const githubUsername = process.env.GITHUB_USERNAME || "github"; // Default to github official if none

    if (githubToken) {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=10`, {
          headers: {
            "Authorization": `token ${githubToken}`,
            "Accept": "application/vnd.github.v3+json"
          }
        });
        
        if (response.ok) {
          const repos = await response.json();
          return repos.map((repo: any) => ({
            id: String(repo.id),
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            topics: repo.topics || [],
            updated_at: repo.updated_at
          }));
        }
        console.error("GitHub API error:", response.statusText);
      } catch (error) {
        console.error("Failed to fetch GitHub projects:", error);
      }
    }

    // Fallback Mock Data
    return [
      {
        id: "1",
        name: "portfolio-website",
        description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
        html_url: "https://github.com/username/portfolio",
        homepage: "https://portfolio.dev",
        language: "TypeScript",
        stargazers_count: 12,
        forks_count: 2,
        topics: ["react", "tailwind", "portfolio"],
        updated_at: new Date().toISOString()
      },
      {
        id: "2",
        name: "ai-rag-pipeline",
        description: "Production-grade RAG pipeline using LangChain and OpenAI.",
        html_url: "https://github.com/username/ai-rag",
        homepage: null,
        language: "Python",
        stargazers_count: 45,
        forks_count: 8,
        topics: ["ai", "rag", "langchain"],
        updated_at: new Date().toISOString()
      },
      {
        id: "3",
        name: "llm-eval-framework",
        description: "Automated evaluation framework for Large Language Models.",
        html_url: "https://github.com/username/llm-eval",
        homepage: null,
        language: "Python",
        stargazers_count: 89,
        forks_count: 15,
        topics: ["llm", "testing", "automation"],
        updated_at: new Date().toISOString()
      }
    ];
  }

  async getArticles(): Promise<Article[]> {
    const mediumUsername = process.env.MEDIUM_USERNAME;
    
    if (mediumUsername) {
      try {
        // Use rss2json to convert RSS to JSON
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`);
        
        if (response.ok) {
          const data = await response.json();
          if (data.status === 'ok') {
            return data.items.map((item: any) => ({
              title: item.title,
              link: item.link,
              pubDate: item.pubDate,
              thumbnail: item.thumbnail,
              author: item.author,
              categories: item.categories
            }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch Medium articles:", error);
      }
    }

    // Fallback Mock Data
    return [
      {
        title: "Building Production RAG Systems",
        link: "#",
        pubDate: new Date().toISOString(),
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        author: "Me",
        categories: ["AI", "Engineering"]
      },
      {
        title: "LLM Evaluation Frameworks",
        link: "#",
        pubDate: new Date().toISOString(),
        thumbnail: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
        author: "Me",
        categories: ["LLM", "Testing"]
      },
      {
        title: "Data Pipelines with AWS Batch",
        link: "#",
        pubDate: new Date().toISOString(),
        thumbnail: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?w=800&q=80",
        author: "Me",
        categories: ["Data Engineering", "AWS"]
      }
    ];
  }

  async getExperience(): Promise<Experience[]> {
    return [
      {
        id: "1",
        company: "Tech Corp Inc.",
        role: "Data Scientist / AI Engineer",
        period: "2023 - Present",
        description: "Leading the development of RAG pipelines and LLM evaluation tools.",
        achievements: [
          "Optimized RAG retrieval latency by 40%",
          "Deployed internal AI assistant to 500+ users",
          "Architected scalable vector search infrastructure"
        ],
        techStack: ["Python", "LangChain", "AWS", "PostgreSQL"]
      },
      {
        id: "2",
        company: "StartUp AI",
        role: "Machine Learning Engineer",
        period: "2021 - 2023",
        description: "Built and deployed forecasting models for demand planning.",
        achievements: [
          "Improved forecast accuracy by 15%",
          "Automated data pipelines using Airflow",
          "Mentored junior data scientists"
        ],
        techStack: ["Python", "Scikit-Learn", "Docker", "GCP"]
      },
      {
        id: "3",
        company: "Freelance",
        role: "Technical Writer",
        period: "2020 - Present",
        description: "Authoring technical articles and documentation for tech startups.",
        achievements: [
          "Published 20+ articles on Medium and client blogs",
          "Specialized in explaining complex AI concepts to engineers"
        ],
        techStack: ["Markdown", "Technical Writing", "SEO"]
      }
    ];
  }
}

export const storage = new DatabaseStorage();
