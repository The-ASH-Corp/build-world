"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { VideoItem } from "@/data/videosData";
import { isYouTubeVideo, getYouTubeId, formatVideoUrl } from "./videoUtils";

interface VideoCardProps {
  video: VideoItem;
  index: number;
  onPlay: (video: VideoItem) => void;
  layoutMode?: "dynamic" | "grid";
}

export default function VideoCard({
  video,
  index,
  onPlay,
  layoutMode = "dynamic",
}: VideoCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isYt = isYouTubeVideo(video);
  const ytId = getYouTubeId(video);
  const fallbackYtThumbnail = ytId
    ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
    : undefined;

  // Use provided thumbnail, or default YouTube thumbnail, or fallback image
  const thumbnailSrc =
    video.thumbnail ||
    fallbackYtThumbnail ||
    (isYt ? "/images/image2gallery.webp" : undefined);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: (index % 6) * 0.08,
      }}
      className={`relative w-full rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 bg-[#12141a] border border-white/10 cursor-pointer ${
        layoutMode === "dynamic"
          ? `${video.className || "col-span-1 row-span-1"} min-h-[300px] md:min-h-[340px]`
          : "col-span-1 h-[320px] md:h-[360px]"
      }`}
      onClick={() => onPlay(video)}
    >
      {/* Background Media (Image thumbnail or AWS video preview) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0d0e12]">
        {!imageLoaded && (
          <div className="skeleton-shimmer z-10 pointer-events-none" />
        )}

        {thumbnailSrc && !imageError ? (
          <img
            src={thumbnailSrc}
            alt={video.title}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
          />
        ) : video.videoUrl ? (
          <video
            src={`${formatVideoUrl(video.videoUrl)}#t=0.5`}
            preload="metadata"
            muted
            playsInline
            onLoadedData={() => setImageLoaded(true)}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
          />
        ) : (
          <img
            src="/images/image2gallery.webp"
            alt={video.title}
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-cover"
          />
        )}

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/30 group-hover:from-black/90 group-hover:via-black/20 transition-colors duration-500 z-10" />
      </div>

      {/* Center Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="relative">
          {/* Subtle Outer Pulsing Halo on Hover */}
          <div className="absolute -inset-3 rounded-2xl bg-[#2a9df4]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-110" />

          {/* Center Play Icon Button: Red for YouTube, Brand Blue for AWS */}
          {isYt ? (
            <div className="relative w-16 h-12 md:w-20 md:h-14 bg-[#ff0000] rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 transform group-hover:scale-115 group-hover:bg-[#ff1a1a]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          ) : (
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2a9df4] text-white flex items-center justify-center shadow-2xl shadow-blue-500/40 transition-all duration-500 transform group-hover:scale-115">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Information */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-black/60 border border-white/20 p-1 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src="/images/xf1KVhd5mSnEPZmJKk1lycYyUc.webp"
              alt="Logo"
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>
          <span className="text-xs font-semibold text-gray-300">
            {video.channel || "Build World"}
          </span>
          {video.date && (
            <>
              <span className="text-gray-500 text-xs">•</span>
              <span className="text-xs text-gray-400">{video.date}</span>
            </>
          )}
        </div>

        <h3 className="font-['Menbere'] text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-[#2a9df4] transition-colors duration-300 line-clamp-2 leading-snug">
          {video.title}
        </h3>

        {video.description && (
          <p className="text-xs text-gray-400 mt-1.5 line-clamp-1 group-hover:text-gray-300 transition-colors">
            {video.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

