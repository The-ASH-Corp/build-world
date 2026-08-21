"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const logos = [
    { name: "FORMZ", img: "/images/EG9v4xAiDf3ydgfpqM70gHDUyM.png" },
    { name: "JB GROUP", img: "/images/YKGuGPXFgwy4fRmG9drVHiSJ1c.png" },
    { name: "passion to design", img: "/images/6aATekDLTIngAm0ATP8I4Ny4os.png" },
    { name: "d&e ARCHITECTS", img: "/images/tEnd1qHzR0WFFdeDnkabeYjJk.png" },
    { name: "CONCETTO", img: "/images/xf1KVhd5mSnEPZmJKk1lycYyUc.png" }
  ];

  // Duplicate logos multiple times for a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-[#0a2e42] border-y border-white/10 overflow-hidden relative">
      <div className="opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex w-full">
        <motion.div 
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-25%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className="flex justify-center px-8 md:px-16 min-w-[200px]">
               <div className="h-16 w-32 md:w-40 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${logo.img})` }} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
