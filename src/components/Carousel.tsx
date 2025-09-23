"use client";
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import apex from "@/images/apex.webp";
import redDead from "@/images/red-ded.jpg";
import bo7 from "@/images/bo7.jpg";
import Image from "next/image";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [progress, setProgress] = useState(0);
  const raf = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const pauseStartRef = useRef<number | null>(null);
  const duration = 4000;

  useEffect(() => {
    if (!emblaApi) return;

    const step = (ts: number) => {
      if (pausedRef.current) {
        raf.current = requestAnimationFrame(step);
        return;
      }
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const p = Math.min(1, elapsed / duration);
      setProgress(p);
      if (p >= 1) {
        emblaApi.scrollNext();
        startRef.current = ts;
        setProgress(0);
      }
      raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);

    const node = emblaApi.rootNode();
    const onEnter = () => {
      pausedRef.current = true;
      pauseStartRef.current = performance.now();
    };
    const onLeave = () => {
      pausedRef.current = false;
      if (pauseStartRef.current && startRef.current) {
        const pausedDuration = performance.now() - pauseStartRef.current;
        startRef.current = startRef.current + pausedDuration;
      }
      pauseStartRef.current = null;
    };
    node?.addEventListener("pointerenter", onEnter);
    node?.addEventListener("pointerleave", onLeave);

    const onSelect = () => {
      startRef.current = null;
      setProgress(0);
    };
    emblaApi.on("select", onSelect);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      node?.removeEventListener("pointerenter", onEnter);
      node?.removeEventListener("pointerleave", onLeave);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="embla mx-auto w-full">
      <div className="embla__viewport" ref={emblaRef}>
        {/*--------- container ----------*/}
        <div className="embla__container flex cursor-pointer">
          <div className="embla__slide flex items-center justify-center">
            <Image src={apex} alt="Apex" className="rounded-lg" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src={bo7} alt="Black Ops 7" className="rounded-lg" />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image src={redDead} alt="Red Dead" className="rounded-lg" />
          </div>
        </div>
      </div>
      {/*--------- Progress bar ----------*/}
      <div className="flex items-center justify-center">
        <div className="flex w-20 h-2 bg-gray-700 border border-white/50 mt-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-white"
            style={{ width: `${Math.round(progress * 100)}%`, transition: "width 10ms ease-in-out" }}
          />
        </div>
      </div>
    </div>
  );
}
