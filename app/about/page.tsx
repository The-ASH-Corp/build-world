"use client";

import React from "react";
import { aboutData } from "@/data/aboutData";
import { FaStar, FaRegBuilding, FaGlobe, FaAward } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function AboutPage() {
  const { aboutPage } = aboutData;

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
    <div className="flex flex-col w-full bg-[#111318] text-white overflow-hidden">
      {/* 1. Introduction Section */}
      <section className="py-24 px-6 md:px-16 xl:px-24 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="font-['Menbere'] text-white text-[36px] md:text-[60px] xl:text-[85px] leading-[1.1] capitalize tracking-tight font-bold mb-10">
            About us
          </h1>
          <p className="font-['Menbere'] text-[14px] md:text-[16px] text-[#b0b0b0] leading-[1.8] max-w-[1000px] text-center">
            {aboutPage.introText}
          </p>
        </motion.div>
      </section>

      {/* 2. Legacy Section */}
      <section className="relative w-full max-w-[1533px] mx-auto py-10 px-6 xl:px-24 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full relative rounded-[32px] overflow-hidden shadow-2xl min-h-[500px] md:min-h-[700px] flex flex-col justify-end"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={aboutPage.legacy.image}
              alt="Legacy"
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay for Text Readability at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent h-[75%] top-auto"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 w-full flex flex-col md:flex-row items-end justify-between p-10 md:p-12 lg:p-16 gap-10">
            {/* Left Side: Title */}
            <div className="w-full md:w-5/12">
              <h2 className="font-['Menbere'] text-[#3298cc] text-[36px] md:text-[60px] xl:text-[80px] leading-[1.1] capitalize tracking-tight font-bold whitespace-pre-line pb-2">
                {aboutPage.legacy.title}
              </h2>
            </div>

            {/* Right Side: Text Overlay */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-7/12 flex flex-col justify-end text-white text-[14px] md:text-[16px] leading-[1.8] space-y-6 font-['Menbere'] max-w-[700px] md:pl-10"
            >
              {aboutPage.legacy.paragraphs.map((para, idx) => (
                <motion.p variants={itemVariants} key={idx}>
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. Approach & Images Section */}
      <section className="w-full flex flex-col">
        {/* Images Row */}
        <div className="w-full overflow-hidden bg-[#111318] py-10 flex">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...aboutPage.approach.images, ...aboutPage.approach.images].map((imgSrc, idx) => (
              <div key={idx} className="pr-3">
                <div className="relative w-32 h-20 md:w-56 md:h-36 flex-shrink-0 overflow-hidden rounded-[50px] shadow-lg">
                  <img
                    src={imgSrc}
                    alt={`Approach ${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Blue Banner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full py-12 px-6 xl:px-24 overflow-hidden bg-[#111318]"
        >
          {/* Animated Blue Background from Bottom Right */}
          <motion.div
            className="absolute inset-0 bg-[#3797ca]"
            variants={{
              hidden: { clipPath: "circle(0% at 100% 100%)" },
              visible: { 
                clipPath: "circle(150% at 100% 100%)",
                transition: { duration: 1.2, ease: "easeInOut" }
              }
            }}
          />

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.4, duration: 0.8, ease: "easeOut" }
              }
            }}
            className="relative z-10 max-w-[1533px] mx-auto flex flex-col"
          >
            <h2 className="font-['Menbere'] text-white text-[36px] md:text-[50px] xl:text-[70px] leading-[1.1] capitalize tracking-tight font-bold mb-10">
              {aboutPage.approach.title}
            </h2>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.6 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            >
              {aboutPage.approach.items.map((item, idx) => (
                <motion.div
                  variants={itemVariants}
                  key={idx}
                  className="flex flex-col border-l-[3px] border-white pl-5 py-1"
                >
                  <h3 className="font-['Menbere'] text-[20px] md:text-[24px] font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Menbere'] text-white/90 text-[13px] md:text-[15px] whitespace-pre-line leading-[1.6]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. Leadership Section */}
      <section className="w-full flex flex-col bg-[#111318] pb-32">
        {/* Stats Bar */}
        <div className="w-full bg-[#181d26] py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-[1533px] mx-auto px-6 xl:px-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {aboutPage.stats.map((stat, idx) => (
              <motion.div
                variants={itemVariants}
                key={idx}
                className="flex items-center gap-4 justify-center md:justify-start"
              >
                {renderIcon(stat.icon)}
                <div className="flex flex-col">
                  <span className="font-['Menbere'] text-[22px] font-bold text-white leading-none mb-1">
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
        <div className="max-w-[1533px] mx-auto w-full px-6 xl:px-24 mt-20 flex flex-col items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-['Menbere'] text-[#8a8a8a] text-[36px] md:text-[50px] xl:text-[70px] leading-[1.1] capitalize tracking-tight font-bold mb-16">
              {aboutPage.leadership.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[1250px] relative flex items-center justify-center mt-6"
          >
            {/* Blue Background */}
            <div className="w-full h-auto md:h-[460px] bg-[#12587e] flex flex-col justify-center p-10 md:p-12 lg:pl-16 lg:pr-[450px] relative">
              <h3 className="font-['Menbere'] text-[24px] md:text-[28px] font-bold text-white mb-1">
                {aboutPage.leadership.name}
              </h3>
              <p className="font-['Menbere'] text-[#7bb0ce] text-[12px] md:text-[14px] font-bold tracking-widest uppercase mb-8">
                {aboutPage.leadership.role}
              </p>
              <p className="font-['Menbere'] text-white/90 text-[12px] md:text-[13px] leading-[1.8] text-left max-w-[650px]">
                {aboutPage.leadership.description}
              </p>

              {/* Paginator Dots */}
              <div className="absolute bottom-8 left-10 lg:left-16 flex gap-2">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
              </div>
            </div>

            {/* U-Shaped Image Container */}
            <div className="hidden md:flex absolute right-10 lg:right-24 top-[-60px] w-[350px] h-[500px] bg-[#161c21] rounded-b-[175px] overflow-hidden shadow-2xl items-end justify-center">
              <img
                src={aboutPage.leadership.image}
                alt={aboutPage.leadership.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
