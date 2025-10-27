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
  // Determine modal alignment based on grade
  const isLeftAligned = grade === 'CHOICE';
  
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
            scale: 1
          }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ 
            duration: 0.15, 
            ease: "easeOut",
            x: { duration: 0.1, ease: "easeOut" },
            y: { duration: 0.1, ease: "easeOut" }
          }}
        >
          <div 
            className={`bg-white border-2 border-red-900 rounded-lg p-4 shadow-2xl max-w-xs min-w-[200px] ${
              isLeftAligned ? 'transform -translate-x-4' : 'transform -translate-x-44'
            }`}
          >
            {/* Grade Title */}
            <h3 className="text-red-900 text-lg font-bold font-[Montserrat] mb-2">
              {grade}
            </h3>
            
            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {description || gradeDescriptions[grade]}
            </p>
            
            {/* Quality Score */}
            <div className="text-yellow-600 text-sm font-semibold">
              Quality Score: {score}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QualityComparisonModal;