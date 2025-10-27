"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  className?: string;
}

export const InfoModal = ({
  isOpen,
  onClose,
  title,
  description,
  className,
}: InfoModalProps) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          >
            {/* Modal Content */}
            <motion.div
              className={cn(
                "bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 relative border-2 border-yellow-600",
                className
              )}
              initial={{ 
                opacity: 0, 
                rotateX: 90, 
                scale: 0.8 
              }}
              animate={{ 
                opacity: 1, 
                rotateX: 0, 
                scale: 1 
              }}
              exit={{ 
                opacity: 0, 
                rotateX: 90, 
                scale: 0.8 
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
              onClick={(e) => e.stopPropagation()}
              style={{
                transformPerspective: "1000px",
                transformOrigin: "center bottom"
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-red-900 font-[Montserrat] mb-4">
                  {title}
                </h2>

                {/* Description */}
                <div className="text-gray-700 leading-relaxed">
                  {description}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};