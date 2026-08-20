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

  return (
    <section className="py-12 bg-[#0a2e42] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between items-center gap-8 md:gap-4 overflow-hidden opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        {logos.map((logo, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-1 flex justify-center min-w-[120px]"
          >
             <div className="h-16 w-32 md:w-40 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${logo.img})` }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
