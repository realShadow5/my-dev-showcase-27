import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to bring your ideas to life
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-smooth">
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-smooth">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-card">
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="bg-background" />
              </div>
              
              <div>
                <Input type="email" placeholder="Your Email" className="bg-background" />
              </div>
              
              <div>
                <Input placeholder="Subject" className="bg-background" />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-background min-h-[150px]"
                />
              </div>
              
              <Button className="w-full gradient-primary shadow-glow transition-smooth hover:scale-105">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
