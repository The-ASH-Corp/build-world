"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[#06070a]" />
      
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[15vw] font-black text-white leading-none whitespace-nowrap mix-blend-overlay tracking-tighter"
        >
          {title.toUpperCase()}
        </motion.h1>
      </div>

      <div className="relative z-10 text-center mt-20">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
         >
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
           <div className="h-1 w-24 bg-[#2a9df4] mx-auto rounded-full"></div>
         </motion.div>
      </div>
    </section>
  );
}
