import movieScout from "@/images/movieScout.png";
import taxi from "@/images/taxi.png";
import wordle from "@/images/wordle.png";
import grainImage from "@/images/grain.jpg";
import { FaCheckCircle } from "react-icons/fa";

import Button from "@/components/Button";
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Project",
    year: "2025",
    title: "Movie Scout",
    results: [
      { title: "A premium movie streaming platform" },
      { title: "Unlimited access to films & TV shows" },
      { title: "nstantly search & preview trailers" },
      { title: "Secure sign-in via Clerk authentication" },
      { title: "Stream or browse detailed movie info" },
    ],
    link: "https://movie-scout-rho.vercel.app/",
    image: movieScout,
  },
  {
    company: "Project",
    year: "2025",
    title: "Taxi legitimation",
    results: [
      { title: "An e-learning platform for taxi license theory" },
      { title: "Trafikverket-style practice questions, updated 2025" },
      { title: "Modern quiz app, seamless on mobile & desktop" },
      { title: "Instant explanations for each question" },
      { title: "Secure login for premium quiz content" },
    ],
    link: "https://taxilegitimationapp.se/",
    image: taxi,
  },
  {
    company: "Wordle-GPT",
    year: "2025",
    title: "Wordle-GPT",
    results: [
      { title: "Classic Wordle game with sleek modern design" },
      { title: "Multipage page website for user information" },
      { title: "Live score system powered by MongoDB" },
      { title: "Secure leaderboard with player game data" },
      { title: "Minimalist, color-coded UI for clarity and ease" },
    ],
    link: "https://wordle-gpt.vercel.app/",
    image: wordle,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="grid sm:mt-40 mt-5">
        {/*--------- text info ----------*/}
        <div className="grid items-center justify-items-center mb-20">
          <p className="text-sm font-semibold tracking-widest text-emerald-300 uppercase mb-2">MY PORTFOLIO</p>
          <h1 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text mb-4">
            Projects & Achievements
          </h1>
          <p className="max-w-xl text-lg text-center text-gray-300 leading-relaxed">
            Explore my journey through successful projects and the measurable impact I&apos;ve delivered
          </p>
        </div>
        {/*--------- cards ----------*/}
        <div className="flex flex-col mx-2 max-w-7xl mx-auto">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 pl-8 pr-8 sm:pr-5 pt-8 mx-2 sm:pb-0 after:pointer-events-none sticky mb-20`}
              style={{
                top: `${5 + index * 2}rem`,
                height: "fit-content",
              }}>
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}></div>
              <div className="sm:flex justify-center grid">
                <div className="sm:grid">
                  <div className="flex">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div className="grid space-y-3 mb-5">
                    <h3 className="font-bold text-2xl lg:text-4xl leading-tight">{project.title}</h3>
                    <hr className="border-t-2 border-white/5" />
                    <ul className="flex flex-col gap-4">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-3  text-base lg:text-lg text-white/70">
                          <FaCheckCircle className="text-emerald-400 text-lg flex-shrink-0" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>{" "}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-fit">
                      <Button text="Visit Live Site" icon="📎" className="w-fit h-fit" />
                    </a>
                  </div>
                </div>

                {/*--------- Image Section ----------*/}
                <div className="relative sm:ml-3">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-t-2xl shadow-2xl border border-white/10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
