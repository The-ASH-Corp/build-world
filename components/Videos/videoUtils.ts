import { VideoItem } from "@/data/videosData";

export function isYouTubeVideo(video: VideoItem): boolean {
  if (video.type === "direct" || video.type === "file") return false;
  if (video.type === "youtube") return true;
  if (video.youtubeId) return true;
  if (
    video.videoUrl &&
    (video.videoUrl.includes("youtube.com") || video.videoUrl.includes("youtu.be"))
  ) {
    return true;
  }
  return false;
}

export function getYouTubeId(video: VideoItem): string | null {
  const raw =
    video.youtubeId ||
    (video.videoUrl && (video.videoUrl.includes("youtube.com") || video.videoUrl.includes("youtu.be"))
      ? video.videoUrl
      : undefined);

  if (!raw) return null;
  const trimmed = raw.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : null;
}

export function formatVideoUrl(url?: string): string {
  if (!url) return "";
  if (url.includes(" ")) {
    return encodeURI(url);
  }
  return url;
}

