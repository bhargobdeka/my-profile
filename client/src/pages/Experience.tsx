import { useExperience } from "@/hooks/use-portfolio";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Loader2, Download } from "lucide-react";

export default function Experience() {
  const { data: experience, isLoading } = useExperience();

  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience</h1>
          <p className="text-xl text-muted-foreground">
            My professional journey in software engineering. I've worked with startups 
            and established companies to build scalable products.
          </p>
        </div>
        
        <a 
          href="/resume.pdf" 
          target="_blank"
          className="px-6 py-3 rounded-lg bg-card border border-input hover:bg-accent hover:text-accent-foreground transition-all font-medium flex items-center gap-2 whitespace-nowrap"
        >
          <Download size={20} />
          Download Resume
        </a>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin w-10 h-10 text-primary" />
        </div>
      ) : (
        <ExperienceTimeline items={experience || []} />
      )}
    </div>
  );
}
