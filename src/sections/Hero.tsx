"use client";

import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import Stars from "@/components/Stars";
import Dot from "@/components/dot";

export default function Hero() {
  return (
    <section id="home" className="relative z-0 py-70">
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
      <div className="grid sm:pb-15">
        <div className="grid justify-center justify-items-center">
          <Image
            src={"/kikoMain.png"}
            alt="Kikos profile image"
            width={1200}
            height={1200}
            quality={100}
            priority
            className="w-full max-w-xs md:max-w-sm h-auto object-cover z-88"
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 400px"
          />
          <div className="flex items-center gap-2 px-5 border rounded-md border-white/11 bg-black/60 backdrop-blur">
            {/*--------- Pulsing ring ----------*/}
            <div className="relative flex items-center justify-center">
              <div className="absolute border-2 border-green-500 rounded-full size-3 animate-ping" />
              {/* Inner solid dot */}
              <div className="relative z-10 bg-green-500 rounded-full size-2" />
            </div>
            <p className="text-sm font-semibold font-system">Available for new projects</p>
          </div>
        </div>
        {/*--------- Title  ----------*/}
        <section className="grid pt-1">
          <h1 className="text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-300 bg-clip-text">
            Hi, Im Nasrolla
          </h1>

          <div className="place-self-center justify-items-start sm:max-w-125 max-w-95">
            <div className="flex pl-6 py-2 text-sm sm:text-lg text-center text-gray-300 leading-relaxed gap-2">
              <p>I build </p>
              <Dot
                cycle={true}
                textColor="white"
                speed={30}
                text={[
                  "scalable systems built to last",
                  "high-performance apps that scale",
                  "beautiful interfaces that inspire",
                  "innovative solutions that matter",
                ]}
              />
            </div>
          </div>
          <p className="max-w-xl mx-auto text-lg leading-relaxed text-center text-gray-300 md:text-xl"></p>
          <div className="grid justify-center gap-5 mt-5 sm:flex sm:mt-2">
            <a href="https://github.com/kikoDevv" target="_blank" rel="noopener noreferrer">
              <Button icon="👋" iconPosition="left" text="Let's Connect" />
            </a>
            <Button
              variant="secondary"
              text="Explore My Work"
              icon="↓"
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
          </div>
        </section>
      </div>
    </section>
  );
}
