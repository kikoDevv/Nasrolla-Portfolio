import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white relative z-10 overflow-x-hidden sm:pt-30 pt-10">
      <hr className="text-white/10" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[1600px] bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center sm:justify-between gap-6">
          <a
            href="https://github.com/kikoDevv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 cursor-pointer">
            <div className="bg-emerald-300 rounded-full w-10 h-10 flex items-center justify-center">
              <Image src={"/kiko.png"} alt="Kikos image not found" height={50} width={50} />
            </div>
            <div>
              <p className="font-semibold">Kiko Dev</p>
              <p className="text-sm text-white/70">Fullstack developer</p>
            </div>
          </a>

          <div className="flex items-center sm:gap-4 gap-20">
            <a
              href="https://github.com/kikoDevv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md hover:bg-white/10 transition relative z-20 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-emerald-300">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nasrolla-hassani/"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:bg-white/10 transition relative z-20 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-emerald-300"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/KikoDevv"
              aria-label="Twitter"
              className="p-2 rounded-md hover:bg-white/10 transition relative z-20 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-emerald-300"
              target="_blank"
              rel="noreferrer">
              <FaTwitter />
            </a>
          </div>

          <nav className="flex items-center sm:gap-6 gap-20">
            <a
              href="#projects"
              className="text-sm hover:underline relative z-20 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-emerald-300">
              Projects
            </a>
            <a
              href="#about"
              className="text-sm hover:underline relative z-20 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-emerald-300">
              About
            </a>
            <a
              href="#home"
              className="text-sm hover:underline relative z-20 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-emerald-300">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
