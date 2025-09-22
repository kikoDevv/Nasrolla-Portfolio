import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import TapeSection from "@/sections/TapeSection";

export default function Home() {
  return (
    <div className="mb-500">
      <Header />
      <Hero />
      <ProjectsSection />
      <TapeSection />
    </div>
  );
}
