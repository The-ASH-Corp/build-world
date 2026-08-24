import React from "react";
import { motion, Variants } from "framer-motion";
import { aboutData } from "@/data/aboutData";
import { FaStar, FaRegBuilding, FaGlobe, FaAward } from "react-icons/fa";

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

export default function LeadershipSection() {
  const { aboutPage } = aboutData;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "star":
        return <FaStar className="w-8 h-8 text-[#3090c2]" />;
      case "building":
        return <FaRegBuilding className="w-8 h-8 text-[#3090c2]" />;
      case "globe":
        return <FaGlobe className="w-8 h-8 text-[#3090c2]" />;
      case "certificate":
        return <FaAward className="w-8 h-8 text-[#3090c2]" />;
      default:
        return null;
    }
  };

  return (
    <section className="w-full flex flex-col bg-[#111318] pb-32">
      {/* Stats Bar */}
      <div className="w-full bg-[#181d26] py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1533px] mx-auto px-10 md:px-6 xl:px-24 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {aboutPage.stats.map((stat, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="flex items-center gap-6 md:gap-4 justify-start"
            >
              {renderIcon(stat.icon)}
              <div className="flex flex-col">
                <span className="font-['Menbere'] text-[28px] md:text-[22px] font-bold text-white leading-none mb-1">
                  {stat.value}
                </span>
                <span className="font-['Menbere'] text-[#a5afc0] text-[12px] leading-tight uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Leadership Content */}
      <div className="max-w-[1533px] mx-auto w-full md:px-6 xl:px-24 mt-16 md:mt-20 flex flex-col items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="font-['Menbere'] text-[#8a8a8a] text-[36px] md:text-[50px] xl:text-[70px] leading-[1.1] capitalize tracking-tight font-bold mb-10 md:mb-16 text-center px-6 md:px-0">
            {aboutPage.leadership.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[1250px] relative flex flex-col md:flex-row items-center justify-center mt-0 md:mt-6 bg-[#12587e] md:bg-transparent"
        >
          {/* U-Shaped Image Container Mobile */}
          <div className="flex md:hidden w-full h-[380px] sm:h-[450px] bg-[#161c21] rounded-b-[50%] overflow-hidden items-end justify-center z-20">
            <img
              src={aboutPage.leadership.image}
              alt={aboutPage.leadership.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Blue Background Container */}
          <div className="w-full h-auto md:h-[460px] md:bg-[#12587e] flex flex-col justify-center pt-10 pb-16 px-6 sm:px-10 md:p-12 lg:pl-16 lg:pr-[450px] relative z-10 md:z-auto">
            <h3 className="font-['Menbere'] text-[20px] md:text-[24px] lg:text-[28px] font-bold text-white mb-1">
              {aboutPage.leadership.name}
            </h3>
            <p className="font-['Menbere'] text-[#7bb0ce] text-[10px] md:text-[12px] lg:text-[14px] font-bold tracking-widest uppercase mb-6 md:mb-8">
              {aboutPage.leadership.role}
            </p>
            <p className="font-['Menbere'] text-white/90 text-[12px] md:text-[13px] leading-[1.8] text-left max-w-[650px]">
              {aboutPage.leadership.description}
            </p>

            {/* Paginator Dots */}
            <div className="absolute bottom-6 md:bottom-8 left-6 sm:left-10 md:left-12 lg:left-16 flex gap-2">
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-white rounded-full"></div>
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-white/30 rounded-full"></div>
            </div>
          </div>

          {/* U-Shaped Image Container Desktop */}
          <div className="hidden md:flex absolute right-10 lg:right-24 top-[-60px] w-[350px] h-[500px] bg-[#161c21] rounded-b-[175px] overflow-hidden shadow-2xl items-end justify-center">
            <img
              src={aboutPage.leadership.image}
              alt={aboutPage.leadership.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
