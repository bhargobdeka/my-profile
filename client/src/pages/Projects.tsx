import { useState, useRef } from "react";
import { useProjects } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Loader2, Search, Rocket, Code, TrendingUp, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function Projects() {
  const { data: projects, isLoading, isError } = useProjects();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const productionRef = useRef(null);
  const productionInView = useInView(productionRef, { once: true, margin: "-100px" });

  const languages = ["All", ...Array.from(new Set(projects?.map(p => p.language).filter(Boolean) || []))];

  const filteredProjects = projects?.filter(project => {
    const matchesFilter = filter === "All" || project.language === filter;
    const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) || 
                          (project.description?.toLowerCase() || "").includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const productionProjects = [
    {
      icon: Code,
      title: "Ask Jane",
      description: "Led design and development of the company's first AI Agent, transforming a Gradio prototype into a production-ready system. Built a full-stack text-to-SQL agentic application for retail business insights with FastAPI backend and React + TypeScript frontend, deployed via Azure DevOps.",
      technologies: ["FastAPI", "React", "TypeScript", "Azure DevOps", "LangGraph", "LangChain"],
      impact: "Company's first AI Agent deployed to production"
    },
    {
      icon: TrendingUp,
      title: "Demand Forecasting",
      description: "Built an end-to-end demand forecasting system using LightGBM models, Kedro pipelines, and AWS Batch infrastructure. Integrated MLflow for experiment tracking and model versioning. Delivers both short-term and long-term forecasts for two retail clients in production.",
      technologies: ["LightGBM", "Kedro", "AWS Batch", "MLflow", "Python", "MLOps"],
      impact: "Production system serving two retail clients"
    },
    {
      icon: Zap,
      title: "Anomaly Detection",
      description: "Developed probabilistic LSTM models for forecasting using data from 400+ dams across Quebec. Combined forecasting with real-time anomaly detection using switching Kalman filters. Built on PyTorch + MLflow framework deployed on AWS, with heteroscedastic uncertainty modeling.",
      technologies: ["PyTorch", "LSTM", "Kalman Filters", "MLflow", "AWS", "Python"],
      impact: "50% reduction in false alarms, 10% accuracy improvement"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen space-y-24">
      {/* Production Projects Section */}
      <motion.section
        ref={productionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={productionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-3">
            <Rocket className="text-primary" />
            Production Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-world applications I've built and deployed to production. These are production-grade systems serving actual clients and users.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {productionProjects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={productionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {item.description}
              </p>
              
              {item.impact && (
                <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-xs font-semibold text-primary mb-1">Impact</p>
                  <p className="text-xs text-muted-foreground">{item.impact}</p>
                </div>
              )}
              
              <div className="mt-auto">
                <p className="text-xs font-semibold text-foreground mb-2">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Open-Source Projects Section */}
      <section>
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Open-Source Projects</h2>
          <p className="text-xl text-muted-foreground">
            A collection of projects I've built, contributed to, or currently maintaining.
            Most of my work is open-source and available on GitHub.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between sticky top-20 z-30 bg-background/95 backdrop-blur py-4 border-b border-border/50">
        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang as string)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === lang
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin w-10 h-10 text-primary" />
          </div>
        ) : isError ? (
          <div className="text-center py-20 text-destructive">
            Failed to load projects. Please try again later.
          </div>
        ) : (
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects?.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
            
            {filteredProjects?.length === 0 && (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                No projects found matching your criteria.
              </div>
            )}
          </motion.div>
        )}
      </section>
    </div>
  );
}
