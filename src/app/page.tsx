"use client";
import Header from "@/components/Header";
import AboutSection from "@/sections/AboutSection";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import TapeSection from "@/sections/TapeSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
