import { Github, Linkedin, PenTool, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="font-bold text-lg font-mono text-primary">Bhargob Deka</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Senior AI/ML Developer & Technical Writer. 
              Building intelligent systems and sharing practical AI knowledge.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com/bhargobdeka" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/bhargobdeka" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://medium.com/@bhargobdeka11" icon={<PenTool size={20} />} label="Medium" />
            <SocialLink href="mailto:bhargobdeka11@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bhargob Deka. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
