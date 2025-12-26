import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import type { ArticleResponse } from "@shared/routes";

type Article = ArticleResponse[0];

export function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group block bg-card rounded-xl border border-border p-5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground mb-3 font-mono">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{new Date(article.pubDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          {article.client && (
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
              {article.client}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
          {article.title}
        </h3>
        
        {article.categories && article.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {article.categories.slice(0, 3).map(cat => (
              <span key={cat} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                #{cat}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Read Article <ArrowRight size={16} className="ml-1" />
        </div>
      </div>
    </motion.a>
  );
}
