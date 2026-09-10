"use client";

import { motion, Variants } from "framer-motion";
import { homeData } from "@/data/homeData";

export default function AboutSection() {
  const { about } = homeData;

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

  return (
    <section className="relative w-full bg-[#050505] py-24 xl:py-32 overflow-hidden">
      <div className="relative z-10 max-w-[1533px] mx-auto px-6 xl:px-24">
        {/* Massive Top Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-20 text-left"
        >
          <h2 className="font-['Menbere'] text-[#4a4a4a] text-[36px] md:text-[60px] xl:text-[85px] leading-[1.1] capitalize tracking-tight font-bold">
            {about.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col xl:flex-row justify-between items-start gap-16 xl:gap-24"
        >
          {/* Left Side: Text */}
          <div className="w-full xl:w-5/12 flex flex-col justify-start gap-12 pt-4">
            <div className="flex flex-col gap-8 md:gap-10 w-full max-w-xl text-left">
              <motion.div variants={itemVariants}>
                <p className="font-['Menbere'] text-[14px] md:text-[16px] text-[#b0b0b0] leading-[1.8] text-left md:text-justify">
                  {about.description1}
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="font-['Menbere'] text-[14px] md:text-[16px] text-[#b0b0b0] leading-[1.8] text-left md:text-justify">
                  {about.description2}
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="font-['Menbere'] text-[14px] md:text-[16px] text-[#b0b0b0] leading-[1.8] text-left md:text-justify">
                  {about.description3}
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="font-['Menbere'] text-[14px] md:text-[16px] text-[#b0b0b0] leading-[1.8] text-left md:text-justify">
                  {about.description4}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Image & Buttons */}
          <div className="w-full xl:w-7/12 flex flex-col gap-6 relative mt-8 md:mt-16 xl:mt-32">
            {/* Top Image */}
            <motion.div
              variants={itemVariants}
              className="hidden md:block w-full h-[250px] rounded-[32px] relative shadow-2xl bg-white"
            >
              {/* Clipping Wrapper: Tall enough to not clip the top, but clips sides and bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[320px] overflow-hidden rounded-b-[32px] pointer-events-none">
                <img
                  src={about.images[0]}
                  alt="About Image 1"
                  className="absolute bottom-0 left-0 w-full h-auto object-cover object-bottom scale-[1] origin-bottom rounded-b-[32px]"
                />
              </div>
            </motion.div>

            {/* Bottom Buttons Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full"
            >
              {/* More About Us Button */}
              <a
                href={about.button1.link}
                className="group relative flex flex-col items-start justify-center h-[140px] md:h-[200px] bg-[#3a7ca5] rounded-[32px] p-6 md:p-10 hover:bg-[#2f6789] transition-all overflow-hidden"
              >
                {/* Arrow Top Right */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
                <span className="font-['Menbere'] font-bold text-[22px] md:text-[28px] lg:text-[36px] text-white leading-[1.2] capitalize whitespace-pre-line relative z-10 mt-auto">
                  {about.button1.text}
                </span>
              </a>

              {/* Download Company Profile Button */}
              <a
                href={about.button2.link}
                className="group relative flex flex-col items-start justify-center h-[140px] md:h-[200px] bg-[#0a0a0a] border border-white/10 rounded-[32px] p-6 md:p-10 hover:bg-[#111] transition-all overflow-hidden"
              >
                {/* Arrow Top Right (pointing down in design) */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transform group-hover:translate-y-1 transition-transform">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </div>
                <span className="font-['Menbere'] font-bold text-[22px] md:text-[28px] lg:text-[36px] text-white leading-[1.2] capitalize whitespace-pre-line relative z-10 mt-auto">
                  {about.button2.text}
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
