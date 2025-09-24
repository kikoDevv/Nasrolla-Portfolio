"use client";
import React from "react";
import grainImage from "@/images/grain.jpg";
import { EmblaCarousel } from "@/components/Carousel";
import { TechSlider } from "@/components/TechSlider";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Button from "@/components/Button";
import { MdArrowOutward } from "react-icons/md";

export default function AboutSection() {
  return (
    <section className="py-12 mx-2">
      {/*--------- header ----------*/}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="uppercase text-2xl font-semibold bg-gradient-to-r from-emerald-300 to-sky-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <h1 className="font-bold sm:text-4xl text-2xl">A glimpse into my work</h1>
        <p className="max-w-2xl mx-auto text-lg text-white/70 mt-2">
          I&apos;m a frontend developer focused on building fast, accessible, and beautiful web applications. I love
          translating ideas into polished user experiences.
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch">
        {/*--------- card left ----------*/}
        <article className="relative bg-gray-800 rounded-2xl p-6 shadow-lg md:col-span-1 flex flex-col items-center border-2 border-white/20">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
          <div className="flex items-center gap-1">
            <FaStar className="text-emerald-300 text-xl" />
            <h3 className="text-lg font-semibold">When I&apos;m not coding</h3>
          </div>
          <p className="text-gray-300 text-center">I enjoy exploring games that push systems and strategy.</p>
          {/*--------- image slider ----------*/}
          <div className="mt-1 max-h-50">
            <EmblaCarousel />
          </div>
        </article>

        {/*--------- card right ----------*/}
        <aside className="relative bg-gray-800 rounded-2xl p-6 shadow-lg md:col-span-2 flex flex-col border-2 border-white/20">
          <div className="absolute inset-0 -z-0 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
          <div className="flex items-center gap-1 select-none">
            <FaStar className="text-emerald-300 text-xl" />
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

      {/*------------------------ beyond the code section ------------------------*/}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch">
        {/*--------- card left beyond ----------*/}
        <aside className="relative bg-gray-800 rounded-2xl p-6 shadow-lg md:col-span-2 flex flex-col border-2 border-white/20 md:order-1">
          <div className="absolute inset-0 -z-0 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
          <div className="flex items-center gap-1 select-none">
            <FaStar className="text-emerald-300 text-xl" />
            <h3 className="text-lg font-semibold">Beyond the Code</h3>
          </div>
          <p className="text-gray-300 mt-3 select-none">
            When I&apos;m not coding, I explore other creative outlets and interests:
          </p>
          {/*--------- Content for beyond the code ----------*/}
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <p className="text-white/90">Photography and visual storytelling</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <p className="text-white/90">Learning new frameworks and technologies</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <p className="text-white/90">Contributing to open source projects</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <p className="text-white/90">Mentoring aspiring developers</p>
            </div>
          </div>
        </aside>

        {/*--------- card right map ----------*/}
        <article className="relative bg-gray-800 rounded-2xl p-6 shadow-lg md:col-span-1 flex flex-col items-center border-2 border-white/20 md:order-2 overflow-hidden min-h-80">
          <Image src={"/map.png"} alt="Map image not found" fill />
          <div className="absolute bg-emerald-300 rounded-full top-32 left-32 bg-gradient-to-r from-emerald-300 to-sky-300 h-20 w-20 border-2">
            <Image src={"/kiko-memoji.png"} alt="kiko-memeoji image not found" fill />
          </div>
        </article>
      </div>

      {/*------------------------ lets connect section ------------------------*/}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 sm:gap-6 mt-10 items-stretch bg-gradient-to-r from-emerald-600 to-sky-400 rounded-2xl overflow-hidden mt-50">
        {/*--------- card left beyond ----------*/}
        <aside className="p-6 md:col-span-2 flex flex-col md:order-1 items-start">
          <h3 className="text-2xl font-bold text-black/90 text-center sm:text-start">
            Ready to Bring Your Ideas to Life?
          </h3>
          <p className="font-medium text-gray-900/80 text-center sm:text-start">
            I’d love to hear what you’re dreaming up. Reach out together we’ll craft something you’re truly proud of.
          </p>
        </aside>

        {/*--------- card right map ----------*/}
        <article className="md:col-span-1 flex flex-col sm:items-end items-center md:order-2 sm:pr-10 pb-8 sm:justify-center sm:pb-0">
          <Button icon={<MdArrowOutward />} className="w-fit" />
        </article>
      </div>
    </section>
  );
}
