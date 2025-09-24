"use client";
import { GiJusticeStar } from "react-icons/gi";
import React from "react";
import grainImage from "@/images/grain.jpg";
import { EmblaCarousel } from "@/components/Carousel";
import { TechSlider } from "@/components/TechSlider";

export default function AboutSection() {
  return (
    <section className="py-12 mx-2">
      {/*--------- header ----------*/}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="uppercase text-2xl font-semibold bg-gradient-to-r from-emerald-300 to-sky-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <h1 className="font-serif sm:text-4xl text-2xl mt-2">A glimpse into my work</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mt-4">
          I&apos;m a frontend developer focused on building fast, accessible, and beautiful web applications. I love
          translating ideas into polished user experiences.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch">
        {/*--------- card left ----------*/}
        <article className="relative bg-gray-800 rounded-2xl p-6 shadow-lg md:col-span-1 flex flex-col items-center">
          <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
          <div className="flex items-center gap-3">
            <GiJusticeStar className="text-emerald-300 text-xl" />
            <h3 className="text-lg font-semibold">My Game</h3>
          </div>
          <p className="text-gray-300 text-center">I enjoy exploring games that push systems and strategy.</p>
          {/*--------- image slider ----------*/}
          <div className="mt-1 max-h-50">
            <EmblaCarousel />
          </div>
        </article>

        {/*--------- card right ----------*/}
        <aside className="relative bg-gray-800 rounded-2xl p-6 shadow-lg md:col-span-2 flex flex-col">
          <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
          <div className="flex items-center gap-3 select-none">
            <GiJusticeStar className="text-emerald-300 text-xl" />
            <h3 className="text-lg font-semibold">My Toolbox</h3>
          </div>
          <p className="text-gray-300 mt-3 select-none">
            Tools and technologies I use to build production-ready applications:
          </p>
          {/*--------- Tech sliders ----------*/}
          <div className="grid gap-2">
            <TechSlider direction="forward" />
            <TechSlider direction="backward" />
          </div>
        </aside>
      </div>
    </section>
  );
}
