import { cn } from "@/lib/utils";

interface CarouselCardProps {
  number: string | number;
  title: string;
  description: string;
  className?: string;
  styles?: {
    border?: string;
    background?: string;
    paddingY?: string;
    circle?: string;
    titleText?: string;
    numberText?: string;
    descriptionText?: string;
  };
}

export const CarouselCard = ({
  number,
  title,
  description,
  className,
  styles = {},
}: CarouselCardProps) => {
  // Default styles
  const defaultStyles = {
    border: "border-yellow-600",
    background: "bg-gradient-to-b from-[#630710] to-[#8C101C]",
    paddingY: "py-16",
    circle: "bg-yellow-600",
    titleText: "text-white",
    numberText: "text-red-900",
    descriptionText: "text-white",
  };

  // Merge provided styles with defaults
  const mergedStyles = { ...defaultStyles, ...styles };

  return (
    <div
      className={cn(
        `h-full w-full rounded-2xl border-2 ${mergedStyles.border} ${mergedStyles.background} p-6 ${mergedStyles.paddingY} flex flex-col items-center justify-start`,
        className
      )}
    >
      {/* Row 1: Number Circle */}
      <div className="flex justify-center items-center mb-6">
        <div className={cn(
          `w-20 h-20 ${mergedStyles.circle} rounded-full flex items-center justify-center`
        )}>
          <span className={cn(
            `${mergedStyles.numberText} font-bold font-[Montserrat] text-5xl`
          )}>
            {number}
          </span>
        </div>
      </div>

      {/* Row 2: Title */}
      <div className="h-24 flex items-center justify-center mb-6">
        <h4 className={cn(
          `${mergedStyles.titleText} text-4xl font-bold font-[Montserrat] text-center leading-tight`
        )}>
          {title}
        </h4>
      </div>

      {/* Row 3: Description */}
      <div className="h-32 flex items-start justify-center px-6">
        <p className={cn(
          `${mergedStyles.descriptionText} text-xl leading-relaxed text-center`
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;