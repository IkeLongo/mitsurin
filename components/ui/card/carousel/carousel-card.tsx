import { cn } from "@/lib/utils";

interface CarouselCardProps {
  number: string | number;
  title: string;
  description: string;
  className?: string;
}

export const CarouselCard = ({
  number,
  title,
  description,
  className,
}: CarouselCardProps) => {
  return (
    <div
      className={cn(
        "h-full w-full rounded-2xl border-2 border-yellow-600 bg-linear-to-b from-[#630710] to-[#8C101C] p-6 py-16 flex flex-col items-center justify-start",
        className
      )}
    >
      {/* Row 1: Number Circle */}
      <div className="flex justify-center items-center mb-6">
        <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center">
          <span className="text-red-900 font-bold font-[Montserrat] text-5xl">
            {number}
          </span>
        </div>
      </div>

      {/* Row 2: Title */}
      <div className="flex-1 flex items-center justify-center mb-6">
        <h4 className="text-white text-4xl font-bold font-[Montserrat] text-center leading-tight">
          {title}
        </h4>
      </div>

      {/* Row 3: Description */}
      <div className="flex-1 flex items-center justify-center px-6">
        <p className="text-white text-xl leading-relaxed text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;