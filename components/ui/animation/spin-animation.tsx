"use client";

import { useEffect, useRef, useState } from "react";

interface SpinAnimationProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export default function SpinAnimation({
  src,
  alt,
  className = "w-10 h-10 md:w-12 md:h-12",
  delay = 0.5
}: SpinAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation has triggered
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <img 
        ref={elementRef}
        src={src}
        alt={alt}
        className={className}
        style={{
          animation: isVisible ? `spinY 2s ease-out ${delay}s forwards` : 'none',
          animationFillMode: 'forwards',
        }}
      />
      
      {/* Custom keyframe animation styles */}
      <style jsx>{`
        @keyframes spinY {
          0% { 
            transform: perspective(400px) rotateY(0deg);
          }
          20% { 
            transform: perspective(400px) rotateY(360deg);
          }
          40% { 
            transform: perspective(400px) rotateY(720deg);
          }
          60% { 
            transform: perspective(400px) rotateY(1080deg);
          }
          80% { 
            transform: perspective(400px) rotateY(1260deg);
          }
          100% { 
            transform: perspective(400px) rotateY(1440deg);
          }
        }
      `}</style>
    </>
  );
}