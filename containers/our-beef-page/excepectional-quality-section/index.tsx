import Image from "next/image";
import { InfoHoverEffect } from "@/components/ui/card/hover/info-card-hover-effect";

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
      <ul className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 lg:space-y-0">
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
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="relative w-full aspect-square"> {/* or aspect-[4/3] for specific ratio */}
            <Image
              src="/wagyu-rib-meal.webp"
              alt="Healthy Wagyu beef showcasing nutritional benefits"
              fill
              className="object-cover rounded-2xl"
              style={{ borderRadius: '1rem' }}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Text Content */}
          <div>
            {/* Eyebrow */}
            <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
              EXCEPTIONAL QUALITY
            </p>

            {/* Main Heading */}
            <h3
              id="health-benefits-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-red-900">Crafted Over Years. </span>
              <br />
              <span className="text-yellow-600">Savored in Moments.</span>
            </h3>

            <p className="text-stone-950 text-lg leading-relaxed">
              Mitsurin Wagyu is full-blooded Japanese beef raised with care, science, 
              and tradition. Every animal is pasture-raised in Hondo, Texas, grain-finished 
              for optimal marbling, and nurtured over three years to deliver the finest beef 
              available.     
            </p>

            {/* Bullet Points Component */}
            <WagyuBulletPointsList />
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
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

          {/* Image - Positioned after title */}
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

          {/* YES! and rest of content */}
          <p className="text-red-900 text-3xl font-bold font-[Montserrat] leading-relaxed">
            YES!
          </p>

          <p className="text-stone-950 text-lg leading-relaxed">
            Wagyu cattle were first imported into the United States in 1975. The United States is the only country who imports Wagyu cattle directly from Japan.
          </p>

          {/* Bullet Points Component */}
          <WagyuBulletPointsList />
        </div>
      </div>
    </section>
  );
}