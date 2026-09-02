import React from "react";
import { motion, Variants } from "framer-motion";
import { aboutData } from "@/data/aboutData";
import Image from "next/image";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ApproachSection() {
  const { aboutPage } = aboutData;
  return (
    <section className="w-full flex flex-col">
      {/* Images Row */}
      <div className="w-full overflow-hidden bg-[#111318] py-10 flex">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...aboutPage.approach.images, ...aboutPage.approach.images].map((imgSrc, idx) => (
            <div key={idx} className="pr-3">
              <div className="relative w-32 h-20 md:w-56 md:h-36 flex-shrink-0 overflow-hidden rounded-[50px] shadow-lg">
                <Image
                  src={imgSrc}
                  alt={`Approach ${idx}`}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  priority={true}
                  
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Blue Banner */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full py-10 md:py-12 px-6 xl:px-24 overflow-hidden bg-[#111318]"
      >
        {/* Animated Blue Background from Bottom Right */}
        <motion.div
          className="absolute inset-0 bg-[#3797ca]"
          variants={{
            hidden: { clipPath: "circle(0% at 100% 100%)" },
            visible: { 
              clipPath: "circle(150% at 100% 100%)",
              transition: { duration: 1.2, ease: "easeInOut" }
            }
          }}
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.4, duration: 0.8, ease: "easeOut" }
            }
          }}
          className="relative z-10 max-w-[1533px] mx-auto flex flex-col"
        >
          <h2 className="font-['Menbere'] text-white text-[32px] md:text-[50px] xl:text-[70px] leading-[1.2] capitalize tracking-tight font-bold mb-8 md:mb-10 max-w-[300px] md:max-w-full">
            {aboutPage.approach.title}
          </h2>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.6 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {aboutPage.approach.items.map((item, idx) => (
              <motion.div
                variants={itemVariants}
                key={idx}
                className="flex flex-col border-l-[4px] border-white pl-4 md:pl-5 py-0 md:py-1"
              >
                <h3 className="font-['Menbere'] text-[18px] md:text-[24px] font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-['Menbere'] text-white/90 text-[12px] md:text-[15px] whitespace-pre-line leading-[1.6]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
