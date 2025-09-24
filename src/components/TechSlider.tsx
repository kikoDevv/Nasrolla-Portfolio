"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import { FaReact, FaNodeJs, FaVuejs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiVercel,
  SiDocker,
  SiGraphql,
  SiRedis,
  SiPrisma,
  SiAngular,
} from "react-icons/si";
interface sliderProps {
  direction?: "forward" | "backward";
  speed?: number;
  dragable?: boolean;
}

export function TechSlider({ direction, speed, dragable }: sliderProps) {
  const dir = direction ?? "backward";
  const sp = typeof speed === "number" && !isNaN(speed) ? speed : 1;
  const draggable = dragable ?? true;

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      dragFree: draggable,
    },
    [
      AutoScroll({
        speed: sp,
        direction: dir,
        stopOnInteraction: false,
      }),
    ]
  );
  const technologies = [
    { icon: <FaReact className="w-5 h-5 text-blue-400" />, name: "React" },
    { icon: <SiNextdotjs className="w-5 h-5 text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="w-5 h-5 text-blue-600" />, name: "TypeScript" },
    { icon: <SiJavascript className="w-5 h-5 text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" />, name: "Tailwind" },
    { icon: <FaNodeJs className="w-5 h-5 text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="w-5 h-5 text-gray-400" />, name: "Express" },
    { icon: <SiMongodb className="w-5 h-5 text-green-500" />, name: "MongoDB" },
    { icon: <SiPostgresql className="w-5 h-5 text-blue-500" />, name: "PostgreSQL" },
    { icon: <SiPrisma className="w-5 h-5 text-white" />, name: "Prisma" },
    { icon: <SiGraphql className="w-5 h-5 text-pink-500" />, name: "GraphQL" },
    { icon: <SiGit className="w-5 h-5 text-orange-500" />, name: "Git" },
    { icon: <SiVercel className="w-5 h-5 text-white" />, name: "Vercel" },
    { icon: <SiDocker className="w-5 h-5 text-blue-400" />, name: "Docker" },
    { icon: <FaVuejs className="w-5 h-5 text-green-500" />, name: "Vue.js" },
    { icon: <SiAngular className="w-5 h-5 text-red-500" />, name: "Angular" },
    { icon: <SiSass className="w-5 h-5 text-pink-400" />, name: "Sass" },
    { icon: <SiRedis className="w-5 h-5 text-red-600" />, name: "Redis" },
  ];

  return (
    <div className="embla mx-auto w-full mt-4 cursor-none">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex cursor-pointer">
          {/*--------- loop ----------*/}
          {technologies.map((tech, index) => (
            <div key={index} className="embla__slide px-2 flex max-w-fit">
              <div className="flex items-center w-fit justify-center px-3 py-2 bg-gray-900/30 rounded-lg border-2 border-white/10 gap-2 w-fit">
                {tech.icon}
                <p className="text-sm font-medium text-white/90 select-none">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
