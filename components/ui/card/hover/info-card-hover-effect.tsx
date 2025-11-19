"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { InfoModal } from "@/components/ui/modal/info-modal";

export const InfoHoverEffect = ({
  items,
  className,
}: {
  items: {
    percentage: string;
    description: string;
    modalTitle?: string;
    modalDescription?: string;
    link?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [selectedModal, setSelectedModal] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleCardClick = (item: typeof items[0]) => {
    setSelectedModal({
      title: item.modalTitle || item.percentage,
      description: item.modalDescription || item.description,
    });
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  return (
    <>
      <div
        className={cn(
          "relative grid grid-cols-1 md:grid-cols-2 gap-4 py-6",
          className
        )}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group flex p-2 h-full w-full cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onClick={() => handleCardClick(item)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-blue-100 block rounded-xl pointer-events-none"
                  layoutId="infoHoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <InfoCard>
              <InfoCardPercentage>{item.percentage}</InfoCardPercentage>
              <InfoCardContent>
                <InfoCardDescription>{item.description}</InfoCardDescription>
                <InfoCardIcon />
              </InfoCardContent>
            </InfoCard>
          </div>
        ))}
      </div>

      {/* Modal */}
      <InfoModal
        isOpen={!!selectedModal}
        onClose={closeModal}
        title={selectedModal?.title || ""}
        description={selectedModal?.description || ""}
      />
    </>
  );
};

export const InfoCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-6 overflow-hidden bg-white border-2 border-yellow-600 relative z-20 flex flex-col min-h-[140px]",
        className
      )}
    >
      <div className="relative z-50 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export const InfoCardPercentage = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("text-4xl font-bold text-red-900 mb-3 text-left", className)}>
      {children}
    </div>
  );
};

export const InfoCardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex items-start justify-between flex-1", className)}>
      {children}
    </div>
  );
};

export const InfoCardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-gray-700 text-sm leading-relaxed text-left flex-1 pr-4",
        className
      )}
    >
      {children}
    </p>
  );
};

export const InfoCardIcon = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cn("flex-shrink-0 ml-2", className)}>
      <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
        <span className="text-gray-400 text-xs font-bold">i</span>
      </div>
    </div>
  );
};