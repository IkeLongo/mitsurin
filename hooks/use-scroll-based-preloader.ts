"use client";

import { useEffect, useState } from 'react';

interface ScrollBasedPreloaderProps {
  images: string[];
  triggerPercent?: number; // Scroll percentage to trigger preloading (0-1)
}

export function useScrollBasedPreloader({ 
  images, 
  triggerPercent = 0.6 // Trigger at 60% scroll
}: ScrollBasedPreloaderProps) {
  const [hasPreloaded, setHasPreloaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || hasPreloaded) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / documentHeight;

      if (scrollPercent >= triggerPercent && !hasPreloaded) {
        // Preload images
        images.forEach((src, index) => {
          // Stagger the loading slightly to avoid network congestion
          setTimeout(() => {
            const img = new Image();
            img.src = src;
            img.loading = 'eager';
            
            // Add preload hint
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
          }, index * 50); // 50ms delay between each image
        });

        setHasPreloaded(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images, triggerPercent, hasPreloaded]);

  return hasPreloaded;
}

export default useScrollBasedPreloader;