"use client";

import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import Stars from "@/components/Stars";

export default function Hero() {
  return (
    <section className="relative z-0 py-70">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,_transparent,_black_10%,_black_70%,_transparent)] overflow-hidden">
        <div
          className="absolute inset-0 -z-30 opacity-5 h-dvh"
          style={{
            backgroundImage: "url('/grain.jpg')",
          }}></div>
        {/*--------- rings ----------*/}
        <div className="absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 "></div>
        <div className="absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 "></div>
        <div className="absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 "></div>
        <div className="absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 "></div>
        {/*--------- stars ----------*/}
        <Stars src={"/icons/star.svg"} ringSize={1050} starSize={60} rotation={-72} />
        <Stars src={"/icons/star.svg"} ringSize={770} starSize={40} rotation={222} />
        <Stars src={"/icons/star.svg"} ringSize={810} starSize={25} rotation={72} />
        {/*--------- sparkels ----------*/}
        <Stars src={"/icons/sparkle.svg"} ringSize={990} starSize={45} rotation={112} className="opacity-10" />
        <Stars src={"/icons/sparkle.svg"} ringSize={960} starSize={45} rotation={190} className="opacity-10" />
        <Stars src={"/icons/sparkle.svg"} ringSize={560} starSize={25} rotation={190} className="opacity-10" />
        <Stars src={"/icons/sparkle.svg"} ringSize={560} starSize={25} rotation={30} className="opacity-10" />
        {/*--------- sircles ----------*/}
        <Stars src={"/icons/circle.svg"} ringSize={580} starSize={15} rotation={120} className="opacity-10" />
        <Stars src={"/icons/circle.svg"} ringSize={790} starSize={25} rotation={320} className="opacity-10" />
        <Stars src={"/icons/circle.svg"} ringSize={990} starSize={20} rotation={420} className="opacity-10" />
      </div>
      {/*--------- the Memoji ----------*/}
      <div className="grid">
        <div className="grid justify-center justify-items-center">
          <Image src={"/kikoMain.png"} alt="Kikos image not found!" width={100} height={100} />
          <div className="flex items-center gap-2 px-3 border rounded-md border-white/11 bg-black/60 backdrop-blur">
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
          <h1 className="text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text">
            Crafting Digital Excellence
          </h1>
          <p className="max-w-xl mx-auto text-lg leading-relaxed text-center text-gray-300 md:text-xl">
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
