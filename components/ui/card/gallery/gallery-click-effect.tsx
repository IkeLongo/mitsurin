"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const GalleryCard = ({
  images,
  className,
}: {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn("w-full h-full min-h-96 flex flex-col", className)}>
      {/* Main Gallery Card */}
      <div className="flex-1 min-h-0 mb-4" style={{ minHeight: '450px' }}>
        <GalleryMainCard>
          <GalleryImage 
            src={images[currentIndex]?.src}
            alt={images[currentIndex]?.alt}
          />
          <GalleryArrowBack onClick={prevImage} />
          <GalleryArrowForward onClick={nextImage} />
        </GalleryMainCard>
      </div>

      {/* Thumbnail Gallery */}
      <GalleryThumbnails>
        {images.map((image, index) => (
          <GalleryThumbnail
            key={index}
            src={image.src}
            alt={image.alt}
            isActive={index === currentIndex}
            onClick={() => goToImage(index)}
          />
        ))}
      </GalleryThumbnails>
    </div>
  );
};

export const GalleryMainCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export const GalleryImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={src}
        className={cn("absolute inset-0", className)}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export const GalleryArrowBack = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-colors duration-200 cursor-pointer",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ChevronLeft className="w-6 h-6 text-gray-600" />
    </motion.button>
  );
};

export const GalleryArrowForward = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-2 shadow-md transition-colors duration-200 cursor-pointer",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ChevronRight className="w-6 h-6 text-gray-600" />
    </motion.button>
  );
};

export const GalleryThumbnails = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-auto p-2 flex-shrink-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const GalleryThumbnail = ({
  src,
  alt,
  isActive,
  onClick,
  className,
}: {
  src: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden relative cursor-pointer transition-all duration-200",
        isActive 
          ? "ring-2 ring-red-900 opacity-100" 
          : "opacity-50 hover:opacity-75",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={cn(
        "absolute inset-0 bg-black transition-opacity duration-200",
        isActive ? "opacity-0" : "opacity-20 hover:opacity-10"
      )} />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="80px"
      />
    </motion.button>
  );
};