import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-32 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Have a project in mind or want to discuss a potential collaboration?
            I'm currently available for freelance work, consulting and technical writing for AI/ML projects.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Me</h3>
                <p className="text-muted-foreground">bhargobdeka11@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-muted-foreground">Montreal, Canada (Remote available)</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="font-bold text-lg mb-4">Connect on Social</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/bhargobdeka/" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://medium.com/@bhargobdeka11" target="_blank" rel="noopener noreferrer" className="p-3 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all">
                <PenTool size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
