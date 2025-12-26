import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, PenTool, Terminal, Download } from "lucide-react";
import { useProjects, useArticles } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { ArticleCard } from "@/components/ArticleCard";
import profilePhoto from "@assets/IMG_20180302_125311_810_1766766361029.jpg";

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: articles, isLoading: articlesLoading } = useArticles();

  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        
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
              Open to AI/ML roles & technical writing opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Bhargob <br/>
              <span className="text-gradient">Deka</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed">
              I build AI agents, forecasting systems, and anomaly detection pipelines that ship to production.
            </p>
            
            <div className="text-sm font-medium text-primary/80 mb-8 font-mono tracking-wide">
              Senior AI/ML Developer · Machine Learning Researcher · Technical Writer
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <a className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                  <Code size={20} />
                  View Work
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-6 py-3 rounded-lg bg-card border border-input hover:bg-accent hover:text-accent-foreground transition-all font-medium flex items-center gap-2">
                  Contact Me
                </a>
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-6 py-3 rounded-lg bg-card border border-input hover:bg-accent hover:text-accent-foreground transition-all font-medium flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:flex flex-col gap-6"
          >
            {/* Profile Photo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-background rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-border">
                <img 
                  src={profilePhoto} 
                  alt="Bhargob Deka" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="relative z-10 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-all duration-500">
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

      {/* Featured Projects */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="text-primary" />
              Featured Projects
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
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-4 bg-secondary/30 py-20 rounded-3xl">
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
      </section>
    </div>
  );
}
