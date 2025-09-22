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
import Image from "next/image";
import apex from "@/images/apex.jpg";
import bo7 from "@/images/bo7.jpg";
import grainImage from "@/images/grain.jpg";

export default function AboutSection() {
  return (
    <section className="grid">
      <div className="grid items-center justify-items-center">
        <h2 className="uppercase text-2xl font-semibold bg-gradient-to-r from-emerald-300 to-sky-600 bg-clip-text text-transparent">
          About me
        </h2>
        <h1 className="text-bold font-serif sm:text-5xl text-3xl">A Glimpse Into My World</h1>
        <p className="max-w-xl text-lg text-center text-white/50 leading-relaxed">
          Learn more about who I am, what I do, and what inspires me.
        </p>
      </div>

      {/* Cards: responsive layout centered horizontally */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 place-items-stretch">
        {/* Left card (smaller on md+) */}
        <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className="relative bg-gray-800 rounded-3xl overflow-hidden px-6 pt-6 shadow-lg md:col-span-1">
          <div className="flex items-center gap-3">
            <GiJusticeStar className="text-emerald-300 text-xl" />
            <h3 className="text-lg font-semibold">My Game</h3>
          </div>
          <p className="text-gray-300 mt-3">
            I enjoy exploring games that push systems and strategy — here’s one I play often.
          </p>
          <div className="flex items-center justify-center mt-6 gap-4 w-full">
            <Image src={apex} alt="Apex image" fill className="object-cover" />
          </div>
        </div>

        {/* Right card (larger on md+) */}
        <div className="relative bg-gray-800 rounded-3xl overflow-hidden px-6 py-6 shadow-lg md:col-span-2">
          <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }} />
          {/*--------- title ----------*/}
          <div className="grid">
            <div className="flex items-center gap-3">
              <GiJusticeStar className="text-emerald-300 text-xl" />
              <h3 className="text-lg font-semibold">My Toolbox</h3>
            </div>
            <p className="text-white/50 mt-3 max-w-80">
              Tools and technologies I regularly use to build production-ready applications.
            </p>
          </div>

          <div className="overflow-hidden py-3 mt-4">
            {(() => {
              const techNames = [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Vercel",
                "Prisma",
                "Postgres",
                "GraphQL",
                "React Query",
                "Zustand",
                "Framer Motion",
                "Jest",
                "Cypress",
                "Docker",
                "Git",
                "ESLint",
                "Prettier",
              ];

              const iconMap: Record<string, IconType> = {
                React: FaReact,
                "Next.js": SiNextdotjs,
                TypeScript: SiTypescript,
                "Tailwind CSS": SiTailwindcss,
                "Node.js": FaNodeJs,
                Vercel: SiVercel,
                Prisma: SiPrisma,
                Postgres: SiPostgresql,
                GraphQL: SiGraphql,
                Jest: SiJest,
                Cypress: SiCypress,
                Docker: FaDocker,
                Git: FaGitAlt,
              };

              const items = techNames;

              return (
                <>
                  <div
                    className="flex items-center whitespace-nowrap gap-6 animate-move-left"
                    style={{ animationDuration: "20s" }}>
                    {[...items, ...items].map((tech, i) => {
                      const Icon = iconMap[tech] ?? FaTools;
                      return (
                        <div
                          key={`${tech}-${i}`}
                          className="inline-flex items-center gap-3 px-6 py-3 border-2 border-white/20 rounded-xl font-semibold">
                          <Icon className="text-emerald-300" size={25} aria-hidden />
                          <span className="text-sm text-gray-200">{tech}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div
                    className="flex items-center whitespace-nowrap gap-6 mt-3 animate-move-left"
                    style={{ animationDuration: "28s", animationDirection: "reverse" }}>
                    {[...items, ...items].map((tech, i) => {
                      const Icon = iconMap[tech] ?? FaTools;
                      return (
                        <div
                          key={`b-${tech}-${i}`}
                          className="inline-flex items-center gap-3 px-6 py-3 border-2 border-white/20 rounded-xl font-semibold">
                          <Icon className="text-emerald-300" size={25} aria-hidden />
                          <span className="text-sm text-gray-200">{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
