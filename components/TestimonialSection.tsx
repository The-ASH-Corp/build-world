"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useState } from "react";

export default function TestimonialSection() {
  const { testimonials } = siteData;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-[#064063] py-32 overflow-hidden">
      
      <div className="max-w-[1533px] mx-auto px-6 xl:px-24 relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Menbere'] text-[50px] md:text-[96px] font-bold text-white mb-24 text-center capitalize tracking-tight"
        >
          {testimonials.title}
        </motion.h2>

        <div className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-16">
          
          {/* Avatar Images overlapping group (Left Side in Desktop) */}
          <div className="relative w-full xl:w-5/12 h-[300px] md:h-[400px] flex justify-center items-center">
             {/* Instead of the standard row of small avatars, Framer has them grouped/scattered, but we will make a clean rotating stack or grid */}
             <div className="relative w-full max-w-[500px] h-full">
                {testimonials.clients.map((client, index) => {
                  // A spread-out overlapping arrangement
                  const offsets = [
                    { left: "10%", top: "10%", size: "w-32 h-32 md:w-48 md:h-48" },
                    { left: "50%", top: "0%", size: "w-24 h-24 md:w-32 md:h-32" },
                    { left: "30%", top: "50%", size: "w-40 h-40 md:w-56 md:h-56" },
                  ];
                  const pos = offsets[index % offsets.length];
                  
                  return (
                    <button 
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`absolute rounded-2xl overflow-hidden transition-all duration-500 shadow-xl border-2 ${
                        activeIndex === index 
                          ? `z-30 scale-110 border-[#2991ce] shadow-[#2991ce]/30` 
                          : `z-10 border-transparent opacity-60 hover:opacity-100 hover:z-20 hover:scale-105`
                      } ${pos.size}`}
                      style={{ left: pos.left, top: pos.top }}
                    >
                      <img 
                        src={client.avatar} 
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
             </div>
          </div>

          {/* Testimonial Content (Right Side in Desktop) */}
          <div className="w-full xl:w-7/12 flex flex-col items-center xl:items-start justify-center text-center xl:text-left min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="max-w-2xl"
              >
                <div className="mb-8">
                   <span className="font-['Menbere'] text-[#2991ce] text-[60px] leading-none block h-10 overflow-visible opacity-50">“</span>
                   <p className="font-['Menbere'] text-[#d0d0d0] text-[18px] md:text-[20px] leading-[1.8]">
                     {testimonials.clients[activeIndex].text}
                   </p>
                </div>
                
                <h3 className="font-['Menbere'] font-bold text-[24px] text-white capitalize mb-1">
                  {testimonials.clients[activeIndex].name}
                </h3>
                <p className="font-['Menbere'] text-[16px] text-[#2991ce] uppercase font-bold tracking-widest">
                  {testimonials.clients[activeIndex].role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
