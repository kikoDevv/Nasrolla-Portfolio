"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <section className="fixed sm:top-3 top-1 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex justify-center items-center bg-white/10 backdrop-blur border border-white/15 gap-1 p-0.5 rounded-full">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setActiveItem(item.name);
              if (item.name === "Projects") {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
              if (item.name === "Home") {
                const h = document.getElementById("home");
                if (h) h.scrollIntoView({ behavior: "smooth", block: "start" });
              }
              if (item.name === "About") {
                const a = document.getElementById("about");
                if (a) a.scrollIntoView({ behavior: "smooth", block: "start" });
              }
              if (item.name === "Contact") {
                const c = document.getElementById("connect");
                if (c) c.scrollIntoView({ behavior: "smooth", block: "start" });
              } else if (item.href && item.href !== "#") {
                window.location.href = item.href;
              }
            }}
            className={`relative px-4 py-1.5 text-sm font-semibold transition-colors duration-200 rounded-full ${
              activeItem === item.name ? "text-gray-900" : "text-white/70 hover:text-white/90"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            {activeItem === item.name && (
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                layoutId="activeBackground"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </motion.a>
        ))}
      </nav>
    </section>
  );
}
