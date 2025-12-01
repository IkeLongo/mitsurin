"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export const NumberedLadder = ({
  items,
  className,
}: {
  items: {
    number: number;
    text: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [activeIndex, setActiveIndex] = useState<number | null>(null);
  let [isMobile, setIsMobile] = useState(false);

  // Check if mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInView = (index: number, inView: boolean) => {
    if (isMobile && inView) {
      setActiveIndex(index);
    } else if (isMobile && !inView && activeIndex === index) {
      // Only clear if this was the active index
      setActiveIndex(null);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, idx) => (
        <LadderRung 
          key={idx} 
          index={idx}
          isFirst={idx === 0}
          onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
          onMouseLeave={() => !isMobile && setHoveredIndex(null)}
          isHovered={!isMobile ? hoveredIndex === idx : activeIndex === idx}
          isMobile={isMobile}
          onInView={(inView) => handleInView(idx, inView)}
        >
          <LadderNumber isHovered={!isMobile ? hoveredIndex === idx : activeIndex === idx}>
            {item.number}
          </LadderNumber>
          <LadderText isHovered={!isMobile ? hoveredIndex === idx : activeIndex === idx}>
            {item.text}
          </LadderText>
        </LadderRung>
      ))}
    </div>
  );
};

export const LadderRung = ({
  className,
  children,
  index,
  isFirst = false,
  onMouseEnter,
  onMouseLeave,
  isHovered = false,
  isMobile = false,
  onInView,
}: {
  className?: string;
  children: React.ReactNode;
  index: number;
  isFirst?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isHovered?: boolean;
  isMobile?: boolean;
  onInView?: (inView: boolean) => void;
}) => {
  const ref = useRef(null);
  
  // Use intersection observer for scroll-based animation
  const isInView = useInView(ref, {
    amount: 0,
    margin: "0px 0px -40% 0px", // Triggers when element is 40% up from bottom
  });

  useEffect(() => {
    if (isMobile && onInView) {
      onInView(isInView);
    }
  }, [isInView, isMobile, onInView]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "flex items-start p-4 w-full transition-colors duration-200",
        !isFirst && "border-t border-gray-300",
        isHovered && "bg-gray-50",
        !isMobile && "cursor-pointer", // Only show cursor pointer on desktop
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const LadderNumber = ({
  className,
  children,
  isHovered = false,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "flex-shrink-0 bg-gray-300 rounded-full flex items-center justify-center font-bold mr-4 relative overflow-hidden",
        className
      )}
      animate={{
        width: isHovered ? "3.5rem" : "3rem",
        height: isHovered ? "3.5rem" : "3rem",
        fontSize: isHovered ? "1.25rem" : "1.125rem",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Sliding red background */}
      <motion.div
        className="absolute inset-0 bg-primary-800 rounded-full"
        initial={{ x: "-100%" }}
        animate={{ 
          x: isHovered ? "0%" : "-100%"
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
      />
      
      <motion.span
        className="relative z-10"
        animate={{
          color: isHovered ? "#ffffff" : "#374151", // white vs gray-700
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};

export const LadderText = ({
  className,
  children,
  isHovered = false,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "flex-1 text-stone-900 leading-relaxed transition-all duration-200",
        className
      )}
      animate={{
        fontSize: isHovered ? "1.125rem" : "1rem", // text-lg vs text-base
        fontWeight: isHovered ? "500" : "400", // font-medium vs font-normal
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};