import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import apex from "@/images/apex.webp";
import redDead from "@/images/red-ded.jpg";
import bo7 from "@/images/bo7.jpg";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla mx-auto w-full" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex items-center justify-center">
          <Image src={apex} alt="Apex Image bot found" className="rounded-lg" />
        </div>
        <div className="embla__slide flex items-center justify-center">
          <Image src={bo7} alt="Black ops 7 Image bot found" className="rounded-lg" />
        </div>
        <div className="embla__slide flex items-center justify-center">
          {" "}
          <Image src={redDead} alt="Red Dead redemption 2 Image bot found" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
