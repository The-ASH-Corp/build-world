"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useRef } from "react";

export default function Hero() {
  const { hero } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY1 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section ref={ref} className="relative w-full h-[100vh] min-h-[800px] flex flex-col justify-end overflow-hidden bg-[#050505]">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url(${hero.bgImage})`,
          y: bgY
        }}
      />
      
      {/* Top Gradient for navbar contrast */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

      {/* Massive Background Text - "Build World" */}
      <div className="absolute top-[12%] left-0 w-full flex justify-center pointer-events-none select-none z-10">
        <motion.h1 
          style={{ y: textY1 }}
          className="font-['Matangi'] text-[12vw] xl:text-[220px] leading-[1] font-black tracking-tighter flex items-center justify-center gap-8 w-full"
        >
          {/* Build */}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 0.93) 30%, rgba(255, 255, 255, 0.1) 100%)" }}>
            Build
          </span>
          {/* World */}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(180deg, rgba(221, 221, 221, 0.9) 30%, rgba(122, 121, 143, 0.1) 100%)" }}>
            World
          </span>
        </motion.h1>
      </div>

      {/* Bottom Gradient for buttons contrast */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* Bottom Action Bar */}
      <div className="relative z-20 w-full max-w-[1533px] mx-auto px-8 md:px-16 pb-12 xl:pb-16 flex flex-col xl:flex-row justify-between items-center xl:items-end gap-8">
        
        {/* Left Side: Subtitle */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center w-full xl:w-auto"
        >
          <div className="w-[6px] h-[60px] bg-[#2991ce] mr-6 shrink-0 rounded-sm"></div>
          <h2 className="text-[24px] xl:text-[32px] font-['Menbere'] text-white whitespace-pre-line leading-[1.3] capitalize">
            {hero.subtitle}
          </h2>
        </motion.div>

        {/* Right Side: Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 w-full xl:w-auto justify-end"
        >
          {/* Primary Button */}
          <a href={hero.primaryButton.link} className="group relative bg-[#2991ce] border border-[#2991ce] text-white h-[60px] px-8 rounded-full font-bold hover:bg-transparent transition-all flex items-center justify-center gap-4 text-xs xl:text-sm tracking-wider uppercase font-['Menbere'] overflow-hidden">
            <span className="relative z-10">{hero.primaryButton.text}</span>
            <div className="relative z-10 bg-white text-[#2991ce] rounded-full w-8 h-8 flex items-center justify-center transition-transform group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>
          </a>
          
          {/* Secondary Button */}
          <a href={hero.secondaryButton.link} className="group relative bg-transparent border border-white/50 text-white h-[60px] px-8 rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 text-xs xl:text-sm tracking-wider uppercase font-['Menbere']">
            <span>{hero.secondaryButton.text}</span>
            <div className="bg-transparent text-white group-hover:text-black w-6 h-6 flex items-center justify-center transition-transform group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
