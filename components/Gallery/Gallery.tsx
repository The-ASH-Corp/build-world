"use client";

import Image from "next/image";
import { galleryData } from "../../data/gallery";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="bg-[#050505] py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 lg:mb-6 tracking-tight whitespace-normal lg:whitespace-nowrap"
          >
            Built. Delivered. Celebrated.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-gray-400 text-sm md:text-base lg:text-lg text-center whitespace-normal lg:whitespace-nowrap"
          >
            Explore the projects, achievements, handovers, and moments that have shaped the Build World journey.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 auto-rows-[250px] md:auto-rows-[200px] lg:auto-rows-[80px] grid-flow-dense">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className={`relative w-full h-full rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 ${item.className}`}
            >
              {/* Premium dark overlay that fades on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
