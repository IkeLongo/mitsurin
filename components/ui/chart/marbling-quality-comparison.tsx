"use client";

import { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { QualityComparisonModal } from '@/components/ui/modal/quality-comparision-modal';

const finalData = [
  {
    name: 'SELECT',
    score: 25,
    fill: '#374151' // gray-700
  },
  {
    name: 'CHOICE', 
    score: 50,
    fill: '#9CA3AF' // gray-400
  },
  {
    name: 'PRIME',
    score: 80,
    fill: '#7F1D1D' // red-900
  },
  {
    name: 'WAGYU',
    score: 100,
    fill: '#D97706' // yellow-600
  }
];

// Custom hook for intersection observer
const useInView = (threshold = 0.3) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once animation starts, disconnect observer
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView] as const;
};

export default function MarblingQualityComparison() {
  const [chartRef, isInView] = useInView(0.3);
  const [animatedData, setAnimatedData] = useState(
    finalData.map(item => ({ ...item, score: 0 }))
  );
  
  // Modal state
  const [modalState, setModalState] = useState({
    isVisible: false,
    position: { x: 0, y: 0 },
    grade: '',
    score: 0,
    description: ''
  });
  
  // Hover state for column highlighting
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      // Animate each bar with a staggered delay
      finalData.forEach((item, index) => {
        setTimeout(() => {
          setAnimatedData(prev => 
            prev.map((prevItem, prevIndex) => 
              prevIndex === index 
                ? { ...prevItem, score: item.score }
                : prevItem
            )
          );
        }, index * 200); // 200ms delay between each bar
      });
    }
  }, [isInView]);

  // Custom bar component to handle hover events
  const CustomBar = (props: any) => {
    const { payload, x, y, width, height } = props;
    
    const handleMouseEnter = (event: React.MouseEvent) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const chartContainer = chartRef.current?.getBoundingClientRect();
      
      if (!chartContainer) return;
      
      // Set hovered column for background highlighting
      setHoveredColumn(payload.name);
      
      // Determine position based on grade
      const isLeftAligned = payload.name === 'CHOICE';
      let modalX, modalY;
      
      if (isLeftAligned) {
        // Position to the left side for CHOICE only
        modalX = rect.left - 20;
        modalY = rect.top - 100;
      } else {
        // Position to the right side for SELECT, PRIME, and WAGYU
        modalX = rect.right - 180;
        modalY = rect.top - 100;
      }
      
      setModalState({
        isVisible: true,
        position: { x: modalX, y: modalY },
        grade: payload.name,
        score: payload.score,
        description: ''
      });
    };

    const handleMouseMove = (event: React.MouseEvent) => {
      if (!modalState.isVisible) return;
      
      const rect = event.currentTarget.getBoundingClientRect();
      const isLeftAligned = payload.name === 'CHOICE';
      let modalX, modalY;
      
      if (isLeftAligned) {
        modalX = rect.left - 20;
        modalY = event.clientY - 80; // Follow mouse Y position
      } else {
        modalX = rect.right - 180;
        modalY = event.clientY - 80; // Follow mouse Y position
      }
      
      setModalState(prev => ({
        ...prev,
        position: { x: modalX, y: modalY }
      }));
    };

    const handleMouseLeave = () => {
      setHoveredColumn(null);
      setModalState(prev => ({ ...prev, isVisible: false }));
    };

    const isHovered = hoveredColumn === payload.name;

    return (
      <g>
        {/* Background highlight for entire column */}
        {isHovered && (
          <rect
            x={x - 10}
            y={0}
            width={width + 20}
            height="100%"
            fill="rgba(251, 191, 36, 0.2)" // Stronger yellow background
            rx={4}
            ry={4}
          />
        )}
        {/* Invisible full-height hover area */}
        <rect
          x={x - 5}
          y={0}
          width={width + 10}
          height="100%"
          fill="transparent"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'pointer' }}
        />
        {/* Main bar */}
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={payload.fill}
          rx={8}
          ry={8}
          style={{ pointerEvents: 'none' }}
        />
      </g>
    );
  };

  // Handle chart container mouse leave
  const handleChartMouseLeave = () => {
    setHoveredColumn(null);
    setModalState(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <>
      <motion.div 
        ref={chartRef}
        className="bg-black border-2 border-yellow-600 rounded-lg p-8 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h4 
          className="text-white text-2xl font-bold font-[Montserrat] text-center mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Marbling Quality Comparison
        </motion.h4>

        {/* Chart Container */}
        <motion.div 
          className="mb-8 h-[350px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onMouseLeave={handleChartMouseLeave}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={animatedData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#6B7280" opacity={0.4} />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#FFFFFF', fontSize: 14, fontWeight: 500 }}
                axisLine={{ stroke: '#9CA3AF', strokeWidth: 2 }}
                tickLine={{ stroke: '#6B7280' }}
              />
              <YAxis 
                domain={[0, 100]}
                tick={{ fill: '#FFFFFF', fontSize: 12 }}
                axisLine={{ stroke: '#9CA3AF', strokeWidth: 2 }}
                tickLine={{ stroke: '#6B7280' }}
                label={{ 
                  value: 'Quality Score', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fill: '#D97706', fontSize: '14px', fontWeight: 500 }
                }}
              />
              <Bar 
                dataKey="score" 
                shape={CustomBar}
                animationDuration={800}
                animationEasing="ease-out"
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Footer Text */}
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-white text-sm">
            *Quality score based on marbling intensity and genetic predisposition
          </p>
          <p className="text-yellow-600 text-sm">
            Source: USDA Beef Grading Standards & American Wagyu Association
          </p>
        </motion.div>
      </motion.div>

      {/* Hover Modal */}
      <QualityComparisonModal
        isVisible={modalState.isVisible}
        position={modalState.position}
        grade={modalState.grade}
        score={modalState.score}
        description={modalState.description}
      />
    </>
  );
}