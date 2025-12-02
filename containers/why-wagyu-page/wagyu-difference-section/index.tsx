import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

interface WagyuBulletPointProps {
  title: string;
  description: string;
}

function WagyuBulletPoint({ title, description }: WagyuBulletPointProps) {
  return (
    <li className="flex items-start gap-3 text-white-900">
      {/* Custom bullet point */}
      <div className="mt-1.5 flex-shrink-0">
        <Image
          src="/bullet-point.svg"
          alt=""
          width={16}
          height={16}
          className="w-4 h-4 text-white-50"
        />
      </div>
      <span className="leading-relaxed">
        <strong className="font-bold">{title}</strong> {description}
      </span>
    </li>
  );
}

interface BulletPoint {
  title: string;
  description: string;
}

const bulletPoints: BulletPoint[] = [
  {
    title: "Exceptional Marbling:",
    description: "Intricate fat distribution creates unparalleled tenderness and rich, buttery flavor that melts in your mouth."
  },
  {
    title: "Pure Japanese Genetics:",
    description: "Our cattle descend from authentic Japanese bloodlines, ensuring the highest quality and traditional characteristics."
  },
  {
    title: "Premium Care & Feeding:",
    description: "Stress-free environment with carefully crafted diet produces superior meat quality and optimal flavor development."
  }
];

function WagyuBulletPointsList() {
  return (
    <div className="bg-primary-800 rounded-lg p-8 mx-auto max-w-4xl">
      <ul className="space-y-6">
        {bulletPoints.map((point, index) => (
          <WagyuBulletPoint
            key={index}
            title={point.title}
            description={point.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default function WagyuDifferenceSection() {
  return (
    <section
      aria-labelledby="wagyu-difference-heading"
      className="w-full bg-white-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <ScrollAnimationWrapper animationType="slideUp">
          {/* Eyebrow */}
          <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
            THE WAGYU DIFFERENCE
          </p>

          {/* Main Heading */}
          <h3
            id="wagyu-difference-heading"
            className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-12 text-center text-primary-800"
          >
            What Makes Wagyu Special?
          </h3>
        </ScrollAnimationWrapper>

        {/* Bullet Points Component */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <WagyuBulletPointsList />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}