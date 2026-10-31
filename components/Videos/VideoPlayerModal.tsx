"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoItem } from "@/data/videosData";
import { isYouTubeVideo, getYouTubeId, formatVideoUrl } from "./videoUtils";

interface VideoPlayerModalProps {
  video: VideoItem | null;
  allVideos: VideoItem[];
  onClose: () => void;
  onSelectVideo: (video: VideoItem) => void;
}

export default function VideoPlayerModal({
  video,
  allVideos,
  onClose,
  onSelectVideo,
}: VideoPlayerModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        navigate(1);
      } else if (e.key === "ArrowLeft") {
        navigate(-1);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, allVideos]);

  if (!video) return null;

  const currentIndex = allVideos.findIndex((v) => v.id === video.id);
  const prevVideo = currentIndex > 0 ? allVideos[currentIndex - 1] : allVideos[allVideos.length - 1];
  const nextVideo = currentIndex < allVideos.length - 1 ? allVideos[currentIndex + 1] : allVideos[0];

  const navigate = (direction: number) => {
    if (direction === 1 && nextVideo) {
      onSelectVideo(nextVideo);
    } else if (direction === -1 && prevVideo) {
      onSelectVideo(prevVideo);
    }
  };

  const handleShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const isYouTube = isYouTubeVideo(video);
  const ytId = getYouTubeId(video) || "z7jy5AitYJ4";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-5xl bg-[#0d0e12] border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-white/10 bg-[#07080a]">
            <div className="flex items-center gap-3 overflow-hidden">
              <h3 className="font-['Menbere'] text-sm md:text-base font-bold text-white truncate max-w-[280px] sm:max-w-md md:max-w-xl">
                {video.title}
              </h3>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                title="Copy share link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-md"
                title="Close (Esc)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Video Viewport (16:9) */}
          <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
            {isYouTube ? (
              <iframe
                src={`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : video.videoUrl ? (
              <video
                key={video.id}
                src={formatVideoUrl(video.videoUrl)}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-contain bg-black"
                onCanPlay={(e) => {
                  e.currentTarget.play().catch(() => {});
                }}
              >
                <source src={formatVideoUrl(video.videoUrl)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="text-gray-400 text-sm">Video source unavailable</div>
            )}

            {/* Prev / Next Floaters (hidden on small mobile) */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#2a9df4] text-white flex items-center justify-center transition-all opacity-70 hover:opacity-100 hover:scale-110 backdrop-blur-md border border-white/10"
              title="Previous Video"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={() => navigate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#2a9df4] text-white flex items-center justify-center transition-all opacity-70 hover:opacity-100 hover:scale-110 backdrop-blur-md border border-white/10"
              title="Next Video"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Details Footer */}
          <div className="p-5 md:p-6 bg-[#090a0d] overflow-y-auto scrollbar-hide">
            <h2 className="font-['Menbere'] text-lg md:text-xl font-bold text-white mb-2 leading-tight">
              {video.title}
            </h2>
            {video.description && (
              <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                {video.description}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
