"use client";

import { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { QualityComparisonModal } from '@/components/ui/modal/quality-comparision-modal';

const finalData = [
  {
    name: 'SELECT',
    score: 23,
    fill: '#374151' // gray-700 - darkest gray
  },
  {
    name: 'CHOICE', 
    score: 47,
    fill: '#6B7280' // gray-500 - medium gray
  },
  {
    name: 'PRIME',
    score: 79,
    fill: '#9CA3AF' // gray-400 - lightest gray
  },
  {
    name: 'WAGYU',
    score: 100,
    fill: '#630710' // primary-800 - Mitsurin brand red
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

  // Function to check if chart is still in viewport (more sensitive detection)
  const isChartInViewport = () => {
    if (!chartRef.current) return false;
    
    const rect = chartRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    // Calculate how much of the chart is visible
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    const totalHeight = rect.height;
    const totalWidth = rect.width;
    
    // Hide modal if less than 30% of the chart is visible (adjust this percentage as needed)
    const visibilityThreshold = 0.9;
    const heightVisibility = visibleHeight / totalHeight;
    const widthVisibility = visibleWidth / totalWidth;
    
    return heightVisibility >= visibilityThreshold && widthVisibility >= visibilityThreshold;
  };

  // Hide modal when chart leaves viewport
  const hideModalIfOutOfView = () => {
    if (!isChartInViewport()) {
      setModalState(prev => ({ ...prev, isVisible: false }));
      setHoveredColumn(null);
    }
  };

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

  // Add scroll and resize event listeners to check viewport
  useEffect(() => {
    const handleScroll = () => {
      if (modalState.isVisible) {
        hideModalIfOutOfView();
      }
    };

    const handleResize = () => {
      if (modalState.isVisible) {
        hideModalIfOutOfView();
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [modalState.isVisible]); // Depend on modal visibility to optimize listener attachment

  // Custom bar component to handle hover events
  const CustomBar = (props: any) => {
    const { payload, x, y, width, height } = props;
    
    const handleMouseEnter = (event: React.MouseEvent) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const chartContainer = chartRef.current?.getBoundingClientRect();
      
      // Set hovered column for background highlighting
      setHoveredColumn(payload.name);
      
      if (chartContainer) {
        // Position modal in the middle of the chart, aligned with the hovered column
        const modalX = rect.left + (rect.width / 2); // Align with center of hovered column
        const modalY = chartContainer.top + (chartContainer.height / 2); // Center vertically in chart
      
        setModalState({
          isVisible: true,
          position: { x: modalX, y: modalY },
          grade: payload.name,
          score: payload.score,
          description: ''
        });
      }
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
            fill="rgba(249, 250, 251, 0.15)" // Off-white background with low opacity
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
        className="bg-black border-2 border-accent-dark rounded-lg p-8 w-full max-w-4xl mx-auto"
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
                  style: { textAnchor: 'middle', fill: '#BF8136', fontSize: '14px', fontWeight: 500 }
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
          <p className="text-accent-dark text-sm">
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