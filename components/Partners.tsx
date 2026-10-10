"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Partners() {
  const logos = [
    { name: "FORMZ", img: "/images/imgi_48_for.png" },
    { name: "JB GROUP", img: "/images/imgi_46_Logo-3.png" },
    { name: "d&e ARCHITECTS", img: "/images/imgi_45_Logo-2.png" },
    { name: "CONCETTO", img: "/images/imgi_47_co.png" },
    { name: "and", img: "/images/imgi_44_Logo-1.png" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="pt-4 md:pt-6 pb-6 md:pb-8 bg-[#c2e1eb] border-y border-white/10 overflow-hidden relative">
      <div className="flex w-full">
        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-25%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={i}
              className="flex justify-center items-center px-8 md:px-16 min-w-[200px]"
            >
              <div className="relative h-16 w-32 md:w-40 flex items-center justify-center">
                <Image
                  src={logo.img}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
