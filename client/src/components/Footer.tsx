import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="font-bold text-lg font-mono">DevPortfolio</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building digital experiences with code and creativity.
              Focused on performance, accessibility, and modern aesthetics.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
            <SocialLink href="mailto:hello@example.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind.
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
