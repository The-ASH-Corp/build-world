"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

function sanitizeUrl(url: any): any {
  if (typeof url !== "string") return url;
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
  onError,
  unoptimized,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  const cleanSrc = sanitizeUrl(src);
  const targetSrc = failed && fallbackSrc ? fallbackSrc : cleanSrc;

  return (
    <Image
      {...props}
      src={targetSrc}
      alt={alt || "Image"}
      unoptimized={failed || unoptimized}
      onError={(e) => {
        if (!failed) {
          setFailed(true);
        }
        if (onError) onError(e);
      }}
      className={className}
    />
  );
}
