"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import { useState } from "react";

export const HoverEffect = ({
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
  };
}) => {
  // Default styles
  const defaultStyles = {
    hover: "bg-red-900",
    card: "bg-slate-900",
    title: "text-zinc-100",
    description: "text-zinc-300",
    learnMore: "text-yellow-600",
  };

  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 py-10",
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
                  className={`absolute inset-0 h-full w-full ${mergedStyles.hover} dark:${mergedStyles.hover}/[0.8] block rounded-3xl`}
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
            <Card bgColor={mergedStyles.card}>
              <CardImage alt={item.alt} icon={item.icon}>
                {item.image}
              </CardImage>
              <CardTitle textColor={mergedStyles.title}>{item.title}</CardTitle>
              <CardDescription 
                showLearnMore={showLearnMore}
                descriptionColor={mergedStyles.description}
                learnMoreColor={mergedStyles.learnMore}
              >
                {item.description}
              </CardDescription>
            </Card>
          </CardWrapper>
        );
      })}
    </div>
  );
};

export const Card = ({
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
      <div className="relative z-50 flex-1 flex flex-col"> {/* Added flex classes */}
        <div className="p-4 flex-1 flex flex-col">{children}</div> {/* Added flex classes */}
      </div>
    </div>
  );
};
export const CardImage = ({
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
    <Image
      src={children ? (children as string) : "/placeholder-image.png"}
      alt={alt}
      width={100} 
      height={100}
      className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}
    />
  );
};
export const CardTitle = ({
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
export const CardDescription = ({
  className,
  children,
  showLearnMore = true,
  descriptionColor = "text-zinc-300",
  learnMoreColor = "text-yellow-600",
}: {
  className?: string;
  children: React.ReactNode;
  showLearnMore?: boolean;
  descriptionColor?: string;
  learnMoreColor?: string;
}) => {
  return (
    <div className="flex flex-col flex-1 justify-between">
      <p
        className={cn(
          `mt-8 ${descriptionColor} tracking-wide leading-relaxed`,
          className
        )}
      >
        {children}
      </p>
      {showLearnMore && (
        <p className={`mt-4 ${learnMoreColor} font-bold tracking-wider`}>
          LEARN MORE
        </p>
      )}
    </div>
  );
};

