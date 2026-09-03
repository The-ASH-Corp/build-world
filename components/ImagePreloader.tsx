"use client";

import { useEffect } from "react";
import { projectsData } from "@/data/projectsData";
import { awardsData } from "@/data/awardsData";
import { aboutData } from "@/data/aboutData";

export default function ImagePreloader() {
  useEffect(() => {
    // Run after initial page render is complete
    const preloadAllImages = async () => {
      const urlsToPreload: string[] = [];

      // 1. Projects
      projectsData.projectsPage.works.forEach((work) => {
        if (work.bg) urlsToPreload.push(work.bg);
        if (work.gallery) urlsToPreload.push(...work.gallery);
      });

      // 2. Awards
      awardsData.awards.forEach((award) => {
        if (award.image) urlsToPreload.push(award.image);
      });
      if (awardsData.certificates) {
        urlsToPreload.push(...awardsData.certificates);
      }

      // 3. About Page
      if (aboutData.aboutPage.approach?.images) {
        urlsToPreload.push(...aboutData.aboutPage.approach.images);
      }
      if (aboutData.aboutPage.legacy?.image) {
        urlsToPreload.push(aboutData.aboutPage.legacy.image);
      }
      if (aboutData.aboutPage.leadership?.image) {
        urlsToPreload.push(aboutData.aboutPage.leadership.image);
      }

      // Deduplicate URLs
      const uniqueUrls = Array.from(new Set(urlsToPreload));

      // Open Cache Storage if supported
      let cache: Cache | null = null;
      if (typeof window !== "undefined" && "caches" in window) {
        try {
          cache = await caches.open("buildworld-images-v1");
        } catch {
          cache = null;
        }
      }

      // Preload function
      const preloadUrl = async (url: string) => {
        if (!url) return;
        try {
          let cleanUrl = url;
          if (cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://")) {
            try {
              cleanUrl = encodeURI(decodeURI(cleanUrl));
            } catch {}
          }

          // Pre-trigger Next.js image optimizer endpoint
          const optimizedUrl = `/_next/image?url=${encodeURIComponent(cleanUrl)}&w=1200&q=85`;

          // 1. Store in Cache Storage API
          if (cache) {
            const cachedResponse = await cache.match(optimizedUrl);
            if (!cachedResponse) {
              fetch(optimizedUrl)
                .then((res) => {
                  if (res.ok && cache) cache.put(optimizedUrl, res.clone());
                })
                .catch(() => {});
            }
          }

          // 2. Pre-warm browser HTTP memory cache
          const img = new window.Image();
          img.src = optimizedUrl;
        } catch {}
      };

      // Schedule preloading during browser idle time
      const runBatch = () => {
        uniqueUrls.forEach((url, i) => {
          setTimeout(() => preloadUrl(url), i * 150);
        });
      };

      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        (window as any).requestIdleCallback(runBatch);
      } else {
        setTimeout(runBatch, 1500);
      }
    };

    preloadAllImages();
  }, []);

  return null;
}
