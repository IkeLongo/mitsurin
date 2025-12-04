"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const ProductHoverEffect = ({
  items,
  className,
  showLearnMore = true,
  enableLinks = true,
  styles = {},
}: {
  items: {
    image?: string;
    icon?: React.ReactNode;
    title: string;
    description: string;
    bulletPoints?: string[];
    link: string;
    alt: string;
  }[];
  className?: string;
  showLearnMore?: boolean;
  enableLinks?: boolean;
  styles?: {
    hover?: string;
    card?: string;
    title?: string;
    description?: string;
    learnMore?: string;
    bulletPoint?: string;
  };
}) => {
  // Default styles
  const defaultStyles = {
    hover: "bg-red-900",
    card: "bg-slate-900",
    title: "text-zinc-100",
    description: "text-zinc-300",
    learnMore: "text-yellow-600",
    bulletPoint: "text-zinc-300",
  };

  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 pb-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const CardWrapper = enableLinks ? 'a' : 'div';
        const wrapperProps = enableLinks 
          ? { href: item?.link }
          : {};

        return (
          <CardWrapper
            {...wrapperProps}
            key={`card-${idx}`}
            className="relative group flex p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={`absolute inset-0 h-full w-full ${mergedStyles.hover} block rounded-3xl`}
                  layoutId="hoverBackground"
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
            <ProductCard bgColor={mergedStyles.card}>
              <ProductCardImage alt={item.alt} icon={item.icon}>
                {item.image}
              </ProductCardImage>
              <ProductCardTitle textColor={mergedStyles.title}>{item.title}</ProductCardTitle>
              <ProductCardDescription 
                description={item.description}
                bulletPoints={item.bulletPoints}
                showLearnMore={showLearnMore}
                descriptionColor={mergedStyles.description}
                learnMoreColor={mergedStyles.learnMore}
                bulletPointColor={mergedStyles.bulletPoint}
              />
            </ProductCard>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export const ProductCard = ({
  className,
  children,
  bgColor = "bg-slate-900",
}: {
  className?: string;
  children: React.ReactNode;
  bgColor?: string;
}) => {
  return (
    <div
      className={cn(
        `rounded-2xl h-full w-full p-4 overflow-hidden ${bgColor} group-hover:border-slate-100 relative z-20 flex flex-col`,
        className
      )}
    >
      <div className="relative z-50 flex-1 flex flex-col">
        <div className="p-4 flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export const ProductCardImage = ({
  className,
  children,
  alt,
  icon,
}: {
  className?: string;
  children: React.ReactNode;
  alt: string;
  icon?: React.ReactNode;
}) => {
  // If icon is provided, render it instead of an image
  if (icon) {
    return (
      <div className={cn("flex justify-center items-center mt-4", className)}>
        {icon}
      </div>
    );
  }

  // Otherwise render the image as before
  return (
    <div className={cn("flex justify-center items-center mt-4", className)}>
      <Image
        src={children ? (children as string) : "/placeholder-image.png"}
        alt={alt}
        width={100} 
        height={100}
        className="object-contain"
      />
    </div>
  );
};

export const ProductCardTitle = ({
  className,
  children,
  textColor = "text-zinc-100",
}: {
  className?: string;
  children: React.ReactNode;
  textColor?: string;
}) => {
  return (
    <h4 className={cn(`${textColor} font-bold tracking-wide mt-4`, className)}>
      {children}
    </h4>
  );
};

export const ProductCardDescription = ({
  className,
  description,
  bulletPoints,
  showLearnMore = true,
  descriptionColor = "text-zinc-300",
  learnMoreColor = "text-yellow-600",
  bulletPointColor = "text-zinc-300",
}: {
  className?: string;
  description: string;
  bulletPoints?: string[];
  showLearnMore?: boolean;
  descriptionColor?: string;
  learnMoreColor?: string;
  bulletPointColor?: string;
}) => {
  return (
    <div className="flex flex-col flex-1 justify-between">
      <div>
        {/* Main Description */}
        <p
          className={cn(
            `mt-8 ${descriptionColor} tracking-wide leading-relaxed`,
            className
          )}
        >
          {description}
        </p>

        {/* Bullet Points - Single Column Layout */}
        {bulletPoints && bulletPoints.length > 0 && (
          <div className="mt-6">
            <ul className="space-y-3">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  {/* Circular bullet point */}
                  <div className="mt-2 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-900 rounded-full"></div>
                  </div>
                  <span className={`${bulletPointColor} text-sm leading-relaxed`}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Learn More */}
      {showLearnMore && (
        <p className={`mt-8 ${learnMoreColor} font-bold tracking-wider`}>
          LEARN MORE
        </p>
      )}
    </div>
  );
};