import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-full blur-lg opacity-50 animate-glow" />
            <img 
              src={profileImg} 
              alt="Profile" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/50 shadow-glow object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Hi, I'm <span className="gradient-text">Your Name</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          Full Stack Developer specializing in building exceptional digital experiences
        </p>
        
        <div className="flex gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
          <Button size="lg" className="gradient-primary shadow-glow transition-smooth hover:scale-105">
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="transition-smooth hover:scale-105 hover:border-primary">
            Contact Me
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-smooth">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
