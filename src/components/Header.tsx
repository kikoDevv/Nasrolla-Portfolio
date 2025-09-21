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
    <section className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex justify-center items-center bg-white/10 backdrop-blur border border-white/15 gap-1 p-0.5 rounded-full">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={() => setActiveItem(item.name)}
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
