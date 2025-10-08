"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image?: string;
    title: string;
    description: string;
    link: string;
    alt: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group flex p-2 h-full w-full" // Changed from "block" to "flex"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-red-900 dark:bg-red-900/[0.8] block rounded-3xl"
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
          <Card>
            <CardImage alt={item.alt}>
              {item.image}
            </CardImage>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-100 relative z-20 flex flex-col", // Added "flex flex-col"
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
}: {
  className?: string;
  children: React.ReactNode;
  alt: string;
}) => {
  return (
    <Image
      src={children ? (children as string) : "/placeholder-image.png"}
      alt={alt}
      width={100} 
      height={100} // You should also add height for Next.js Image
      className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}
    />
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col flex-1 justify-between">
      <p
        className={cn(
          "mt-8 text-zinc-300 tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        {children}
      </p>
      <p className="mt-4 text-yellow-600 font-bold text-sm tracking-wider">
        LEARN MORE
      </p>
    </div>
  );
};

