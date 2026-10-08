"use client";

import { useState, useRef, useEffect, SyntheticEvent } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
  skeletonClassName?: string;
}

function sanitizeUrl(url: unknown): string {
  if (typeof url !== "string") return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      return encodeURI(decodeURI(url));
    } catch {
      return url;
    }
  }
  return url;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc,
  className = "",
  skeletonClassName = "",
  onError,
  onLoad,
  unoptimized,
  fill,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const cleanSrc = sanitizeUrl(src);
  const targetSrc = failed && fallbackSrc ? fallbackSrc : cleanSrc;
  const isLoaded = loadedSrc === targetSrc;

  // Check if browser already loaded and cached the image
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth > 0) {
      // Defer slightly or sync if already complete
      const timer = setTimeout(() => setLoadedSrc(targetSrc), 0);
      return () => clearTimeout(timer);
    }
  }, [targetSrc]);

  const handleLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    setLoadedSrc(targetSrc);
    if (onLoad) onLoad(e);
  };

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (!failed) {
      setFailed(true);
    }
    setLoadedSrc(targetSrc);
    if (onError) onError(e);
  };

  if (fill) {
    return (
      <>
        {/* Skeleton animation container - only disappears when fully loaded */}
        <div
          className={`skeleton-shimmer z-10 pointer-events-none transition-opacity duration-500 ${
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          } ${skeletonClassName}`}
          aria-hidden="true"
        />

        <Image
          {...props}
          ref={imgRef}
          fill
          src={targetSrc}
          alt={alt || "Image"}
          unoptimized={failed || unoptimized}
          onError={handleError}
          onLoad={handleLoad}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </>
    );
  }

  return (
    <div
      className={`relative inline-block overflow-hidden ${skeletonClassName}`}
    >
      {/* Skeleton animation container */}
      <div
        className={`skeleton-shimmer z-10 pointer-events-none transition-opacity duration-500 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden="true"
      />

      <Image
        {...props}
        ref={imgRef}
        src={targetSrc}
        alt={alt || "Image"}
        unoptimized={failed || unoptimized}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
