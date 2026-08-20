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
      <div className="max-w-[1533px] mx-auto px-6 xl:px-24 flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Menbere'] text-[50px] md:text-[96px] font-bold text-white mb-20 text-center capitalize tracking-tight leading-none"
        >
          {specializations.title}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {specializations.items.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col xl:flex-row bg-[#080808] rounded-[32px] overflow-hidden items-center xl:items-stretch min-h-[250px] border border-white/10 group shadow-lg"
            >
              {/* Image */}
              <div className="w-full xl:w-5/12 h-[200px] xl:h-auto relative overflow-hidden shrink-0">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
              </div>

              {/* Text Content */}
              <div className="w-full xl:w-7/12 p-8 xl:p-10 flex flex-col justify-center">
                <h3 className="font-['Menbere'] text-[24px] font-bold text-white mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="font-['Menbere'] text-[#7b7a7a] text-[16px] leading-[1.6] capitalize">
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
