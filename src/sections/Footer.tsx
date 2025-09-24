import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-300 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="font-bold text-black">K</span>
            </div>
            <div>
              <p className="font-semibold">Kiko Dev</p>
              <p className="text-sm text-white/70">Frontend developer • UI & UX</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              aria-label="GitHub"
              className="p-2 rounded-md hover:bg-white/10 transition"
              target="_blank"
              rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:bg-white/10 transition"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              className="p-2 rounded-md hover:bg-white/10 transition"
              target="_blank"
              rel="noreferrer">
              <FaTwitter />
            </a>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#projects" className="text-sm hover:underline">
              Projects
            </a>
            <a href="#about" className="text-sm hover:underline">
              About
            </a>
            <a href="#contact" className="text-sm hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
