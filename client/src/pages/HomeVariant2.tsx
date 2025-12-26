import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, PenTool, Terminal, Download, Sparkles, Zap, Brain } from "lucide-react";
import { useProjects, useArticles } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { ArticleCard } from "@/components/ArticleCard";
import profilePhoto from "@assets/IMG_20180302_125311_810_1766766361029.jpg";

export default function HomeVariant2() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: articles, isLoading: articlesLoading } = useArticles();

  return (
    <div className="space-y-32 pb-20 overflow-hidden">
      {/* Hero Variant: Modern Professional with Large Image */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 -z-10 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Sparkles size={16} />
              <span>Available for AI Consulting</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              Bhargob <span className="text-primary block">Deka</span>
            </h1>
            
            <div className="space-y-6 text-xl text-muted-foreground mb-10 max-w-xl">
              <p className="leading-relaxed">
                Senior AI/ML Developer & Researcher. 
                I build <span className="text-foreground font-semibold">intelligent systems</span> that forecast the future and automate the present.
              </p>
              <div className="flex flex-wrap gap-3">
                {['AI Agents', 'Forecasting', 'RAG', 'Technical Writing'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <a className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-primary/20">
                  Explore Work
                  <Zap size={20} />
                </a>
              </Link>
              <Link href="/contact">
                <a className="px-8 py-4 rounded-xl bg-card border border-border hover:bg-accent transition-all font-semibold">
                  Get in Touch
                </a>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex flex-col gap-6"
          >
            {/* Profile Photo - Adjusted size to be consistent */}
            <div className="relative group max-w-sm mx-auto w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-background rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-border">
                <img 
                  src={profilePhoto} 
                  alt="Bhargob Deka" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="relative z-10 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-all duration-500 max-w-sm mx-auto w-full">
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
                  <span className="text-blue-300">skills:</span>
                  <span className="text-yellow-300">['AI', 'ML', 'React']</span>,
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">highlyMotivated:</span>
                  <span className="text-pink-500">true</span>,
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">freelancingAI:</span>
                  <span className="text-pink-500">true</span>
                </div>
                <div className="text-yellow-300">{`}`}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keep existing sections below */}
      {/* Featured Projects */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="text-primary" />
              Featured Projects
            </h2>
          </div>
          <Link href="/projects">
            <a className="hidden md:flex items-center gap-1 text-primary hover:underline font-medium">
              View All <ArrowRight size={16} />
            </a>
          </Link>
        </div>
        {projectsLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => <div key={i} className="h-64 rounded-xl bg-muted/50 animate-pulse" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.slice(0, 3).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        )}
      </section>

      {/* Latest Writing */}
      <section className="container mx-auto px-4 bg-secondary/30 py-20 rounded-3xl">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="p-3 bg-background rounded-2xl shadow-sm mb-4">
            <PenTool className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Latest Writing</h2>
        </div>
        {articlesLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-40 rounded-xl bg-muted/50 animate-pulse" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles?.slice(0, 4).map((article, idx) => (
              <ArticleCard key={idx} article={article} index={idx} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
