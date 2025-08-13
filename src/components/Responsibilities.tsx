import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Responsibilities = () => {
  const responsibilities = [
    {
      category: "Infrastructure & Deployment",
      items: [
        "Managing and tracking application release changes using Version Control System (VCS) tools such as Azure Repo, GitHub, AWS Code Commit and Bitbucket",
        "Partnering with cross-functional and release management teams to deploy application changes, ensuring smooth execution, and providing detailed documentation",
        "Designing, deploying, and managing scalable, secure, and highly available cloud infrastructure using Infrastructure as Code (IaC) tools such as Terraform, Cloud CLI, and Ansible"
      ]
    },
    {
      category: "CI/CD & Automation",
      items: [
        "Developing and maintaining comprehensive CI/CD pipelines to automate the build, testing, and deployment of containerized and non-containerized applications",
        "Building containerized applications and deploying them to AZURE ACS, AKS & AWS ECS (Multi container deployment), AWS Elastic Beanstalk (single container deployment)",
        "Automating various processes, including deployments, file processing (data loading into databases), process scheduling, and backup procedures using shell, Python, Powershell and YAML scripting"
      ]
    },
    {
      category: "Security & Networking",
      items: [
        "Configuring various authentication methods for pipeline deployments, including standard credentials, Role based authentication, mTLS, and JWT",
        "Implementing Cloud security best practices, IAM implementation, MFA, encryption and network security",
        "Working extensively with VPCs, Security Groups, Firewall Policies, VPNs, and Site-to-Site (S2S) connectivity to enable secure communication",
        "Managing Web Application Firewall (WAF) services and App Services in cloud environments"
      ]
    },
    {
      category: "Monitoring & Management",
      items: [
        "Implementing monitoring, logging, and alerting solutions to maintain system reliability and optimize performance",
        "Managing periodic reporting on the progress to the management and the customer",
        "Managing Domain Name System (DNS) configurations in GoDaddy, Cloudflare and AWS Route 53"
      ]
    }
  ];

  const categoryIcons = {
    "Infrastructure & Deployment": "🏗️",
    "CI/CD & Automation": "🔄",
    "Security & Networking": "🔒",
    "Monitoring & Management": "📊"
  };

  const categoryColors = {
    "Infrastructure & Deployment": "tech-blue",
    "CI/CD & Automation": "primary",
    "Security & Networking": "tech-teal",
    "Monitoring & Management": "accent"
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'tech-blue': return 'border-l-tech-blue';
      case 'tech-teal': return 'border-l-tech-teal';
      case 'primary': return 'border-l-primary';
      case 'accent': return 'border-l-accent';
      default: return 'border-l-primary';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-cloud-gradient bg-clip-text text-transparent">
            Key Responsibilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive overview of my core responsibilities and expertise areas 
            in DevOps engineering and cloud infrastructure management.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {responsibilities.map((section, index) => (
            <Card 
              key={section.category}
              className={`bg-card-gradient border-0 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fadeInUp border-l-4 ${getColorClass(categoryColors[section.category])}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{categoryIcons[section.category]}</span>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {section.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </div>
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

export default Responsibilities;