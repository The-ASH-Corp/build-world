"use client";

import { motion, Variants } from "framer-motion";
import { homeData } from "@/data/homeData";

export default function WhyChooseUs() {
  const { whyChooseUs } = homeData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-[#050505] py-32 overflow-hidden relative">
      <div className="max-w-[1533px] mx-auto px-6 xl:px-24">
        
        {/* Top Content */}
        <div className="flex flex-col xl:flex-row justify-between items-center gap-12 xl:gap-24 mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-['Menbere'] text-[50px] md:text-[90px] font-bold text-white capitalize leading-[1.1] tracking-tight xl:w-[40%] whitespace-pre-line"
          >
            {whyChooseUs.title}
          </motion.h2>
          
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="xl:w-[60%] border-l border-white/20 pl-6 md:pl-10 py-2"
          >
            <p className="font-['Menbere'] text-[#aaa] text-[15px] md:text-[16px] leading-[1.8]">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32"
        >
          {whyChooseUs.items.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className={`flex flex-col gap-3 py-10 px-4 md:px-6 lg:px-8 border-white/10 ${index < 5 ? 'border-b' : ''} ${index < 4 ? 'md:border-b' : 'md:border-b-0'} ${index < 3 ? 'lg:border-b' : 'lg:border-b-0'} ${index % 2 === 0 ? 'md:border-r' : 'md:border-r-0'} ${index % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'}`}
            >
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#2a8ed2] shrink-0">
                  <path d="M23 11.99l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 11.99l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 11.99zm-12.53 4.28l-3.81-3.81 1.42-1.42 2.39 2.39 6.03-6.03 1.42 1.42-7.45 7.45z"/>
                </svg>
                <h3 className="font-['Menbere'] font-bold text-[#2a8ed2] text-[18px] md:text-[20px] capitalize">
                  {item.title}
                </h3>
              </div>
              <p className="font-['Menbere'] text-[#999] text-[14px] md:text-[15px] leading-[1.6] capitalize mt-1">
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
              <div className="absolute top-6 left-6 right-6 flex items-center gap-3">
                 <div className="w-10 h-10 shrink-0 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img src={video.img} className="w-full h-full object-cover opacity-80" alt="Channel" />
                 </div>
                 <div className="flex flex-col">
                   <p className="font-['Menbere'] text-white font-bold text-[15px] md:text-[18px] leading-tight line-clamp-1 drop-shadow-md">
                     {video.title}
                   </p>
                   <p className="font-['Menbere'] text-[#cfcfcf] text-[13px]">
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
