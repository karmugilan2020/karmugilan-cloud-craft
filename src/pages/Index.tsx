import Hero from "@/components/Hero";
import TechnicalSkills from "@/components/TechnicalSkills";
import Experience from "@/components/Experience";
import Responsibilities from "@/components/Responsibilities";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechnicalSkills />
      <Experience />
      <Responsibilities />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
