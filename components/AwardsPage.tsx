"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { awardsData } from "@/data/awardsData";
import SafeImage from "@/components/SafeImage";

export default function AwardsPage() {
  const containerRef = useRef(null);


  const { scrollY } = useScroll();

  const xLeft = useTransform(scrollY, [0, 1000], ["0%", "-50%"]);
  const xRight = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="w-full pt-32 pb-24 overflow-hidden relative min-h-screen bg-[#06070a]">
      <div className="w-full px-6 md:px-12 xl:px-24 2xl:px-[8%] flex flex-col items-center">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-['Menbere'] text-[36px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[85px] font-bold text-white mb-12 sm:mb-16 md:mb-20 lg:mb-24 leading-[1.1] capitalize tracking-tight text-center"
        >
          {awardsData.title}
        </motion.h1>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24 lg:mb-36 max-w-4xl w-full"
        >
          {awardsData.certificates.map((cert, index) => (
            <motion.div
              key={index}
              style={{ x: index === 0 ? xLeft : xRight }}
              className="w-full bg-white p-2 md:p-4 rounded-xl shadow-2xl flex items-center justify-center aspect-[4/5] overflow-hidden relative"
            >
              <SafeImage
                src={cert}
                alt={`Certificate ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-contain p-2 md:p-4"
                quality={85}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Awards List */}
        <div className="w-full flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {awardsData.awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full flex flex-col lg:flex-row bg-[#0d0e12] rounded-[24px] md:rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Image Side */}
              <div className="w-full lg:w-[55%] xl:w-[60%] aspect-video relative bg-[#1a1d24] self-stretch">
                <SafeImage
                  src={award.image}
                  alt={award.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="w-full h-full object-cover absolute inset-0"
                  priority={index < 2}
                  quality={85}
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-[45%] xl:w-[40%] p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
                <div className="flex gap-3 sm:gap-4 items-start">
                  {/* Blue bar */}
                  <div className="w-1.5 h-4 sm:h-5 bg-[#2991ce] mt-1 shrink-0"></div>
                  <h3 className="font-['Menbere'] text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-white leading-snug">
                    {award.title}
                  </h3>
                </div>

                <p className="font-['Menbere'] text-[14px] sm:text-[15px] lg:text-[16px] text-[#b0b0b0] leading-[1.8] mt-6 sm:mt-8 lg:mt-12 xl:mt-16 text-left">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
