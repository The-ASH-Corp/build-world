"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";

interface ProjectDetailPageProps {
  id: string;
}

export default function ProjectDetailPage({ id }: ProjectDetailPageProps) {
  const project = projectsData.projectsPage.works.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // To match the specific screenshot layout: Left column has 2 images, Right column has 3 images.
  const leftImages = project.gallery.slice(0, 2);
  const rightImages = project.gallery.slice(2, 5);

  return (
    <div className="min-h-screen bg-[#111318] text-white pt-24 md:pt-32 pb-24 font-['Menbere']">
      <div className="max-w-[1533px] mx-auto px-6 xl:px-24">
        
        {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-['Menbere'] text-[36px] md:text-[60px] xl:text-[85px] font-bold text-white mb-10 md:mb-14 leading-[1.1] capitalize tracking-tight"
          >
            {project.title}
          </motion.h1>

          {/* Top Section: Main Image & Description */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 mb-24 md:mb-32">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-7/12 rounded-[24px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[16/10]"
            >
              <img 
                src={project.bg} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-5/12 flex flex-col justify-center"
            >
              <p className="font-['Menbere'] text-[16px] md:text-[20px] text-gray-200 mb-6 md:mb-8 font-medium tracking-wide">
                Client - <span className="text-[#3797ca]">{project.client}</span>
              </p>
              
              <div className="font-['Menbere'] text-[14px] md:text-[16px] text-[#b0b0b0] leading-[1.8] space-y-6 max-w-[600px] text-left md:text-justify">
                {project.description.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Second Section: A Closer Look At The Craft */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12 md:mb-16 w-full">
              <h2 className="font-['Menbere'] text-[32px] md:text-[50px] xl:text-[70px] font-bold text-white tracking-tight capitalize leading-[1.1]">
                A Closer Look At The Craft
              </h2>
              <div className="flex-grow h-[1.5px] bg-white w-full sm:w-auto sm:mt-8"></div>
            </div>

            {/* Masonry Image Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Left Column */}
                <div className="flex-1 w-full flex flex-col gap-6 md:gap-8">
                  {leftImages.map((img, idx) => (
                    <div key={`left-${idx}`} className="w-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl">
                      <img src={img} alt={`Gallery Left ${idx}`} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
                
                {/* Right Column */}
                <div className="flex-1 w-full flex flex-col gap-6 md:gap-8">
                  {rightImages.map((img, idx) => (
                    <div key={`right-${idx}`} className="w-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl">
                      <img src={img} alt={`Gallery Right ${idx}`} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    );
  }

