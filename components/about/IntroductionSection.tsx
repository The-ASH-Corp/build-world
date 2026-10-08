import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "@/data/aboutData";

export default function IntroductionSection() {
  const { aboutPage } = aboutData;
  return (
    <section className="py-16 md:py-24 px-6 md:px-16 xl:px-24 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h1 className="font-['Menbere'] text-white text-[48px] md:text-[60px] xl:text-[85px] leading-[1.1] capitalize tracking-tight font-bold mb-8 md:mb-10">
          About us
        </h1>
        <p className="font-['Menbere'] text-[13px] md:text-[16px] text-[#b0b0b0] leading-[2] md:leading-[1.8] max-w-[1000px] text-justify ">
          {aboutPage.introText}
        </p>
      </motion.div>
    </section>
  );
}
