"use client";

import { useEffect, useRef, useState } from 'react';

interface AnimatedProgressBarProps {
  label: string;
  value: string;
  percentage: number;
  delay?: number;
}

export function useAnimatedProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px 0px -10% 0px' // Start animation slightly before fully visible
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return { ref, isVisible };
}

export function AnimatedProgressBar({ 
  label, 
  value, 
  percentage, 
  delay = 0 
}: AnimatedProgressBarProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const { ref, isVisible } = useAnimatedProgress();

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        // Animate to target percentage over 1.2 seconds
        const duration = 1200;
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation (ease-out)
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          
          setAnimatedWidth(easedProgress * percentage);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        animate();
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-neutral-300 dark:text-neutral-300">{label}</span>
        <span className="text-neutral-300 dark:text-neutral-300 font-semibold">{value}</span>
      </div>
      <div className="w-full bg-white rounded-full h-2 overflow-hidden">
        <div 
          className="bg-accent-dark h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}