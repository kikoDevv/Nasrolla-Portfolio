"use client";
import { GiJusticeStar } from "react-icons/gi";
import React from "react";
import Image from "next/image";
import apex from "@/images/apex.jpg";
import grainImage from "@/images/grain.jpg";

export default function AboutSection() {
  return (
    <section className="grid">
      <div className="grid items-center justify-items-center">
        <h2 className="uppercase text-2xl font-semibold bg-gradient-to-r from-emerald-300 to-sky-600 bg-clip-text text-transparent">
          About me
        </h2>
        <h1 className="text-bold font-serif sm:text-5xl text-3xl">A Glimpse Into My Word</h1>
        <p className="max-w-xl text-lg text-center text-white/50 leading-relaxed">
          Learn more about who Im, what i do, and what inspires me.
        </p>
      </div>
      {/*--------- card left ----------*/}
      <div className="flex gap-10">
        <div className="grid relative bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-5 after:pointer-events-none space-y-2">
          <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
          <div className="flex items-center justify-center">
            <GiJusticeStar />
            <h2>My Game</h2>
          </div>
          <p>Explore the game i enjoy playing.</p>
          <div className="flex items-center justify-center mt-3">
            <Image src={apex} alt="Apex image not found!" height={200} width={200} className="rounded-t-lg" />
          </div>
        </div>
        {/*--------- card right ----------*/}
        <div className="flex bg-red-500 w-full">
          <div className="grid relative bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-5 after:pointer-events-none space-y-2 w-full">
            <div
              className="absolute inset-0 -z-10 opacity-5"
              style={{ backgroundImage: `url(${grainImage.src})` }}></div>
            <div className="flex items-center">
              <GiJusticeStar />
              <h2>My Toolbox</h2>
            </div>
            <p>Explore the technologies and tools i use to craft exceptional digital experiences.</p>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
