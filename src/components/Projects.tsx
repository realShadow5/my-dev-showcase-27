import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import tasksImg from "@/assets/project-tasks.jpg";
import aiImg from "@/assets/project-ai.jpg";
import socialImg from "@/assets/project-social.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack online store with payment integration, inventory management, and admin dashboard",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    image: ecommerceImg
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task tracker with team features and analytics",
    tech: ["Next.js", "PostgreSQL", "Prisma", "WebSocket"],
    github: "https://github.com",
    live: "https://example.com",
    image: tasksImg
  },
  {
    title: "AI Content Generator",
    description: "AI-powered tool for generating marketing content using OpenAI API",
    tech: ["React", "Python", "FastAPI", "OpenAI"],
    github: "https://github.com",
    live: "https://example.com",
    image: aiImg
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media performance across platforms",
    tech: ["Vue.js", "Express", "Redis", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    image: socialImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of my recent work and side projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="shadow-card transition-smooth hover:shadow-glow hover:scale-[1.02] hover:border-primary/50 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="transition-smooth hover:border-primary">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="gradient-primary shadow-glow transition-smooth hover:scale-105">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
