"use client";

import { useEffect, useRef } from 'react';

interface ImagePreloaderProps {
  images: string[];
  rootMargin?: string; // How far before the element to start preloading
  threshold?: number;
}

export function useImagePreloader({ 
  images, 
  rootMargin = '200px', // Start loading 200px before element comes into view
  threshold = 0.1 
}: ImagePreloaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start preloading images
            images.forEach((src) => {
              const img = new Image();
              img.src = src;
              // Optional: Set loading priority
              img.loading = 'eager';
              img.decoding = 'async';
              
              // Add to document head as preload hint
              const link = document.createElement('link');
              link.rel = 'preload';
              link.as = 'image';
              link.href = src;
              document.head.appendChild(link);
            });
            
            // Stop observing after loading starts
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin, // Start loading before element is visible
        threshold
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [images, rootMargin, threshold]);

  return ref;
}

export default useImagePreloader;