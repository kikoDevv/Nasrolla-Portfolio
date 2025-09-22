import darkSaasLandingPage from "@/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/images/ai-startup-landing-page.png";
import { FaCheckCircle } from "react-icons/fa";

import Button from "@/components/Button";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section>
      <div className="grid mt-30">
        {/*--------- text info ----------*/}
        <div className="grid items-center justify-items-center">
          <p className="text-sm font-semibold tracking-widest text-emerald-300 uppercase mb-2">MY PORTFOLIO</p>
          <h1 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text mb-4">
            Projects & Achievements
          </h1>
          <p className="max-w-xl text-lg text-center text-gray-300 leading-relaxed">
            Explore my journey through successful projects and the measurable impact I&apos;ve delivered
          </p>
        </div>
        {/*--------- cards ----------*/}
        <div className="flex flex-col space-y-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none">
              <div className="flex">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3 className="font-bold pt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 my-2" />
              <ul className="flex flex-col gap-4">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-white/50">
                    <FaCheckCircle />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <Button text="Visit Live Site" icon="📎" className="my-4"/>
              <Image src={project.image} alt="Projects image not found" width={800} height={800} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
