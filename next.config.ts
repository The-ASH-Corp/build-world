import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buildworld.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
