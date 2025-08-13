import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
      color: "tech-blue"
    },
    {
      title: "Infrastructure as Code",
      icon: "🏗️",
      skills: ["Terraform", "Ansible", "Cloud CLI"],
      color: "tech-teal"
    },
    {
      title: "CI/CD & DevOps",
      icon: "🔄",
      skills: ["Azure Pipelines", "Jenkins", "GitHub Actions", "AWS CodeBuild"],
      color: "primary"
    },
    {
      title: "Containerization",
      icon: "📦",
      skills: ["Docker", "Docker Hub", "AWS ECR", "Azure ACR", "Kubernetes", "Azure ACS", "AWS ECS"],
      color: "accent"
    },
    {
      title: "Version Control",
      icon: "🔀",
      skills: ["Git", "Azure Repo", "GitHub", "AWS CodeCommit", "Bitbucket"],
      color: "tech-purple"
    },
    {
      title: "Monitoring & Analytics",
      icon: "📊",
      skills: ["SonarQube", "Apache Kafka", "Apache Spark", "Apache NiFi", "Apache Superset"],
      color: "tech-teal"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Neo4j", "Cassandra", "ClickHouse"],
      color: "primary"
    },
    {
      title: "Scripting & Languages",
      icon: "💻",
      skills: ["Bash", "Python", "PowerShell", "YAML", "Java", ".NET", "Node.js", "React.js"],
      color: "accent"
    },
    {
      title: "Web Servers & Security",
      icon: "🔒",
      skills: ["Nginx", "Apache", "WAF", "IAM", "MFA", "VPC", "Security Groups"],
      color: "tech-blue"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'tech-blue': return 'border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white shadow-neon';
      case 'tech-teal': return 'border-tech-teal text-tech-teal hover:bg-tech-teal hover:text-white shadow-soft';
      case 'tech-purple': return 'border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white shadow-elevated';
      case 'primary': return 'border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft';
      case 'accent': return 'border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-elevated';
      default: return 'border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-cloud-gradient bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning multi-cloud platforms, automation tools, 
            and modern DevOps practices for scalable infrastructure solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-card-gradient border-0 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`transition-all duration-300 ${getColorClass(category.color)}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;