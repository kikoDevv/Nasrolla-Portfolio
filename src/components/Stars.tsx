import React from "react";
import Image, { StaticImageData } from "next/image";

interface StarsProps {
  src: string | StaticImageData;
  ringSize: number;
  starSize: number;
  rotation: number;
  className?: string;
}

export default function Stars({ src, ringSize, starSize, rotation, className }: StarsProps) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div
        className="border border-red-500 animate-spin [animation-duration:30s]"
        style={{ height: `${ringSize}px`, width: `${ringSize}px transform:`, transform: `rotate(${rotation}deg)` }}>
        <div className="border border-red-500 inline-flex animate-spin [animation-duration:5s]">
          <Image
            src={src}
            width={starSize}
            height={starSize}
            alt="Decorative star"
            className={className}
            style={{
              filter: "invert(85%) sepia(15%) saturate(1352%) hue-rotate(118deg)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
