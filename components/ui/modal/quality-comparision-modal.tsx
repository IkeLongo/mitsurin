"use client";

import { AnimatePresence, motion } from "framer-motion";

interface QualityComparisonModalProps {
  isVisible: boolean;
  position: { x: number; y: number };
  grade: string;
  score: number;
  description: string;
}

const gradeDescriptions: Record<string, string> = {
  SELECT: "Basic quality with minimal marbling. Good for everyday cooking.",
  CHOICE: "Moderate marbling. More tender and flavorful than Select.",
  PRIME: "Abundant marbling. Exceptional tenderness and flavor.",
  WAGYU: "Legendary marbling. The ultimate beef experience."
};

export const QualityComparisonModal = ({
  isVisible,
  position,
  grade,
  score,
  description
}: QualityComparisonModalProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0
          }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ 
            duration: 0.2, 
            ease: "easeOut"
          }}
        >
          <div className="bg-black border-2 border-yellow-600 rounded-lg p-4 shadow-2xl w-[200px] transform -translate-x-1/2">
            {/* Grade Title */}
            <h3 className="text-yellow-600 text-lg font-bold font-[Montserrat] mb-2 text-center">
              {grade}
            </h3>
            
            {/* Description */}
            <p className="text-neutral-200 text-sm leading-relaxed mb-3 text-center">
              {description || gradeDescriptions[grade]}
            </p>
            
            {/* Quality Score */}
            <div className="text-neutral-200 text-sm font-semibold text-center">
              Quality Score: {score}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QualityComparisonModal;