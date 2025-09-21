"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <div className="grid mt-40">
        {/*--------- the Memoji ----------*/}
        <div className="grid justify-center justify-items-center">
          <Image src={"/kikoMain.png"} alt="Kikos image not found!" width={100} height={100} />
          <div className="flex items-center gap-2 border border-gray-500/50 rounded-sm px-3 bg-black">
            <div className="relative flex items-center justify-center">
              {/*--------- Pulsing ring ----------*/}
              <motion.div
                className="absolute size-2 rounded-full border-2 border-green-500/50"
                animate={{
                  scale: [0.5, 2, 0.5,],
                  opacity: [0.1, 1, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeIn",
                }}
              />
              {/* Inner solid dot */}
              <motion.div
                className="size-2 rounded-full bg-green-500 relative z-10"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <p className="text-sm">Available for new projects</p>
          </div>
        </div>
        {/*--------- Status  ----------*/}
      </div>
    </section>
  );
}
