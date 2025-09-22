import Image from "next/image";
import React from "react";
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "Modern",
  "Intuitive",
  "Fast",
  "Beautiful",
  "Mobile Ready",
  "Customizable",
  "Robust",
  "Innovative",
  "Consistent",
  "Efficient",
];

export default function TapeSection() {
  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-emerald-300 via-purple-500 to-sky-400 overflow-hidden -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-move-left" style={{ animationDuration: "30s" }}>
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word) => (
                  <div key={`${word}-${index}`} className="inline-flex gap-4 items-center whitespace-nowrap">
                    <span className="text-sm font-bold text-gray-900">{word}</span>
                    <Image
                      src={"/icons/star.svg"}
                      alt="Star icon cant be found!"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
