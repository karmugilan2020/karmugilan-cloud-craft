import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-cloud-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your DevOps and cloud infrastructure needs? 
            Let's explore how we can work together to build scalable solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-0 shadow-elevated animate-fadeInUp">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Get In Touch
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      I'm always open to discussing new opportunities, 
                      challenging projects, and innovative DevOps solutions. 
                      Feel free to reach out through any of the channels below.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Email</div>
                        <div className="text-muted-foreground">k.karmugilan@gmail.com</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Phone</div>
                        <div className="text-muted-foreground">+91-8608240400</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-tech-teal/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-tech-teal" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Location</div>
                        <div className="text-muted-foreground">Trichy, Tamil Nadu, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Section */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Professional Links
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Download my resume or connect with me on professional platforms 
                      to learn more about my experience and projects.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-soft"
                    >
                      <Download className="w-5 h-5 mr-3" />
                      Download Resume
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>

                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      Connect on LinkedIn
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>

                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Github className="w-5 h-5 mr-3" />
                      View GitHub Profile
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div className="mt-8 p-6 bg-cloud-gradient rounded-lg text-center">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Ready to Collaborate?
                    </h4>
                    <p className="text-white/90 text-sm">
                      Let's build something amazing together with cutting-edge DevOps practices!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;