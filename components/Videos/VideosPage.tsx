"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VideoItem, videosData } from "@/data/videosData";
import VideoCard from "./VideoCard";
import VideoPlayerModal from "./VideoPlayerModal";

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="bg-[#050505] py-20 md:py-32 w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-[8%]">
      <div className="w-full">
        {/* Header Section (Identical styling to Gallery.tsx) */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 lg:mb-6 tracking-tight whitespace-normal lg:whitespace-nowrap"
          >
            Captured. In Motion
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

        {/* Video Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-auto grid-flow-dense">
          {videosData.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              onPlay={(vid) => setActiveVideo(vid)}
              layoutMode="dynamic"
            />
          ))}
        </div>
      </div>

      {/* Theater Video Player Modal */}
      <VideoPlayerModal
        video={activeVideo}
        allVideos={videosData}
        onClose={() => setActiveVideo(null)}
        onSelectVideo={(vid) => setActiveVideo(vid)}
      />
    </section>
  );
}
