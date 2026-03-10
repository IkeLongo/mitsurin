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
  offsetX?: number; // Tailwind spacing like 4, 6, 8, 10 (default: 10)
  offsetY?: number; // Tailwind spacing like 4, 6, 8, 10 (default: 10)
  
  // Container alignment and margins
  containerAlignment?: 'left' | 'center' | 'right' | 'ml-auto' | 'mr-auto'; // Container positioning
  containerMargin?: string; // Custom margin classes
  translateX?: number; // Custom X translation (-10 to 10, 0 = neutral)
  
  // Image styling
  imageRounded?: string; // Tailwind rounded class (default: 'rounded-xl')
  imageBorder?: boolean; // Whether to show border on image (default: true)
  imageHeight?: string; // Custom height class to override h-auto (e.g., 'h-64', 'h-80')
  imageWidth?: string; // Custom width class to override w-full (e.g., 'w-64', 'w-80')
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
  offsetX = 5,
  offsetY = 5,
  
  // Container props
  containerAlignment = "center",
  containerMargin,
  translateX = 0,
  
  // Image styling props
  imageRounded = "rounded-xl",
  imageBorder = true,
  imageHeight,
  imageWidth,
}: FramedImageProps) {
  
  // Generate inline styles for frame and image offsets
  const frameOffsetStyle = {
    transform: `translateX(-${offsetX * 4}px) translateY(${offsetY * 4}px)` // Frame: +X, -Y (multiply by 4 for Tailwind spacing)
  };
  const imageOffsetStyle = {
    transform: `translateX(${offsetX * 4}px) translateY(-${offsetY * 4}px)` // Image: -X, +Y
  };
  const borderWidthClass = `border-[${frameBorderWidth}px]`;
  const frameColorClass = `border-${frameColor}`;
  
  // Generate container alignment classes with frame offset compensation
  const getContainerClasses = () => {
    const baseClasses = "relative";
    const marginRightClass = `mr-${offsetX}`; // Add right margin to compensate for frame offset
    
    // Generate translateX class - handles both positive and negative values
    const getTranslateClass = () => {
      if (translateX === 0) return ''; // Neutral position
      if (translateX > 0) return `translate-x-${translateX}`; // Positive (right)
      return `-translate-x-${Math.abs(translateX)}`; // Negative (left)
    };
    const translateClass = getTranslateClass();
    
    if (containerMargin) {
      return `${baseClasses} ${containerMargin} ${translateClass}`.trim();
    }
    
    switch (containerAlignment) {
      case 'left':
        return `${baseClasses} ${translateClass}`.trim();
      case 'right':
        return `${baseClasses} ${marginRightClass} ml-auto ${translateClass}`.trim();
      case 'ml-auto':
        return `${baseClasses} ${translateClass}`.trim();
      case 'mr-auto':
        return `${baseClasses} ${marginRightClass} mr-auto ${translateClass}`.trim();
      case 'center':
        return `${baseClasses} ${marginRightClass} mx-auto ${translateClass}`.trim();
      default:
        return `${baseClasses} ${translateClass}`.trim();
    }
  };
  
  // Generate image border classes
  const imageBorderClasses = imageBorder ? ` border-${frameColor}` : '';
  
  // Generate image height classes - use custom height if provided, otherwise default to h-auto
  const imageHeightClasses = imageHeight ? imageHeight : 'h-auto';
  
  // Generate image width classes - use custom width if provided, otherwise default to w-full
  const imageWidthClasses = imageWidth ? imageWidth : 'w-full';
  
  // Generate max-width class based on imageWidth - convert w-[563px] to max-w-[563px]
  const getMaxWidthClass = () => {
    if (!imageWidth) return 'max-w-full';
    
    // Handle bracket notation like w-[563px]
    if (imageWidth.includes('[') && imageWidth.includes(']')) {
      return imageWidth.replace('w-[', 'max-w-[');
    }
    
    // Handle standard Tailwind classes like w-64, w-80, etc.
    return imageWidth.replace('w-', 'max-w-');
  };
  const maxWidthClass = getMaxWidthClass();

  return (
    <div className={`${getContainerClasses()} ${maxWidthClass}`}>
      {/* Back frame - offset in positive X, negative Y direction */}
      <div 
        className={`absolute inset-0 w-full h-auto  ${borderWidthClass} ${frameColorClass} rounded-sm z-0`}
        style={frameOffsetStyle}
      />
      
      {/* Foreground image - offset in negative X, positive Y direction */}
      <div 
        className="relative w-full z-10"
        style={imageOffsetStyle}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${imageWidthClasses} ${imageHeightClasses} object-cover ${imageBorderClasses} ${imageRounded} ${className} shadow-xl`}
          priority={priority}
        />
      </div>
    </div>
  );
}

// Type export for easier importing
export type { FramedImageProps };
