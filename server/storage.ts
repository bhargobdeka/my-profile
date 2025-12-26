import { db } from "./db";
import { 
  messages, 
  type Message, 
  type InsertMessage, 
  type Project, 
  type Article, 
  type Experience,
  type Publication,
  type SkillCategory
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
  
  // Projects
  getProjects(): Promise<Project[]>;
  
  // Articles
  getArticles(): Promise<Article[]>;
  
  // Experience
  getExperience(): Promise<Experience[]>;
  
  // Additional Content
  getPublications(): Promise<Publication[]>;
  getSkills(): Promise<SkillCategory[]>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }

  async getProjects(): Promise<Project[]> {
    const githubToken = process.env.GITHUB_TOKEN;
    const githubUsername = process.env.GITHUB_USERNAME || "bhargobdeka";

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
      } catch (error) {
        console.error("Failed to fetch GitHub projects:", error);
      }
    }

    // Featured Fallback Data based on user request
    return [
      {
        id: "featured-1",
        name: "RAG Code Assistant for Speckle",
        description: "Advanced RAG code assistant for querying Speckle’s developer documentation using LangGraph workflow.",
        html_url: "https://github.com/bhargobdeka",
        homepage: null,
        language: "Python",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["rag", "langgraph", "ai-agent"],
        updated_at: new Date().toISOString()
      },
      {
        id: "featured-2",
        name: "Multi-Modal RAG",
        description: "Visual Question Answering using LangChain + GPT‑4 + Streamlit.",
        html_url: "https://github.com/bhargobdeka",
        homepage: null,
        language: "Python",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["multimodal", "gpt-4", "streamlit"],
        updated_at: new Date().toISOString()
      },
      {
        id: "featured-3",
        name: "Hotel Recommender",
        description: "Multi-Agent Framework system using CrewAI and LangChain.",
        html_url: "https://github.com/bhargobdeka",
        homepage: null,
        language: "Python",
        stargazers_count: 0,
        forks_count: 0,
        topics: ["crewai", "multi-agent", "langchain"],
        updated_at: new Date().toISOString()
      }
    ];
  }

  async getArticles(): Promise<Article[]> {
    const mediumUsername = process.env.MEDIUM_USERNAME || "bhargobdeka11";
    
    const mediumArticles: Article[] = [];
    try {
      const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUsername}`);
      if (response.ok) {
        const data = await response.json();
        if (data.status === 'ok') {
          mediumArticles.push(...data.items.map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            thumbnail: item.thumbnail,
            author: item.author,
            categories: item.categories
          })));
        }
      }
    } catch (error) {
      console.error("Failed to fetch Medium articles:", error);
    }

    const clientArticles: Article[] = [
      {
        title: "How to build a RAG pipeline from scratch in 2026",
        link: "https://kapa.ai/blog",
        pubDate: "2026-01-01",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        author: "Bhargob Deka",
        categories: ["RAG", "AI Engineering"],
        client: "Kapa.ai"
      },
      {
        title: "Evaluating Python Libraries for Converting PDF to Text — A 2026 Comparison and Evaluation Guide",
        link: "https://unstract.com/blog",
        pubDate: "2025-12-18",
        thumbnail: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?w=800&q=80",
        author: "Bhargob Deka",
        categories: ["Python", "Data Processing"],
        client: "Unstract"
      }
    ];

    return [...clientArticles, ...mediumArticles];
  }

  async getExperience(): Promise<Experience[]> {
    return [
      {
        id: "exp-1",
        company: "Jesta I.S.",
        role: "Senior AI-ML Developer",
        period: "Oct 2024 – Present",
        location: "Montreal, QC",
        description: "Leading AI Agent and demand forecasting projects.",
        achievements: [
          "Led design and development of the company’s first AI Agent from prototype to production.",
          "Built an end‑to‑end demand forecasting system using LightGBM, Kedro, and AWS Batch.",
          "Developed AutoEncoder and Random Forest models for fraud detection POC."
        ],
        techStack: ["FastAPI", "React", "TypeScript", "LightGBM", "AWS", "Azure DevOps"]
      },
      {
        id: "exp-2",
        company: "Hydro-Quebec",
        role: "ML Researcher",
        period: "Jan 2023 – May 2024",
        location: "Montreal, QC",
        description: "Machine Learning research and development for structural health monitoring.",
        achievements: [
          "Developed probabilistic LSTM models for forecasting from 400+ dams.",
          "Reduced false alarms by ~50% using real-time anomaly detection with Kalman filters.",
          "Built PyTorch + MLflow framework on AWS, improving accuracy by ~10%."
        ],
        techStack: ["PyTorch", "MLflow", "AWS", "Kalman Filters", "LSTM"]
      },
      {
        id: "exp-3",
        company: "Polytechnique Montreal",
        role: "Graduate Research Assistant",
        period: "Sep 2018 – Dec 2022",
        location: "Montreal, QC",
        achievements: [
          "Developed multiplicative state-space models for structural health monitoring.",
          "Introduced AGVI for real-time uncertainty quantification in Bayesian ML models."
        ],
        techStack: ["Bayesian ML", "State-Space Models", "Research"]
      }
    ];
  }

  async getPublications(): Promise<Publication[]> {
    return [
      {
        title: "Analytically Tractable Heteroscedastic Uncertainty Quantification in Bayesian Neural Networks for Regression Tasks",
        publisher: "Neurocomputing",
        year: "2023",
        authors: "Deka, B., Ha Nguyen, L., Goulet, J. A."
      },
      {
        title: "Approximate Gaussian Variance Inference for State‐Space Models",
        publisher: "International Journal of Adaptive Control and Signal Processing",
        year: "2023",
        authors: "Deka, B. and Goulet, J. A."
      }
    ];
  }

  async getSkills(): Promise<SkillCategory[]> {
    return [
      {
        category: "Languages",
        skills: ["Python", "SQL", "JavaScript", "MATLAB", "C++"]
      },
      {
        category: "Frameworks",
        skills: ["TensorFlow", "PyTorch", "Kedro", "MLflow", "FastAPI", "Scikit‑learn", "React"]
      },
      {
        category: "Generative AI",
        skills: ["LangChain", "LangGraph", "LangSmith", "CrewAI", "Hugging Face", "OpenAI", "Ollama"]
      },
      {
        category: "Cloud & DevOps",
        skills: ["AWS (Batch, S3, Lambda, SageMaker)", "Azure Pipelines", "Docker", "Terraform", "GitHub Actions"]
      }
    ];
  }
}

export const storage = new DatabaseStorage();
