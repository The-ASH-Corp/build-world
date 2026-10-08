"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { homeData } from "@/data/homeData";

export default function LatestWorks() {
  const { latestWorks } = homeData;
  const [loadedWorks, setLoadedWorks] = useState<Record<number, boolean>>({});

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#050505] pt-2 md:pt-4 lg:pt-6 xl:pt-8 pb-16 md:pb-20 overflow-hidden relative">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[8%]">
        {/* Header */}
        <div className="mb-10 md:mb-16 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-['Menbere'] text-[36px] md:text-[60px] lg:text-[76px] xl:text-[96px] font-bold text-white capitalize leading-none tracking-tight"
          >
            {latestWorks.title}
          </motion.h2>
        </div>

        {/* Carousel / Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:overflow-x-auto pb-12 gap-6 md:gap-8 scrollbar-hide snap-y md:snap-x"
        >
          {latestWorks.works.map((work, idx) => (
            <Link
              key={idx}
              href={`/projects/${work.id}`}
              className="shrink-0 block"
            >
              <motion.div
                variants={itemVariants}
                className="relative w-full md:w-154.5 lg:w-[480px] xl:w-154.5 h-55 md:h-100 rounded-3xl md:rounded-[40px] overflow-hidden group snap-center cursor-pointer border border-[#222]"
              >
                {/* Background Image with Skeleton Animation */}
                <div className="absolute -inset-5 overflow-hidden bg-[#161822]">
                  <div
                    className={`skeleton-shimmer z-10 pointer-events-none transition-opacity duration-500 ${
                      loadedWorks[idx] ? "opacity-0" : "opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                  <img
                    ref={(el) => {
                      if (el && el.complete && el.naturalWidth > 0 && !loadedWorks[idx]) {
                        setLoadedWorks((prev) => ({ ...prev, [idx]: true }));
                      }
                    }}
                    src={work.bg}
                    alt={work.title}
                    onLoad={() =>
                      setLoadedWorks((prev) => ({ ...prev, [idx]: true }))
                    }
                    onError={() =>
                      setLoadedWorks((prev) => ({ ...prev, [idx]: true }))
                    }
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 md:via-black/10 to-black/10 md:to-black/10 transition-opacity duration-300 group-hover:opacity-80" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6">
                  <div className="inline-flex items-center justify-center border border-[#2991ce] bg-gray-100/10 backdrop-blur-md rounded-full px-4 py-1.5 md:px-5 md:py-2 text-white font-['Menbere'] text-[10px] md:text-[12px] capitalize overflow-hidden relative shadow-lg">
                    <span className="relative z-10 font-bold">
                      {work.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3">
                    <div className="w-0.75 md:w-1 h-7.5 md:h-10 bg-[#2991ce]"></div>
                    <div>
                      <h3 className="font-['Menbere'] text-[#cfcfcf] text-[16px] md:text-[24px] capitalize mb-0 md:mb-1 font-bold leading-tight">
                        {work.title}
                      </h3>
                      <p className="font-['Menbere'] text-[#dedede] text-[12px] md:text-[20px] capitalize font-medium leading-tight mt-1">
                        {work.client}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
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
          <Link
            href={latestWorks.buttonLink || "/projects"}
            className="group flex items-center justify-between min-w-50 h-15 border border-[#333] rounded-4xl px-8 hover:border-white transition-all cursor-pointer"
          >
            <span className="font-['Menbere'] font-bold text-[14px] text-white uppercase tracking-wider mr-4">
              {latestWorks.buttonText}
            </span>
            <div className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
