"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import SafeImage from "@/components/SafeImage";

interface ProjectDetailPageProps {
  id: string;
}

export default function ProjectDetailPage({ id }: ProjectDetailPageProps) {
  const project = projectsData.projectsPage.works.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // First 3 images for Row 1, next 3 images for Row 2
  const gallery = project.gallery || [];
  const firstBlock = gallery.slice(0, 3);
  const secondBlock = gallery.slice(3, 6);

  return (
    <div className="min-h-screen bg-[#111318] text-white pt-24 md:pt-32 pb-24 font-['Menbere']">
      <div className="w-full px-6 xl:px-24 2xl:px-[8%]">
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
            className="w-full lg:w-7/12 rounded-[24px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[16/10] relative bg-[#1a1d24]"
          >
            <SafeImage
              src={project.bg}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
              quality={90}
              className="object-cover"
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

          {/* Image Gallery (6 Images using the signature 3-image layout structure) */}
          {gallery.length > 0 && (
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Block 1 (Images 1, 2, 3): Left 2 Stacked Horizontal Cards, Right 1 Tall Vertical Card */}
              {firstBlock.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
                  {/* Left Column: 2 Stacked Horizontal Cards */}
                  <div className="md:col-span-7 flex flex-col gap-6 md:gap-8">
                    {firstBlock[0] && (
                      <div className="w-full aspect-[16/10] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl relative bg-[#1a1d24]">
                        <SafeImage
                          src={firstBlock[0]}
                          alt="Gallery Image 1"
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          quality={75}
                          className="object-cover"
                        />
                      </div>
                    )}
                    {firstBlock[1] && (
                      <div className="w-full aspect-[16/10] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl relative bg-[#1a1d24]">
                        <SafeImage
                          src={firstBlock[1]}
                          alt="Gallery Image 2"
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          quality={75}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Column: 1 Tall Vertical Card */}
                  <div className="md:col-span-5 flex">
                    {firstBlock[2] && (
                      <div className="w-full h-full min-h-[350px] md:min-h-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl relative bg-[#1a1d24]">
                        <SafeImage
                          src={firstBlock[2]}
                          alt="Gallery Image 3"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          quality={75}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Block 2 (Images 4, 5, 6): Left 1 Tall Vertical Card, Right 2 Stacked Horizontal Cards */}
              {secondBlock.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
                  {/* Left Column: 1 Tall Vertical Card */}
                  <div className="md:col-span-5 flex">
                    {secondBlock[0] && (
                      <div className="w-full h-full min-h-[350px] md:min-h-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl relative bg-[#1a1d24]">
                        <SafeImage
                          src={secondBlock[0]}
                          alt="Gallery Image 4"
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          quality={75}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Column: 2 Stacked Horizontal Cards */}
                  <div className="md:col-span-7 flex flex-col gap-6 md:gap-8">
                    {secondBlock[1] && (
                      <div className="w-full aspect-[16/10] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl relative bg-[#1a1d24]">
                        <SafeImage
                          src={secondBlock[1]}
                          alt="Gallery Image 5"
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          quality={75}
                          className="object-cover"
                        />
                      </div>
                    )}
                    {secondBlock[2] && (
                      <div className="w-full aspect-[16/10] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-xl relative bg-[#1a1d24]">
                        <SafeImage
                          src={secondBlock[2]}
                          alt="Gallery Image 6"
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          quality={75}
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
