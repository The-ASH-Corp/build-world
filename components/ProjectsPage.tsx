"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";

export default function ProjectsPage() {
  const { projectsPage } = projectsData;
  const [activeTab, setActiveTab] = useState(projectsPage.tabs[0]);

  const filteredWorks = projectsPage.works.filter(work => work.category === activeTab);

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
    <div className="w-full pt-32 pb-24 overflow-hidden relative min-h-screen">
      <div className="max-w-383.25 mx-auto px-6 xl:px-24">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Menbere'] text-[36px] md:text-[96px] font-bold text-[#e0e0e0] capitalize leading-none tracking-tight mb-8"
          >
            Our Projects
          </motion.h1>
          
          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {projectsPage.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full border transition-all flex items-center ${
                  activeTab === tab 
                    ? "bg-[#e0e0e0] border-[#e0e0e0] text-[#050505]" 
                    : "bg-transparent border-[#333] text-[#cfcfcf] hover:border-[#e0e0e0] hover:text-white"
                } font-medium text-[14px] md:text-[16px]`}
              >
                {activeTab === tab && <div className="w-0.75 h-3.5 bg-[#2991ce] mr-2"></div>}
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
          >
            {filteredWorks.map((work, idx) => (
              <Link key={idx} href={`/projects/${work.id}`} className="block">
                <motion.div 
                  variants={itemVariants}
                  className="relative w-full h-65 md:h-112.5 rounded-3xl md:rounded-[40px] overflow-hidden group cursor-pointer border border-[#222]"
                >
                  {/* Background Image */}
                  <div className="absolute -inset-5">
                    <Image
                      src={work.bg}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      priority={idx < 2}
                      quality={75}
                    />
                  </div>
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 md:via-black/10 to-black/30 md:to-black/10 transition-opacity duration-300 group-hover:opacity-80" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <div className="inline-flex items-center justify-center border border-white/20 bg-black/40 backdrop-blur-md rounded-full px-4 py-1.5 md:px-5 md:py-2 text-white text-[10px] md:text-[12px] overflow-hidden relative shadow-lg">
                      <span className="relative z-10 font-medium">{work.status}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex justify-between items-end">
                    <div className="flex items-center gap-3">
                      <div className="w-0.75 md:w-1 h-7.5 md:h-10 bg-[#2991ce]"></div>
                      <div>
                        <h3 className="font-['Menbere'] text-[#cfcfcf] text-[16px] md:text-[20px] capitalize mb-0 md:mb-1 font-medium leading-tight">
                          {work.title}
                        </h3>
                        <p className="font-['Menbere'] text-white text-[14px] md:text-[24px] capitalize font-bold leading-tight mt-1">
                          {work.client}
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow Button */}
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#e0e0e0] flex items-center justify-center transform group-hover:bg-[#2991ce] transition-colors duration-300 shadow-lg">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2991ce" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
