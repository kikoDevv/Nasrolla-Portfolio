"use client";

import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import Stars from "@/components/Stars";

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
      <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 "></div>
      <div className="absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 "></div>
      <div className="absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 "></div>
      {/*--------- stars ----------*/}
      <Stars src={"/icons/star.svg"} ringSize={1100} starSize={100} rotation={-72} />
      <Stars src={"/icons/star.svg"} ringSize={770} starSize={40} rotation={12} />
      <Stars src={"/icons/star.svg"} ringSize={810} starSize={25} rotation={72} />
      {/*--------- sparkels ----------*/}
      <Stars src={"/icons/sparkle.svg"} ringSize={990} starSize={45} rotation={112} />
      <div className="grid">
        {/*--------- the Memoji ----------*/}
        <div className="grid justify-center justify-items-center">
          <Image src={"/kikoMain.png"} alt="Kikos image not found!" width={100} height={100} />
          <div className="flex items-center gap-2 px-3 border rounded-sm border-gray-500/50 bg-black/90 backdrop-blur">
            {/*--------- Pulsing ring ----------*/}
            <div className="relative flex items-center justify-center">
              <div className="absolute border-2 border-green-500 rounded-full size-3 animate-ping" />
              {/* Inner solid dot */}
              <div className="relative z-10 bg-green-500 rounded-full size-2" />
            </div>
            <p className="text-sm">Available for new projects</p>
          </div>
        </div>
        {/*--------- Title  ----------*/}
        <section className="grid gap-2 pt-4">
          <h1 className="text-4xl font-bold text-center text-transparent md:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text">
            Crafting Digital Excellence
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-center text-gray-300 md:text-xl">
            I transform innovative ideas into stunning, high-performance web experiences that captivate users and drive
            results. Ready to bring your vision to life?
          </p>
          <div className="grid justify-center gap-5 mt-5 sm:flex sm:mt-2">
            <Button icon="👋" iconPosition="left" text="Let's Connect" />
            <Button variant="secondary" text="Explore My Work" icon="↓" />
          </div>
        </section>
      </div>
    </section>
  );
}
