"use client";

interface SpinAnimationProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export default function SpinAnimation({
  src,
  alt,
  className = "w-10 h-10 md:w-12 md:h-12",
  delay = 0.5
}: SpinAnimationProps) {
  return (
    <>
      <img 
        src={src}
        alt={alt}
        className={className}
        style={{
          animation: `spinY 2s ease-out ${delay}s forwards`,
          animationFillMode: 'forwards',
        }}
      />
      
      {/* Custom keyframe animation styles */}
      <style jsx>{`
        @keyframes spinY {
          0% { 
            transform: perspective(400px) rotateY(0deg);
          }
          20% { 
            transform: perspective(400px) rotateY(360deg);
          }
          40% { 
            transform: perspective(400px) rotateY(720deg);
          }
          60% { 
            transform: perspective(400px) rotateY(1080deg);
          }
          80% { 
            transform: perspective(400px) rotateY(1260deg);
          }
          100% { 
            transform: perspective(400px) rotateY(1440deg);
          }
        }
      `}</style>
    </>
  );
}