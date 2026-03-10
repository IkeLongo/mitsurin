"use client";

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  cards: ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export const Carousel = ({
  cards,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = "",
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || cards.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval, cards.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants for the cards
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  // Animation for the dots
  const dotVariants = {
    inactive: {
      width: 12,
      height: 12,
      backgroundColor: "#9CA3AF", // gray-400
    },
    active: {
      width: 32,
      height: 12,
      backgroundColor: "#BF8136", // accent-dark
    },
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Carousel Container */}
      <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl">
        
        {/* Cards Container */}
        <div className="relative w-full h-full perspective-1000">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {cards[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows - Hidden on sm and smaller screens */}
        {cards.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all duration-200 hover:scale-110"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={handleNext}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all duration-200 hover:scale-110"
              aria-label="Next card"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </>
        )}

        {/* Progress Bar */}
        {autoPlay && cards.length > 1 && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
            <motion.div
              className="h-full bg-accent-dark"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              key={currentIndex}
              transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
            />
          </div>
        )}
      </div>

      {/* Dot Indicators with Inline Arrows on Small Screens */}
      {cards.length > 1 && (
        <div className="flex justify-center items-center gap-3 mt-6">
          {/* Left Arrow - Only visible on sm and smaller */}
          <button
            onClick={handlePrev}
            className="md:hidden p-2 rounded-full backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all duration-200 hover:scale-110"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 z-20" />
          </button>

          {/* Dot Indicators */}
          {cards.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className="rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-dark focus:ring-offset-2"
              variants={dotVariants}
              animate={index === currentIndex ? "active" : "inactive"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

          {/* Right Arrow - Only visible on sm and smaller */}
          <button
            onClick={handleNext}
            className="md:hidden p-2 rounded-full backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all duration-200 hover:scale-110"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      )}

      {/* Card Counter */}
      <div className="text-center mt-4 text-sm text-gray-500">
        {currentIndex + 1} of {cards.length}
      </div>
    </div>
  );
};

export default Carousel;
