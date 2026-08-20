"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function LatestWorks() {
  const { latestWorks } = siteData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#050505] py-24 overflow-hidden relative">
      <div className="max-w-[1533px] mx-auto px-6 xl:px-24">
        
        {/* Header */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Menbere'] text-[50px] md:text-[96px] font-bold text-white capitalize leading-none tracking-tight"
          >
            {latestWorks.title}
          </motion.h2>
        </div>

        {/* Carousel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto pb-12 gap-8 scrollbar-hide snap-x"
        >
          {latestWorks.works.map((work, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative w-[320px] md:w-[618px] h-[350px] md:h-[400px] rounded-3xl overflow-hidden group snap-center cursor-pointer shrink-0 border border-[#222]"
            >
              {/* Background Image */}
              <div 
                className="absolute -inset-5 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${work.bg})` }}
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10 transition-opacity duration-300 group-hover:opacity-80" />
              
              {/* Status Badge */}
              <div className="absolute top-6 left-6 right-6">
                <div className="inline-flex items-center justify-center border border-[#2991ce] bg-gray-100/10 backdrop-blur-md rounded-full px-5 py-2 text-white font-['Menbere'] text-[12px] capitalize overflow-hidden relative shadow-lg">
                  <span className="relative z-10 font-bold">{work.status}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-end">
                <h3 className="font-['Menbere'] text-[#cfcfcf] text-[20px] md:text-[24px] capitalize mb-1 font-bold">
                  {work.title}
                </h3>
                <p className="font-['Menbere'] text-[#7b7a7a] text-[16px] md:text-[20px] capitalize font-medium">
                  Client : {work.client}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <a 
            href="/projects"
            className="group flex items-center justify-between min-w-[200px] h-[60px] border border-[#333] rounded-[32px] px-8 hover:border-white transition-all"
          >
            <span className="font-['Menbere'] font-bold text-[14px] text-white uppercase tracking-wider mr-4">
              {latestWorks.buttonText}
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
