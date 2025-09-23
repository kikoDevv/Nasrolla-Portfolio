"use client";
import React, { useRef } from "react";
import Header from "@/components/Header";
import AboutSection from "@/sections/AboutSection";
import Hero from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import TapeSection from "@/sections/TapeSection";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="mb-100">
      <Header />
      <Hero />
      <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <hr className="border-2 border-red-500" />
      <div className="mt-100 mb-100 flex items-center justify-center">
        <div className="embla border mx-auto w-full h-64 md:h-96" ref={emblaRef}>
          <div className="embla__container flex">
            <div className="embla__slide flex items-center justify-center">Slide 1</div>
            <div className="embla__slide flex items-center justify-center">Slide 2</div>
            <div className="embla__slide flex items-center justify-center">Slide 3</div>
            <div className="embla__slide flex items-center justify-center">Slide 4</div>
            <div className="embla__slide flex items-center justify-center">Slide 5</div>
            <div className="embla__slide flex items-center justify-center">Slide 6</div>
            <div className="embla__slide flex items-center justify-center">Slide 7</div>
          </div>
        </div>
      </div>
    </div>
  );
}
