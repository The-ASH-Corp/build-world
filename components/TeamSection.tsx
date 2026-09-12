"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { homeData } from "@/data/homeData";

export default function TeamSection() {
  const { team } = homeData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || team.members.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.members.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, team.members.length]);

  const member = team.members[currentIndex];

  return (
    <section className="relative w-full bg-[#050505] py-24 xl:py-32 overflow-hidden">
      <div className="max-w-[1533px] mx-auto px-0 md:px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="flex flex-col items-start md:items-center mb-10 md:mb-16 lg:mb-20 xl:mb-24 text-left md:text-center px-6 md:px-0">
          <h2 className="font-['Menbere'] text-[36px] md:text-[60px] lg:text-[72px] xl:text-[85px] font-bold text-white capitalize leading-none mb-4 md:mb-6">
            {team.title}
          </h2>
          <p className="font-['Menbere'] text-[14px] md:text-[18px] text-[#b0b0b0] max-w-2xl mx-0 md:mx-auto">
            {team.subtitle}
          </p>
        </div>

        {/* Team Member Card (Fixed Container Shell) */}
        <div
          className="relative w-full flex flex-col-reverse lg:flex-row items-center lg:items-stretch bg-[#0e374f] rounded-none md:rounded-t-[60px] md:rounded-b-[30px] lg:rounded-b-none h-auto lg:h-[500px] xl:h-[540px] shadow-2xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Content Container (Left Side) */}
          <div className="relative z-10 w-full lg:w-[58%] xl:w-[60%] p-6 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-between h-full min-h-[380px] lg:min-h-full">
            
            {/* Animating Text Content - Locked Grid Cell */}
            <div className="grid grid-cols-1 grid-rows-1 min-h-[240px] md:min-h-[220px] lg:min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="col-start-1 row-start-1 flex flex-col justify-start"
                >
                  <div className="hidden lg:flex flex-col gap-1 mb-6">
                    <h3 className="font-['Menbere'] font-bold text-[28px] md:text-[32px] text-white capitalize">
                      {member.name}
                    </h3>
                    <p className="font-['Menbere'] font-medium text-[14px] text-[#719cb3] uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>

                  <p className="font-['Menbere'] text-[14px] md:text-[16px] text-[#cfcfcf] md:text-white leading-[1.8] text-left font-medium">
                    {member.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Manual Switch Dots Navigation at Bottom */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 mt-auto pt-6 pb-2 md:pb-0">
              {team.members.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "w-8 bg-[#2991ce]"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image Container (Right Side) */}
          <div className="relative z-0 w-full lg:w-[42%] xl:w-[40%] h-[380px] lg:h-full flex items-end justify-center lg:justify-end overflow-hidden pt-8 lg:pt-0 bg-[#072436] rounded-tr-[120px] rounded-tl-none md:rounded-t-[60px]">
            {/* Background "D" Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0a1e2b] font-['Menbere'] text-[300px] xl:text-[500px] font-black leading-none select-none pointer-events-none">
              D
            </div>

            {/* Animating Person Image & Overlay in Grid Cell */}
            <div className="relative z-10 w-full h-full max-w-[500px] grid grid-cols-1 grid-rows-1 items-end justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="col-start-1 row-start-1 relative z-10 w-full h-full flex items-end justify-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[85%] xl:w-[90%] h-[85%] xl:h-[90%] object-contain object-bottom"
                  />

                  {/* Name tag overlaid on image */}
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center bg-[#072436]/80 backdrop-blur-sm px-4 py-2 rounded-lg lg:bg-transparent lg:backdrop-blur-none lg:p-0">
                    <div className="w-1 h-10 bg-[#2991ce] mr-4"></div>
                    <div className="flex flex-col">
                      <span className="font-['Menbere'] font-bold text-[18px] md:text-[20px] text-white leading-tight">
                        {member.name}
                      </span>
                      <span className="font-['Menbere'] text-[11px] md:text-[12px] text-[#719cb3] uppercase">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
