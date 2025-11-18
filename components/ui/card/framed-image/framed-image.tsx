import Image from "next/image";
import { StaticImageData } from "next/image";

interface FramedImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  
  // Frame customization
  frameColor?: string; // Tailwind color class like 'yellow-600', 'red-500', etc.
  frameBorderWidth?: number; // Border width in pixels (default: 6)
  
  // Frame offset (how much the frame is offset from the main image)
  offsetRight?: number; // Tailwind spacing like 4, 6, 8, 10 (default: 10)
  offsetTop?: number; // Tailwind spacing like 4, 6, 8, 10 (default: 10)
  
  // Container alignment and margins
  containerAlignment?: 'left' | 'center' | 'right' | 'ml-auto' | 'mr-auto'; // Container positioning
  containerMargin?: string; // Custom margin classes
  
  // Image styling
  imageRounded?: string; // Tailwind rounded class (default: 'rounded-xl')
  imageBorder?: boolean; // Whether to show border on image (default: true)
}

export default function FramedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  
  // Frame props
  frameColor = "yellow-600",
  frameBorderWidth = 6,
  
  // Offset props
  offsetRight = 10,
  offsetTop = 10,
  
  // Container props
  containerAlignment = "center",
  containerMargin,
  
  // Image styling props
  imageRounded = "rounded-xl",
  imageBorder = true,
}: FramedImageProps) {
  
  // Generate Tailwind classes for frame offset
  const rightOffsetClass = `right-${offsetRight}`;
  const topOffsetClass = `top-${offsetTop}`;
  const borderWidthClass = `border-[${frameBorderWidth}px]`;
  const frameColorClass = `border-${frameColor}`;
  
  // Generate container alignment classes with frame offset compensation
  const getContainerClasses = () => {
    const baseClasses = "relative w-full";
    const marginLeftClass = `ml-${offsetRight}`; // Add right margin to compensate for frame offset
    
    if (containerMargin) {
      return `${baseClasses} ${containerMargin}`;
    }
    
    switch (containerAlignment) {
      case 'left':
        return `${baseClasses} ${marginLeftClass}`;
      case 'right':
        return `${baseClasses} ${marginLeftClass}`;
      case 'ml-auto':
        return `${baseClasses} ${marginLeftClass}`;
      case 'mr-auto':
        return `${baseClasses} ${marginLeftClass}`;
      case 'center':
      default:
        return `${baseClasses} ${marginLeftClass}`;
    }
  };
  
  // Generate image border classes
  const imageBorderClasses = imageBorder ? `border border-${frameColor}` : '';

  return (
    <div className={getContainerClasses()}>
      {/* Back frame - positioned with custom offset */}
      <div 
        className={`absolute ${rightOffsetClass} ${topOffsetClass} w-full h-full ${borderWidthClass} ${frameColorClass} rounded-sm z-0`}
      />
      
      {/* Foreground image */}
      <div className="relative w-full z-10">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto object-cover ${imageBorderClasses} ${imageRounded} ${className}`}
          priority={priority}
        />
      </div>
    </div>
  );
}

// Type export for easier importing
export type { FramedImageProps };
