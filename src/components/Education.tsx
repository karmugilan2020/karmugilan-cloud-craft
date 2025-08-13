import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, School, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-cloud-gradient bg-clip-text text-transparent">
            Education & Personal Profile
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strong educational foundation in computer applications with excellent academic performance.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <Card className="bg-card-gradient border-0 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fadeInUp">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Educational Qualification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-6 bg-muted/50 rounded-xl">
                <Badge className="bg-primary text-primary-foreground mb-4">
                  Bachelor's Degree
                </Badge>
                <h3 className="text-xl font-semibold mb-2">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <School className="w-4 h-4" />
                    <span>Jamal Mohamed College, Trichy</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Bharathidasan University</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2017</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Badge variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    70% - First Class
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Profile Card */}
          <Card className="bg-card-gradient border-0 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Personal Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">Full Name:</span>
                  <span className="text-muted-foreground">Karmugilan K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">Father's Name:</span>
                  <span className="text-muted-foreground">Kanagaraj A</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">Date of Birth:</span>
                  <span className="text-muted-foreground">20/10/1996</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">Age:</span>
                  <span className="text-muted-foreground">28 years</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">Marital Status:</span>
                  <span className="text-muted-foreground">Married</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">Nationality:</span>
                  <span className="text-muted-foreground">Indian</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium text-foreground">Languages:</span>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-primary text-primary">Tamil</Badge>
                    <Badge variant="outline" className="border-primary text-primary">English</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Declaration */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-0 shadow-soft animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Professional Declaration</h3>
              <p className="text-muted-foreground italic leading-relaxed">
                "I hereby declare that the information presented in this portfolio accurately reflects 
                my qualifications, experience, and technical expertise. All details have been verified 
                and represent my professional journey in DevOps and cloud engineering."
              </p>
              <div className="mt-6 text-right">
                <div className="inline-block">
                  <div className="font-semibold text-foreground">Karmugilan K</div>
                  <div className="text-sm text-muted-foreground">Lead DevOps Engineer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;