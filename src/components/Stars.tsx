import React from "react";
import Image, { StaticImageData } from "next/image";

interface StarsProps {
  src: string | StaticImageData;
  ringSize: number;
  starSize: number;
  rotation: number;
}

export default function Stars({ src, ringSize, starSize, rotation }: StarsProps) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div
        className="border border-red-500 [animation-duration:30s]"
        style={{ height: `${ringSize}px`, width: `${ringSize}px transform:`, transform: `rotate(${rotation}deg)` }}>
        <div className="border border-red-500 inline-flex [animation-duration:5s]">
          <Image
            src={src}
            width={starSize}
            height={starSize}
            alt="Decorative star"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(85%) sepia(15%) saturate(1352%) hue-rotate(118deg) brightness(93%) contrast(85%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
