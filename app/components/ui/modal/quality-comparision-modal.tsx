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
            left: window.innerWidth < 768 ? '50%' : position.x,
            top: window.innerWidth < 768 ? '50%' : position.y,
          }}
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0
          }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          transition={{ 
            duration: 0.3, 
            ease: "easeOut"
          }}
        >
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xl w-[240px] backdrop-blur-sm" style={{
            transform: window.innerWidth < 768 
              ? 'translate(-50%, -50%)' 
              : 'translate(-50%, -50%)'
          }}>
            {/* Grade Title with Score Badge */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-primary-800 text-xl font-bold font-[Montserrat]">
                {grade}
              </h3>
              <div className="bg-accent-dark text-white text-xs font-semibold px-2 py-1 rounded-full">
                {score}
              </div>
            </div>
            
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-primary-800 to-accent-dark mb-3 opacity-30"></div>
            
            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              {description || gradeDescriptions[grade]}
            </p>
            
            {/* Quality Indicator */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs text-gray-500 font-medium">Quality Score:</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary-800 to-accent-dark transition-all duration-500"
                  style={{ width: `${score}%` }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QualityComparisonModal;