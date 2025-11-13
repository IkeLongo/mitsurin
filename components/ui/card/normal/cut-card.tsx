import { cn } from "@/lib/utils";

interface CutCardProps {
  title: string;
  bulletPoints: string[];
  className?: string;
}

export default function CutCard({ title, bulletPoints, className }: CutCardProps) {
  return (
    <div
      className={cn(
        "border-2 border-red-900 rounded-lg bg-white shadow-lg p-6 m-4",
        className
      )}
    >
      {/* Title */}
      <h3 className="text-red-900 font-bold text-xl mb-4">
        {title}
      </h3>
      
      {/* Yellow horizontal line */}
      <div className="w-full h-[3px] bg-yellow-600 rounded-full mb-6"></div>
      
      {/* Bullet Points */}
      <ul className="space-y-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Circular bullet point */}
            <div className="mt-2 flex-shrink-0">
              <div className="w-1 h-1 bg-yellow-600 rounded-full"></div>
            </div>
            <span className="text-stone-700 leading-relaxed">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
