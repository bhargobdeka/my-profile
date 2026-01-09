import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Code, PenTool, Terminal, Download, Brain, Database, Cloud, CheckCircle2, Rocket, Zap, TrendingUp } from "lucide-react";
import { useProjects, useArticles } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { ArticleCard } from "@/components/ArticleCard";
import profilePhoto from "@assets/IMG_20180302_125311_810_1766766361029.jpg";

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: articles, isLoading: articlesLoading } = useArticles();
  const skillsRef = useRef(null);
  const trustRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const trustInView = useInView(trustRef, { once: true, margin: "-100px" });

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] -z-10" />
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to AI/ML engineering, technical leadership, and content collaboration
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Bhargob <br/>
              <span className="text-gradient">Deka</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-lg leading-relaxed">
              I build production-grade AI agents, RAG systems, and ML pipelines. Technical writer working with startups.
            </p>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Python', 'TypeScript', 'React', 'C++', 'Git', 'PostgreSQL', 'AWS', 'Azure', 'CI/CD', 'Docker', 'Terraform', 'LangGraph'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 items-center flex-col sm:flex-row">
              <Link href="/projects">
                <a className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                  <Code size={20} />
                  View Work
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-6 py-3 rounded-lg bg-transparent border-2 border-input hover:border-primary hover:bg-accent/50 transition-all font-medium flex items-center gap-2">
                  Contact Me
                </a>
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 underline-offset-4 hover:underline"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
            
            {/* Secondary CTA */}
            <div className="mt-6">
              <Link href="/articles">
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                  See my recent articles on Medium <ArrowRight size={14} />
                </a>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col gap-6 md:gap-8 items-center"
          >
            {/* Profile Photo */}
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-background rounded-2xl overflow-hidden aspect-[4/5] max-h-[400px] md:max-h-[480px] shadow-2xl border border-border group-hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src={profilePhoto} 
                  alt="Bhargob Deka - Senior AI/ML Developer specializing in RAG systems, LLM evaluation, and production ML pipelines" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="relative z-10 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-all duration-500 w-full max-w-md -mt-4">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-pink-500">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-300">{`{`}</span>
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">name:</span>
                  <span className="text-green-400">'Bhargob Deka'</span>,
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">role:</span>
                  <span className="text-green-400">'Senior AI/ML Developer'</span>,
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">specialties:</span>
                  <span className="text-yellow-300">['AI Agents', 'Forecasting', 'Anomaly Detection', 'RAG']</span>
                </div>
                <div className="text-yellow-300">{`}`}</div>
              </div>
            </div>
            
            {/* Decorative blurs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Real Projects Section */}
      <motion.section
        ref={trustRef}
        initial={{ opacity: 0, y: 50 }}
        animate={trustInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <Rocket className="text-primary" />
            Production Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real-world applications I've built and deployed to production
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
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
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={trustInView ? { opacity: 1, y: 0 } : {}}
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

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <Brain className="text-primary" />
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I use to build production-grade AI systems
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              category: "AI/ML",
              icon: Brain,
              skills: ["Python", "LLMs", "RAG", "Regression", "Time Series Analysis", "LLM Evaluation", "Text-to-SQL Agents", "Vector DBs"]
            },
            {
              category: "Backend & Infrastructure",
              icon: Database,
              skills: ["PostgreSQL", "SQL", "AWS", "Azure", "Docker", "Terraform", "CI/CD", "API Development"]
            },
            {
              category: "Frameworks & Tools",
              icon: Zap,
              skills: ["Langchain", "LangGraph", "React", "TypeScript", "C++", "Git", "Gradio", "Streamlit", "Ollama", "MCP", "Reranking", "Evaluation Frameworks"]
            }
          ].map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Open-Source Projects */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="text-primary" />
              Open-Source Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of my recent open source work and experiments.
            </p>
          </div>
          <Link href="/projects">
            <a className="hidden md:flex items-center gap-1 text-primary hover:underline font-medium">
              View All <ArrowRight size={16} />
            </a>
          </Link>
        </div>

        {projectsLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 rounded-xl bg-muted/50 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.slice(0, 3).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
        
        <div className="mt-8 md:hidden text-center">
          <Link href="/projects">
            <a className="inline-flex items-center gap-1 text-primary font-medium">
              View All Projects <ArrowRight size={16} />
            </a>
          </Link>
        </div>
      </motion.section>

      {/* Latest Articles */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 bg-secondary/30 py-20 rounded-3xl"
      >
        <div className="flex flex-col items-center text-center mb-12">
          <div className="p-3 bg-background rounded-2xl shadow-sm mb-4">
            <PenTool className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Latest Writing</h2>
          <p className="text-muted-foreground max-w-xl">
            Thoughts on software engineering, architecture, and developer productivity.
          </p>
        </div>

        {articlesLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-40 rounded-xl bg-muted/50 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles?.slice(0, 4).map((article, idx) => (
              <ArticleCard key={idx} article={article} index={idx} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/articles">
            <a className="px-8 py-3 rounded-full bg-background border border-border hover:border-primary transition-all font-medium inline-block shadow-sm">
              Read More Articles
            </a>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
