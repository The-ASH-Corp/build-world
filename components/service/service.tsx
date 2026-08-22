"use client";

import React from "react";
import { serviceData as services } from "@/data/serviceData";
import { motion } from "framer-motion";

export default function Service() {
  return (
    <>
      <main className="bg-[#080808] min-h-screen py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] bg-gradient-to-br from-white/[0.015] via-transparent to-white/[0.015] transform -rotate-[15deg]"></div>
          <div className="absolute top-[20%] right-[-10%] w-[100%] h-[100%] bg-gradient-to-tl from-white/[0.01] via-transparent to-transparent transform rotate-[25deg]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-wide"
            >
              Our Speciallizations
            </motion.h1>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className={`flex flex-col ${service.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} 
                items-stretch gap-6 md:gap-10 lg:gap-16 p-4 md:p-5 lg:p-6 
                bg-[#1a1a1a] rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.4)] 
                border border-white/[0.02] hover:border-white/[0.08] transition-all duration-300 relative overflow-hidden group 
                md:min-h-[250px]`}
              >
                {/* Subtle gradient overlay on card */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Image Container */}
                <div className="relative w-full md:w-[28%] lg:w-[28%] flex-shrink-0 h-[220px] sm:h-[280px] md:h-auto md:min-h-[250px]">
                  <div className="absolute inset-0 w-full h-full rounded-[1.5rem] overflow-hidden shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                  </div>
                </div>

                {/* Text Container */}
                <div
                  className={`w-full md:w-[72%] lg:w-[72%] flex flex-col justify-center py-6 px-4 md:px-0
                  ${service.imageLeft ? "md:pr-10 lg:pr-16" : "md:pl-10 lg:pl-16"}
                `}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white mb-3 lg:mb-4 uppercase font-sans tracking-normal">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm sm:text-[15px] md:text-base leading-relaxed font-normal font-sans">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
