"use client";

import { motion, AnimatePresence } from "framer-motion";
import { homeData } from "@/data/homeData";
import { useState, useEffect } from "react";

export default function TestimonialSection() {
  const { testimonials } = homeData;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.clients.length]);

  return (
    <section className="relative w-full bg-[#050505] py-24 xl:py-32 overflow-hidden">
      {/* Background Thick Swoosh */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 800"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="#0c0c0c"
            strokeWidth="200"
            strokeLinecap="round"
            d="M-100,-100 C400,500 500,100 850,400 C1200,900 1300,500 1540,900"
          ></path>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-16 relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.div className="w-full text-left md:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Menbere'] text-[36px] md:text-[60px] xl:text-[85px] font-bold text-[#e0e0e0] mb-12 md:mb-20 capitalize tracking-tight"
          >
            {testimonials.title}
          </motion.h2>
        </motion.div>

        {/* Separator & Avatars Container */}
        <div className="w-full max-w-[1200px] flex justify-center items-center mb-16">
          {/* Left Line Fading Out */}
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#333]"></div>

          {/* Avatars Row exactly between the lines */}
          <div className="flex shrink-0 relative z-10 px-2 md:px-4 flex-wrap justify-center gap-2 md:gap-4">
            {testimonials.clients.map((client, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={client.name}
                className={`w-12 h-12 md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center transition-all duration-300 relative bg-[#050505] border-[2px] ${
                  activeIndex === index
                    ? "scale-110 opacity-100 border-white z-20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "scale-100 opacity-60 hover:opacity-100 border-transparent z-10"
                }`}
              >
                <div className="w-[92%] h-[92%] rounded-full overflow-hidden">
                  <img
                    src={client.avatar}
                    alt={client.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${activeIndex === index ? "" : "grayscale"}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right Line Fading Out */}
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#333]"></div>
        </div>

        {/* Main Testimonial Block */}
        <div className="w-full max-w-[1200px] flex items-center justify-between gap-8 relative min-h-[420px] sm:min-h-[340px] md:min-h-[300px]">
          {/* Huge Left Quote Icon */}
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden xl:flex text-[#111] mt-12 w-[200px] h-[200px] shrink-0 items-center justify-end font-serif text-[280px] leading-none select-none"
          >
            “
          </motion.div>

          <div className="w-full xl:flex-1 flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-24 relative z-20 min-h-[420px] sm:min-h-[340px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col-reverse xl:flex-row items-center xl:items-center gap-12 w-full max-w-[900px]"
              >
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-start text-left mt-8 md:mt-0 min-h-[220px] md:min-h-[240px]">
                  <h3 className="font-['Menbere'] font-bold text-[20px] md:text-[24px] text-white capitalize mb-1">
                    {testimonials.clients[activeIndex].name}
                  </h3>
                  <p className="font-['Menbere'] text-[12px] md:text-[14px] text-[#777] uppercase font-bold tracking-widest mb-6">
                    {testimonials.clients[activeIndex].role}
                  </p>
                  <p className="font-['Menbere'] text-[#aaa] text-[14px] md:text-[16px] leading-[1.8] text-left max-w-lg mx-0">
                    {testimonials.clients[activeIndex].text}
                  </p>
                </div>

                {/* Round Featured Client Image */}
                <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px] aspect-square shrink-0 group">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/10 bg-[#111] relative z-10">
                    <img
                      src={testimonials.clients[activeIndex].avatar}
                      alt={testimonials.clients[activeIndex].name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Huge Right Quote Icon */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden xl:flex text-[#111] mt-12 w-[200px] h-[200px] shrink-0 items-center justify-start font-serif text-[280px] leading-none select-none"
          >
            ”
          </motion.div>
        </div>
      </div>
    </section>
  );
}
