"use client";
import { GiJusticeStar } from "react-icons/gi";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaTools } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiPrisma,
  SiPostgresql,
  SiGraphql,
  SiJest,
  SiCypress,
} from "react-icons/si";
import React from "react";
import grainImage from "@/images/grain.jpg";
import { EmblaCarousel } from "@/components/Carousel";

export default function AboutSection() {
  return (
    <section className="py-12">
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
          <p className="text-gray-300 mt-3 text-center">
            I enjoy exploring games that push systems and strategy — here&apos;s one I play often.
          </p>
          {/* Image */}
          <div className="mt-4 max-h-50">
            <  EmblaCarousel />
          </div>
        </article>

        {/*--------- card right ----------*/}
        <aside className="relative bg-gray-800 rounded-2xl p-6 shadow-lg md:col-span-2 flex flex-col">
          <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
          <div className="flex items-center gap-3">
            <GiJusticeStar className="text-emerald-300 text-xl" />
            <h3 className="text-lg font-semibold">My Toolbox</h3>
          </div>
          <p className="text-gray-300 mt-3">Tools and technologies I use to build production-ready applications:</p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-sm text-gray-200">
            <li className="px-3 py-2 bg-white/5 rounded">React</li>
            <li className="px-3 py-2 bg-white/5 rounded">Next.js</li>
            <li className="px-3 py-2 bg-white/5 rounded">TypeScript</li>
            <li className="px-3 py-2 bg-white/5 rounded">Tailwind</li>
            <li className="px-3 py-2 bg-white/5 rounded">Node</li>
            <li className="px-3 py-2 bg-white/5 rounded">Vercel</li>
          </ul>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <p className="text-sm text-gray-400">Want to collaborate?</p>
            <a
              href="#contact"
              className="inline-block bg-emerald-400 text-black px-4 py-2 rounded hover:bg-emerald-300">
              Let&apos;s talk
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
