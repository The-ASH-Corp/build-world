"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc,
  className = "",
  onLoad,
  ...props
}: SafeImageProps) {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      {...props}
      src={isError && fallbackSrc ? fallbackSrc : src}
      alt={alt || "Image"}
      unoptimized={isError || props.unoptimized}
      onError={(e) => {
        if (!isError) {
          setIsError(true);
        }
      }}
      onLoad={(e) => {
        setIsLoaded(true);
        if (onLoad) onLoad(e);
      }}
      className={`transition-opacity duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
}
