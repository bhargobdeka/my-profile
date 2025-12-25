import { useState } from "react";
import { useProjects } from "@/hooks/use-portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Loader2, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const { data: projects, isLoading, isError } = useProjects();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const languages = ["All", ...Array.from(new Set(projects?.map(p => p.language).filter(Boolean) || []))];

  const filteredProjects = projects?.filter(project => {
    const matchesFilter = filter === "All" || project.language === filter;
    const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) || 
                          (project.description?.toLowerCase() || "").includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Open Source</h1>
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
    </div>
  );
}
