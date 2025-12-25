import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import type { ExperienceResponse } from "@shared/routes";

type Experience = ExperienceResponse[0];

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12 py-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_0_4px_rgba(var(--primary),0.2)]" />
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
            <div>
              <h3 className="text-xl font-bold">{item.role}</h3>
              <div className="flex items-center gap-2 text-primary font-medium text-lg">
                <Briefcase size={18} />
                <span>{item.company}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full self-start">
              <Calendar size={14} />
              {item.period}
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
            {item.description}
          </p>
          
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-semibold mb-2 text-foreground/80">Key Achievements:</h4>
              <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-muted-foreground">
                {item.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {item.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 bg-primary/5 border border-primary/20 text-primary text-xs rounded font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
