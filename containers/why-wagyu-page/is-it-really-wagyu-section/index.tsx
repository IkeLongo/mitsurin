import Image from "next/image";
import { InfoHoverEffect } from "@/components/ui/card/hover/info-card-hover-effect";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

interface WagyuBulletPointProps {
  title: string;
  description: string;
}

function WagyuBulletPoint({ title, description }: WagyuBulletPointProps) {
  return (
    <li className="flex items-start gap-3 text-stone-950">
      {/* Custom bullet point */}
      <div className="mt-1.5 flex-shrink-0">
        <Image
          src="/bullet-point.svg"
          alt=""
          width={16}
          height={16}
          className="w-4 h-4"
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
    title: "100% Full-Blooded Japanese Genetics ",
    description: "at Mitsurin Wagyu"
  },
  {
    title: "Pasture-Raised in Hondo, Texas ",
    description: "with precision and care"
  },
  {
    title: "No Hormones or Antibiotics ",
    description: "— Pure, natural beef"
  },
  {
    title: "Grain-Finished for Optimal Marbling ",
    description: "and flavor development"
  },
];

function WagyuBulletPointsList() {
  return (
    <div className="rounded-lg py-8 mx-auto max-w-4xl">
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

export default function IsItReallyWagyuSection() {
  return (
    <section
      aria-labelledby="is-it-really-wagyu-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <ScrollAnimationWrapper animationType="slideRight" delay={0.2}>
            <div className="relative flex items-center justify-center">
              <Image
                src="/meaty-wagyu-cow.webp"
                alt="Healthy Wagyu beef showcasing nutritional benefits"
                width={500}
                height={600}
                className="object-cover rounded-2xl"
                style={{ borderRadius: '1rem' }}
                priority
              />
            </div>
          </ScrollAnimationWrapper>

          {/* Right: Text Content */}
          <div>
            <ScrollAnimationWrapper animationType="slideUp">
              {/* Eyebrow */}
              <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                AMERICAN WAGYU
              </p>

              {/* Main Heading */}
              <h3
                id="health-benefits-heading"
                className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
              >
                <span className="text-red-900">Is it Really </span>
                <span className="text-yellow-600">Wagyu?</span>
              </h3>
            </ScrollAnimationWrapper>

            {/* Description */}
            <ScrollAnimationWrapper animationType="scale" delay={0.3}>
              <p className="text-red-900 text-3xl font-bold font-[Montserrat] leading-relaxed">
                YES!
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animationType="fade" delay={0.5}>
              <p className="text-stone-950 text-lg leading-relaxed">
                Wagyu cattle were first imported into the United States in 1975. The United States is the only country who imports Wagyu cattle directly from Japan.
              </p>
            </ScrollAnimationWrapper>

            {/* Bullet Points Component */}
            <ScrollAnimationWrapper animationType="slideUp" delay={0.7}>
              <WagyuBulletPointsList />
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          <ScrollAnimationWrapper animationType="slideUp">
            {/* Eyebrow */}
            <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
              AMERICAN WAGYU
            </p>

            {/* Main Heading */}
            <h3
              id="health-benefits-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-red-900">Is it Really </span>
              <span className="text-yellow-600">Wagyu?</span>
            </h3>
          </ScrollAnimationWrapper>

          {/* Image - Positioned after title */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="relative w-full mb-6">
              <Image
                src="/meaty-wagyu-cow.webp"
                alt="Healthy Wagyu beef showcasing nutritional benefits"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
                style={{ borderRadius: '1rem' }}
                priority
              />
            </div>
          </ScrollAnimationWrapper>

          {/* YES! and rest of content */}
          <ScrollAnimationWrapper animationType="scale" delay={0.4}>
            <p className="text-red-900 text-3xl font-bold font-[Montserrat] leading-relaxed">
              YES!
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationType="fade" delay={0.6}>
            <p className="text-stone-950 text-lg leading-relaxed">
              Wagyu cattle were first imported into the United States in 1975. The United States is the only country who imports Wagyu cattle directly from Japan.
            </p>
          </ScrollAnimationWrapper>

          {/* Bullet Points Component */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.8}>
            <WagyuBulletPointsList />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}