import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-tech-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Section */}
          <div className="flex-1 text-center lg:text-left animate-fadeInUp">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                DevOps & Cloud Engineer
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-cloud-gradient bg-clip-text text-transparent">
                KARMUGILAN K
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
                Lead DevOps Engineer (Multi Cloud)
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Experienced DevOps Engineer with proven expertise in automating and streamlining 
                infrastructure and deployment workflows. Specialized in CI/CD, cloud technologies, 
                and infrastructure as code across AWS, Azure, and GCP.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 shadow-soft">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">k.karmugilan@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-lg px-4 py-2 shadow-soft">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+91-8608240400</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-elevated">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-profile-glow rounded-3xl blur-lg animate-pulse-glow"></div>
              <div className="relative bg-card-gradient p-1 rounded-3xl shadow-neon">
                <div className="p-2 bg-profile-glow rounded-3xl">
                  <img
                    src="/lovable-uploads/20ce3c82-7c5b-4e56-ba31-049aef91bd06.png"
                    alt="Karmugilan K - Lead DevOps Engineer"
                    className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;