"use client";

import Image from "next/image";
import React from "react";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative z-0 py-70">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: "url('/grain.jpg')",
        }}></div>
        {/*--------- rings ----------*/}
        <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 "></div>

      <div className="grid">
        {/*--------- the Memoji ----------*/}
        <div className="grid justify-center justify-items-center">
          <Image src={"/kikoMain.png"} alt="Kikos image not found!" width={100} height={100} />
          <div className="flex items-center gap-2 border border-gray-500/50 rounded-sm px-3 bg-black/90 backdrop-blur">
            {/*--------- Pulsing ring ----------*/}
            <div className="relative flex items-center justify-center">
              <div className="absolute size-3 rounded-full border-2 border-green-500 animate-ping" />
              {/* Inner solid dot */}
              <div className="size-2 rounded-full bg-green-500 relative z-10" />
            </div>
            <p className="text-sm">Available for new projects</p>
          </div>
        </div>
        {/*--------- Title  ----------*/}
        <section className="grid pt-4 gap-2">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I transform innovative ideas into stunning, high-performance web experiences that captivate users and drive
            results. Ready to bring your vision to life?
          </p>
          <div className="sm:flex grid justify-center gap-5 sm:mt-2 mt-5">
            <Button icon="👋" iconPosition="left" text="Let's Connect" />
            <Button variant="secondary" text="Explore My Work" icon="↓" />
          </div>
        </section>
      </div>
    </section>
  );
}
