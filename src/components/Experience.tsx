import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Lead DevOps Engineer",
      company: "YOZY Technologies LLP",
      location: "Trichy, Tamil Nadu",
      period: "December 2023 - Present",
      type: "Current Role",
      description: "Leading DevOps initiatives and infrastructure automation across multi-cloud environments.",
      highlights: [
        "Managing scalable cloud infrastructure using IaC tools",
        "Implementing comprehensive CI/CD pipelines",
        "Leading cross-functional deployment teams",
        "Optimizing system reliability and performance"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "YOZY Technologies LLP",
      location: "Trichy, Tamil Nadu",
      period: "April 2022 - December 2023",
      type: "Promotion",
      description: "Advanced to senior role focusing on automation and deployment workflows.",
      highlights: [
        "Designed containerized application deployment strategies",
        "Implemented monitoring and alerting solutions",
        "Managed VPC, Security Groups, and network security",
        "Automated deployment and backup procedures"
      ]
    },
    {
      title: "Software Engineer",
      company: "YOZY Technologies LLP",
      location: "Trichy, Tamil Nadu",
      period: "December 2021 - March 2022",
      type: "Full-time",
      description: "Focused on application development and initial DevOps practices.",
      highlights: [
        "Developed CI/CD pipelines for applications",
        "Worked with containerization technologies",
        "Implemented version control best practices",
        "Collaborated on multi-technology stacks"
      ]
    },
    {
      title: "Systems Engineer (DevOps)",
      company: "Chellammal Metric Higher Sec School",
      location: "Trichy, Tamil Nadu",
      period: "September 2019 - November 2021",
      type: "DevOps Focus",
      description: "Specialized in systems engineering with DevOps methodologies.",
      highlights: [
        "Managed school IT infrastructure",
        "Implemented automated backup systems",
        "Configured network security protocols",
        "Provided technical support and maintenance"
      ]
    },
    {
      title: "System Engineer",
      company: "Advance Technologies Systems",
      location: "Trichy, Tamil Nadu",
      period: "May 2017 - August 2019",
      type: "Entry Level",
      description: "Started career in systems engineering and infrastructure management.",
      highlights: [
        "Learned foundational system administration",
        "Gained experience in Linux and Windows environments",
        "Developed scripting and automation skills",
        "Built expertise in networking fundamentals"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Current Role': return 'bg-primary text-primary-foreground';
      case 'Promotion': return 'bg-accent text-accent-foreground';
      case 'DevOps Focus': return 'bg-tech-teal text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-cloud-gradient bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 7 years of progressive growth in DevOps and cloud engineering, 
            with a track record of implementing scalable solutions and leading technical teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft hidden md:block"></div>
                  
                  <Card className="md:ml-16 bg-card-gradient border-0 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-bold text-foreground mb-2">
                            {exp.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building2 className="w-4 h-4" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getTypeColor(exp.type)}>
                          {exp.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="leading-relaxed">{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;