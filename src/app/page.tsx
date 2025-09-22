import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <div className="mb-100">
      <Header />
      <Hero />
      <ProjectsSection />
    </div>
  );
}
