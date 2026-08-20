"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function WhyChooseUs() {
  const { whyChooseUs } = siteData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#050505] py-32 overflow-hidden relative">
      <div className="max-w-[1533px] mx-auto px-6 xl:px-24">
        
        {/* Top Content */}
        <div className="flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-24 mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-['Menbere'] text-[50px] md:text-[85px] font-bold text-white capitalize leading-[1.1] tracking-tight xl:w-1/2 whitespace-pre-line"
          >
            {whyChooseUs.title}
          </motion.h2>
          
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="xl:w-1/2"
          >
            <p className="font-['Menbere'] text-[#d0d0d0] text-[16px] md:text-[18px] leading-[1.8]">
              {whyChooseUs.description}
            </p>
          </motion.div>
        </div>

        {/* Checkmark Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-32"
        >
          {whyChooseUs.items.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="text-white w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="font-['Menbere'] font-bold text-white text-[20px] md:text-[24px] capitalize">
                  {item.title}
                </h3>
              </div>
              <p className="font-['Menbere'] text-[#7b7a7a] text-[16px] leading-[1.6] capitalize pl-12">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {whyChooseUs.videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative h-[300px] md:h-[450px] rounded-[32px] overflow-hidden group cursor-pointer border border-[#222]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${video.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Play Button Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-[#ff0000] w-20 h-14 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
                 </div>
              </div>

              {/* Top Text */}
              <div className="absolute top-8 left-8 right-8 flex items-center gap-4">
                 <div className="w-12 h-12 shrink-0 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img src={video.img} className="w-full h-full object-cover opacity-80" alt="Channel" />
                 </div>
                 <div className="flex flex-col">
                   <p className="font-['Menbere'] text-white font-bold text-[16px] md:text-[20px] leading-tight line-clamp-1 drop-shadow-md">
                     {video.title}
                   </p>
                   <p className="font-['Menbere'] text-[#cfcfcf] text-[14px]">
                     {video.channel}
                   </p>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
