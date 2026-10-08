"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { aboutData } from "@/data/aboutData";
import { FaStar, FaRegBuilding, FaGlobe, FaAward } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function LeadershipSection() {
  const { aboutPage } = aboutData;
  const members = aboutPage.leadership.members;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || members.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % members.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, members.length]);

  const member = members[currentIndex];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "star":
        return <FaStar className="w-8 h-8 text-[#3090c2]" />;
      case "building":
        return <FaRegBuilding className="w-8 h-8 text-[#3090c2]" />;
      case "globe":
        return <FaGlobe className="w-8 h-8 text-[#3090c2]" />;
      case "certificate":
        return <FaAward className="w-8 h-8 text-[#3090c2]" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full flex flex-col bg-[#111318] pb-32">
      {/* Stats Bar */}
      <div className="w-full bg-[#181d26] py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full px-10 md:px-6 xl:px-24 2xl:px-[8%] grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {aboutPage.stats.map((stat, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="flex items-center gap-6 md:gap-4 justify-start"
            >
              {renderIcon(stat.icon)}
              <div className="flex flex-col">
                <span className="font-['Menbere'] text-[28px] md:text-[22px] font-bold text-white leading-none mb-1">
                  {stat.value}
                </span>
                <span className="font-['Menbere'] text-[#a5afc0] text-[12px] leading-tight uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Leadership Content */}
      <div className="w-full md:px-6 xl:px-24 2xl:px-[8%] mt-16 md:mt-20 flex flex-col items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="font-['Menbere'] text-[#8a8a8a] text-[36px] md:text-[50px] xl:text-[70px] leading-[1.1] capitalize tracking-tight font-bold mb-10 md:mb-16 text-center px-6 md:px-0">
            {aboutPage.leadership.title}
          </h2>
        </motion.div>

        {/* Outer Card Shell with Fixed Height */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[1250px] relative flex flex-col md:flex-row items-center justify-center mt-0 md:mt-6 bg-[#12587e] md:bg-transparent overflow-hidden md:overflow-visible"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mobile Image Container */}
          <div className="flex md:hidden w-full h-[380px] sm:h-[450px] bg-[#161c21] rounded-b-[50%] overflow-hidden items-end justify-center z-20 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </AnimatePresence>
          </div>

          {/* Blue Background Content Box (Fixed Height) */}
          <div className="w-full h-auto md:h-[480px] lg:h-[460px] md:bg-[#12587e] flex flex-col justify-between pt-10 pb-12 px-6 sm:px-10 md:p-12 lg:pl-16 lg:pr-[450px] relative z-10 md:z-auto">
            
            {/* Animating Text Content Grid Cell */}
            <div className="grid grid-cols-1 grid-rows-1 min-h-[240px] md:min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="col-start-1 row-start-1 flex flex-col justify-start"
                >
                  <h3 className="font-['Menbere'] text-[20px] md:text-[24px] lg:text-[28px] font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="font-['Menbere'] text-[#7bb0ce] text-[10px] md:text-[12px] lg:text-[14px] font-bold tracking-widest uppercase mb-6 md:mb-8">
                    {member.role}
                  </p>
                  <p className="font-['Menbere'] text-white/90 text-[12px] md:text-[13px] leading-[1.8] max-w-[650px] text-justify">
                    {member.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Manual Paginator Dots */}
            <div className="flex items-center gap-2.5 pt-6 md:pt-0">
              {members.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop U-Shaped Image Container */}
          <div className="hidden md:flex absolute right-10 lg:right-24 top-[-60px] w-[350px] h-[500px] bg-[#161c21] rounded-b-[175px] overflow-hidden shadow-2xl items-end justify-center z-20">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top translate-y-15"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
