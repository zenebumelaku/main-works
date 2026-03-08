import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <>
    <Starfield />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ExperienceSection />
    <ContactSection />
    <footer className="relative z-10 py-8 text-center text-muted-foreground text-sm border-t border-border">
      <div className="container mx-auto px-6">
        © 2024 Alex. Built with passion and code.
      </div>
    </footer>
  </>
);

export default Index;
