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

  // Parallax effects for 3D depth
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const houseY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative w-full h-[100vh] min-h-[800px] flex flex-col justify-end overflow-hidden bg-[#050505]">
      
      {/* LAYER 1: Background Sky */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/images/41T7XkmAJGDtVOCpIElcL8tpE.png')",
          y: skyY
        }}
      />
      
      {/* Top Gradient for navbar contrast (above sky) */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

      {/* LAYER 2: Massive Background Text - "Build World" */}
      <div className="absolute top-[10%] left-0 w-full flex justify-center pointer-events-none select-none z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <motion.h1 
            style={{ y: textY }}
            className="font-['Matangi'] text-[12vw] xl:text-[220px] leading-[1] font-black tracking-tighter flex items-center justify-center w-full"
          >
            <span 
              className="text-transparent bg-clip-text" 
              style={{ backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0.1) 100%)" }}
            >
              Build World
            </span>
          </motion.h1>
        </motion.div>
      </div>

      {/* LAYER 3: Foreground House */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat z-20 pointer-events-none"
        style={{ 
          backgroundImage: `url(${hero.bgImage})`,
          y: houseY
        }}
      />

      {/* Bottom Gradient for buttons contrast (above house) */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 pointer-events-none" />

      {/* LAYER 4: Bottom Action Bar */}
      <div className="relative z-30 w-full max-w-[1533px] mx-auto px-8 md:px-16 pb-12 xl:pb-16 flex flex-col xl:flex-row justify-between items-center xl:items-end gap-8">
        
        {/* Left Side: Subtitle */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center w-full xl:w-auto"
        >
          <div className="w-[8px] h-[70px] bg-[#2a9df4] mr-6 shrink-0"></div>
          <h2 className="text-[28px] xl:text-[36px] font-['Menbere'] text-white whitespace-pre-line leading-[1.2] capitalize tracking-tight">
            {hero.subtitle}
          </h2>
        </motion.div>

        {/* Right Side: Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto justify-end"
        >
          {/* Primary Button */}
          <a href={hero.primaryButton.link} className="group relative bg-[#2a9df4] text-white h-[60px] pl-8 pr-2 rounded-full font-bold hover:bg-[#1f87d6] transition-all flex items-center justify-center gap-6 text-[11px] xl:text-[13px] tracking-widest uppercase font-['Menbere'] shadow-lg pointer-events-auto">
            <span className="relative z-10 mt-[2px]">{hero.primaryButton.text}</span>
            <div className="relative z-10 bg-white/90 text-[#2a9df4] rounded-full w-12 h-12 flex items-center justify-center transition-transform group-hover:rotate-45 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>
          </a>
          
          {/* Secondary Button */}
          <a href={hero.secondaryButton.link} className="group relative bg-transparent border border-white/50 text-white h-[60px] px-8 rounded-full font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 text-[11px] xl:text-[13px] tracking-widest uppercase font-['Menbere'] pointer-events-auto">
            <span className="mt-[2px]">{hero.secondaryButton.text}</span>
            <div className="bg-transparent text-white group-hover:text-black w-4 h-4 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
