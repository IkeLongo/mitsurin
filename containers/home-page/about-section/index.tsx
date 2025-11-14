import Image from "next/image";
import { Award, Clock, Crown } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

type MeatCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const meatCards: MeatCard[] = [
  { 
    title: "Premium Genetics", 
    description: "100% Japanese bloodline ensures authentic marbling and exceptional flavor profiles.", 
    icon: <Award className="w-10 h-10 text-yellow-600" />
  },
  { 
    title: "Limited Availability", 
    description: "Exclusive seasonal releases with only the finest cuts from our Texas ranch.", 
    icon: <Clock className="w-10 h-10 text-yellow-600" />
  },
  { 
    title: "Culinary Excellence", 
    description: "Experience the world's most prized beef with unmatched tenderness and taste.", 
    icon: <Crown className="w-10 h-10 text-yellow-600" />
  },
];

const bullets = [
  "100% Organic Meat",
  "No Hormones or Antibiotics",
  "Pasture-Raised on Texas Grasslands",
  "Pure Japanese Genetics",
  "Grain Finished for Optimal Marbling",
  "Stress-Free Handling",
];

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-mitsurin-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Desktop */}
          {/* Left: Combined cards + image section */}
          <div className="hidden lg:block lg:relative">
            {/* Background: Framed image */}
            <ScrollAnimationWrapper
              animationType="slideRight"
              duration={0.8}
              delay={0.1}
              initialY={60}
            >
              <div className="relative mx-auto lg:ml-auto">
                {/* Back frame - positioned down and left */}
                <div className="absolute right-4 top-4 w-full h-full border-[6px] border-yellow-600 rounded-sm z-10 max-w-[376px] max-h-[528px]" />
                {/* Foreground image with a 1px border */}
                <div className="">
                  <Image
                    src="/about-section-cow.webp"
                    alt="Marbled Wagyu beef cut"
                    width={376}
                    height={528}
                    className="object-cover border border-yellow-600 ml-auto rounded-xl"
                    priority
                  />
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Foreground: Meat cards positioned absolutely to hover over image */}
            <ScrollAnimationWrapper
              animationType="slideLeft"
              duration={0.8}
              delay={0.3}
              initialY={40}
              className="absolute inset-0 flex flex-col justify-center space-y-4 xl:space-y-6 z-20"
            >
              {meatCards.map(({ title, description, icon }) => (
                <article
                  key={title}
                  className="relative rounded-lg bg-red-900 text-stone-100 p-3 pl-16 min-h-24 shadow-lg xl:shadow-2xl max-w-xs"
                >
                  {/* Icon */}
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    {icon}
                  </div>

                  <h3 className="text-yellow-600 text-lg font-semibold">{title}</h3>
                  <p className="text-xs leading-relaxed">{description}</p>
                </article>
              ))}
            </ScrollAnimationWrapper>
          </div>

          {/* Right: Copy + bullets */}
          <div>
            <ScrollAnimationWrapper
              animationType="slideUp"
              duration={0.8}
              delay={0.2}
              initialY={50}
            >
              {/* Eyebrow */}
              <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                ABOUT MITSURIN WAGYU BEEF
              </p>

              <h2
                id="about-mitsurin-heading"
                className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight"
              >
                <span className="text-red-900">Wagyu is More than a Breed — It's a </span>
                <span className="text-yellow-600">Legacy!</span>
              </h2>
            </ScrollAnimationWrapper>

            {/* Mobile devices */}
            <div className="relative py-6 lg:hidden">
              {/* Background: Framed image */}
              <ScrollAnimationWrapper
                animationType="slideLeft"
                duration={0.8}
                delay={0.1}
                initialY={60}
              >
                <div className="relative mx-auto lg:ml-auto">
                  {/* Back frame - positioned down and left */}
                  <div className="absolute right-4 top-4 w-full h-full border-[6px] border-yellow-600 rounded-sm z-10 max-w-[376px] max-h-[528px]" />
                  {/* Foreground image with a 1px border */}
                  <div className="">
                    <Image
                      src="/about-section-cow.webp"
                      alt="Marbled Wagyu beef cut"
                      width={376}
                      height={528}
                      className="object-cover border border-yellow-600 ml-auto rounded-xl"
                      priority
                    />
                  </div>
                </div>
              </ScrollAnimationWrapper>

              {/* Foreground: Meat cards positioned absolutely to hover over image */}
              <ScrollAnimationWrapper
                animationType="slideRight"
                duration={0.8}
                delay={0.3}
                initialY={40}
                className="absolute inset-0 flex flex-col justify-center space-y-18 xl:space-y-6 z-20"
              >
                {meatCards.map(({ title, description, icon }) => (
                  <article
                    key={title}
                    className="relative rounded-lg bg-red-900/80 md:bg-red-900 text-stone-100 p-3 pl-16 min-h-24 shadow-lg xl:shadow-2xl max-w-xs"
                  >
                    {/* Icon */}
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      {icon}
                    </div>

                    <h3 className="text-yellow-600 text-lg font-semibold">{title}</h3>
                    <p className="text-xs leading-relaxed">{description}</p>
                  </article>
                ))}
              </ScrollAnimationWrapper>
            </div>

            <ScrollAnimationWrapper
              animationType="slideUp"
              duration={0.8}
              delay={0.2}
              initialY={40}
            >
              <p className="mt-6 text-stone-950 text-lg">
                Known for its superior marbling, velvety texture, and rich umami flavor.{" "}
                <strong>Wagyu beef is prized worldwide.</strong> At Mitsurin, we raise&nbsp;
                full-blooded Japanese Wagyu, ensuring purity, consistency, and distinction.
              </p>

              <ul className="mt-8 space-y-3 grid grid-cols-2 gap-x-2 md:gap-x-8 gap-y-0 md:gap-y-3 space-y-0">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-stone-950">
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
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
