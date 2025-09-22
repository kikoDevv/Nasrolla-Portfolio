import Header from "@/components/Header";
import AboutSection from "@/sections/AboutSection";
import Hero from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import TapeSection from "@/sections/TapeSection";

export default function Home() {
  return (
    <div className="mb-100">
      <Header />
      <Hero />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
    </div>
  );
}
