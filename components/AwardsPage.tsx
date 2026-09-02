"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { awardsData } from "@/data/awardsData";
import Image from "next/image";

export default function AwardsPage() {
  const containerRef = useRef(null);


  const { scrollY } = useScroll();

  const xLeft = useTransform(scrollY, [0, 1000], ["0%", "-50%"]);
  const xRight = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="w-full pt-32 pb-24 overflow-hidden relative min-h-screen bg-[#06070a]">
      <div className="max-w-[1533px] mx-auto px-6 xl:px-24 flex flex-col items-center">
        
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-['Menbere'] text-[36px] md:text-[60px] xl:text-[85px] font-bold text-white mb-16 md:mb-24 leading-[1.1] capitalize tracking-tight text-center"
        >
          {awardsData.title}
        </motion.h1>

        {/* Certificates Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24 md:mb-40 max-w-4xl w-full"
        >
          {awardsData.certificates.map((cert, index) => (
            <motion.div 
              key={index} 
              style={{ x: index === 0 ? xLeft : xRight }}
              className="w-full bg-white p-2 md:p-4 rounded-xl shadow-2xl flex items-center justify-center aspect-[4/5] overflow-hidden"
            >
              <img src={cert} alt={`Certificate ${index + 1}`} className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </motion.div>

        {/* Awards List */}
        <div className="w-full flex flex-col gap-10 md:gap-16">
          {awardsData.awards.map((award, index) => (
            <motion.div 
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full flex flex-col md:flex-row bg-[#0d0e12] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Image Side */}
              <div className="w-full md:w-[55%] lg:w-[60%] aspect-video md:aspect-auto relative md:min-h-[400px]">
                <Image 
                  src={award.image} 
                  alt={award.title} 
                  unoptimized
                  width={500}
                  height={500}
                  className="w-full h-full object-fit absolute inset-0"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-[45%] lg:w-[40%] p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex gap-3 md:gap-4 items-start">
                  {/* Blue bar */}
                  <div className="w-1.5 h-4 md:h-5 bg-[#2991ce] mt-1.5 md:mt-1 shrink-0"></div>
                  <h3 className="font-['Menbere'] text-[18px] md:text-[20px] lg:text-[22px] font-bold text-white leading-snug">
                    {award.title}
                  </h3>
                </div>
                
                <p className="font-['Menbere'] text-[14px] md:text-[16px] text-[#b0b0b0] leading-[1.8] mt-8 md:mt-16 xl:mt-24 text-left">
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
