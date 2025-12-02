import Image from "next/image";
import { InfoHoverEffect } from "@/components/ui/card/hover/info-card-hover-effect";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

interface WagyuBulletPointProps {
  title: string;
}

function WagyuBulletPoint({ title }: WagyuBulletPointProps) {
  return (
    <li className="flex items-start gap-3 text-stone-950">
      {/* Custom bullet point */}
      <div className="mt-1.5 flex-shrink-0">
        <Image
          src="/checkmark-icon.svg"
          alt=""
          width={16}
          height={16}
          className="w-6 h-6"
        />
      </div>
      <span className="leading-relaxed">
        <strong className="font-bold">{title}</strong>
      </span>
    </li>
  );
}

interface BulletPoint {
  title: string;
}

const bulletPoints: BulletPoint[] = [
  {
    title: "100% Japanese Wagyu Genetics",
  },
  {
    title: "No Hormones or Antibiotics",
  },
  {
    title: "Grain-Finished for Deep Marbling",
  },
  {
    title: "Raised Over 3 Years",
  },
  {
    title: "Pasture-Raised on Texas Grasslands",
  },
  {
    title: "Stress-Free, Ethical Handling",
  },
];

function WagyuBulletPointsList() {
  return (
    <div className="rounded-lg py-8 mx-auto max-w-4xl">
      <ul className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6">
        {bulletPoints.map((point, index) => (
          <WagyuBulletPoint
            key={index}
            title={point.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default function ExceptionalQualitySection() {
  return (
    <section
      aria-labelledby="exceptional-quality-heading"
      className="w-full bg-white-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Image */}
          <div className="relative w-full h-full">
            <Image
              src="/wagyu-rib-meal.webp"
              alt="Healthy Wagyu beef showcasing nutritional benefits"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              style={{ borderRadius: '1rem' }}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Text Content */}
          <div>
            <ScrollAnimationWrapper animationType="slideUp">
              {/* Eyebrow */}
              <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                EXCEPTIONAL QUALITY
              </p>

              {/* Main Heading */}
              <h3
                id="health-benefits-heading"
                className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
              >
                <span className="text-primary-800">Crafted Over Years. </span>
                <br />
                <span className="text-accent-dark">Savored in Moments.</span>
              </h3>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
              <p className="text-stone-950 text-lg leading-relaxed">
                Mitsurin Wagyu is full-blooded Japanese beef raised with care, science, 
                and tradition. Every animal is pasture-raised in Hondo, Texas, grain-finished 
                for optimal marbling, and nurtured over <span className="font-bold">three years</span> to deliver the finest beef 
                available.     
              </p>
            </ScrollAnimationWrapper>

            {/* Bullet Points Component */}
            <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
              <WagyuBulletPointsList />
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          <ScrollAnimationWrapper animationType="slideUp">
            {/* Eyebrow */}
            <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
              EXCEPTIONAL QUALITY
            </p>

            {/* Main Heading */}
            <h3
              id="health-benefits-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-primary-800">Crafted Over Years. </span>
              <br />
              <span className="text-accent-dark">Savored in Moments.</span>
            </h3>
          </ScrollAnimationWrapper>

          {/* Image: Positioned after title */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="relative w-full h-64 sm:h-80 mb-8">
              <Image
                src="/wagyu-rib-meal.webp"
                alt="Healthy Wagyu beef showcasing nutritional benefits"
                fill
                className="object-cover rounded-2xl shadow-lg"
                style={{ borderRadius: '1rem' }}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationType="fade" delay={0.4}>
            <p className="text-stone-950 text-lg leading-relaxed">
              Mitsurin Wagyu is full-blooded Japanese beef raised with care, science, 
              and tradition. Every animal is pasture-raised in Hondo, Texas, grain-finished 
              for optimal marbling, and nurtured over three years to deliver the finest beef 
              available.     
            </p>
          </ScrollAnimationWrapper>

          {/* Bullet Points Component */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
            <WagyuBulletPointsList />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}