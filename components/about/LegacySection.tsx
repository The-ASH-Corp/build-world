import React from "react";
import { motion, Variants } from "framer-motion";
import { aboutData } from "@/data/aboutData";

import SafeImage from "@/components/SafeImage";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function LegacySection() {
  const { aboutPage } = aboutData;
  return (
    <section className="relative w-full max-w-[1533px] mx-auto py-6 md:py-10 px-0 md:px-6 xl:px-24 mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative rounded-none md:rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:justify-end bg-black"
      >
        {/* Background Image */}
        <div className="absolute inset-x-0 top-0 md:inset-0 z-0 h-[450px] md:h-auto">
          <SafeImage
            src={aboutPage.legacy.image}
            alt="Legacy"
            fill
            sizes="100vw"
            priority
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for Text Readability at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent h-[75%] top-auto"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between px-6 py-10 md:p-12 lg:p-16 gap-6 md:gap-10 mt-[260px] md:mt-0 md:min-h-[700px]">
          {/* Left Side: Title */}
          <div className="w-full md:w-5/12">
            <h2 className="font-['Menbere'] text-[#3298cc] text-[48px] md:text-[60px] xl:text-[80px] leading-[1.1] capitalize tracking-tight font-bold whitespace-pre-line pb-2">
              {aboutPage.legacy.title}
            </h2>
          </div>

          {/* Right Side: Text Overlay */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-7/12 flex flex-col justify-end text-white text-[13px] md:text-[16px] leading-[1.8] space-y-4 md:space-y-6 font-['Menbere'] max-w-[700px] md:pl-10"
          >
            {aboutPage.legacy.paragraphs.map((para, idx) => (
              <motion.p variants={itemVariants} key={idx}>
                {para}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
