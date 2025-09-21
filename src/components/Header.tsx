import React from "react";

export default function Header() {
  return (
    <section className="relative flex items-center justify-center top-3">
      <nav className="flex justify-center items-center bg-white/10 backdrop-blur border border-white/15 gap-1 p-0.5 rounded-full">
        <a href="#" className="px-3 py-1 text-gray-900 bg-white rounded-full">
          Home
        </a>
        <a
          href="#"
          className="text-white/70 text-sm font-semibold px-4 py-1.5 hover:text-white/50 transition-all duration-200">
          Projects
        </a>
        <a
          href="#"
          className="text-white/70 text-sm font-semibold px-4 py-1.5 hover:text-white/50 transition-all duration-200">
          About
        </a>
        <a
          href="#"
          className="text-white/70 text-sm font-semibold px-4 py-1.5 hover:text-white/50 transition-all duration-200">
          Contact
        </a>
      </nav>
    </section>
  );
}
