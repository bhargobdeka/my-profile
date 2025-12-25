import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import type { ProjectResponse } from "@shared/routes";

type Project = ProjectResponse[0];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group h-full flex flex-col bg-card rounded-xl border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative gradient header instead of image if no image available */}
      <div className="h-2 bg-gradient-to-r from-primary to-blue-500 group-hover:h-3 transition-all duration-300" />
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-mono group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <div className="flex gap-3 text-muted-foreground">
            {project.html_url && (
              <a 
                href={project.html_url} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="View Source"
              >
                <Github size={18} />
              </a>
            )}
            {project.homepage && (
              <a 
                href={project.homepage} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="View Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed flex-1">
          {project.description || "No description available for this project."}
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.language && (
              <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold">
                {project.language}
              </span>
            )}
            {project.topics.slice(0, 3).map((topic) => (
              <span 
                key={topic} 
                className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-500" />
              <span>{project.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={14} />
              <span>{project.forks_count}</span>
            </div>
            <div className="ml-auto">
              Updated {new Date(project.updated_at).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
