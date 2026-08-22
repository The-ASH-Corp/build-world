"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function SpecializationSection() {
  const { specializations } = siteData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#050505] py-32 overflow-hidden relative">
      
      {/* Background Thick Swoosh */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg viewBox="0 0 1440 1000" className="w-full h-full" preserveAspectRatio="none">
          <path fill="none" stroke="#0c0c0c" strokeWidth="300" strokeLinecap="round" d="M1540,-100 C1000,200 900,800 -100,900"></path>
        </svg>
      </div>

      <div className="max-w-[1533px] mx-auto px-6 xl:px-24 flex flex-col items-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Menbere'] text-[36px] md:text-[96px] font-bold text-white mb-10 md:mb-20 text-left md:text-center w-full capitalize tracking-tight leading-none"
        >
          {specializations.title}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col gap-6 max-w-[1200px] mx-auto relative z-10"
        >
          {specializations.items.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-[#111] rounded-[32px] overflow-hidden items-stretch min-h-[240px] w-full p-4 md:p-6 lg:p-4 gap-4 md:gap-6 lg:gap-12 group border border-white/5 shadow-2xl`}
            >
              {/* Image */}
              <div className="w-full lg:w-[400px] shrink-0 h-[200px] md:h-[240px] relative overflow-hidden rounded-[24px]">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
              </div>

              {/* Text Content */}
              <div className="flex-1 py-4 lg:py-10 px-2 md:px-4 lg:px-8 flex flex-col justify-center">
                <h3 className="font-['Menbere'] text-[18px] md:text-[20px] lg:text-[22px] font-bold text-white mb-2 md:mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="font-['Menbere'] text-[#aaa] text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6] md:leading-[1.8] capitalize max-w-[700px]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center w-full"
        >
          <a 
            href="#"
            className="group flex items-center justify-between w-full max-w-[280px] h-[60px] border border-white rounded-[32px] px-8 hover:bg-white/10 transition-all"
          >
            <span className="font-['Menbere'] font-bold text-[14px] text-white uppercase tracking-wider">
              {specializations.buttonText}
            </span>
            <div className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
