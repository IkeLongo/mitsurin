import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import { Container, Package } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import { link } from "fs";
import Image from "next/image";

export default function WhyMitsurinSection() {
  return (
    <div 
      className="font-sans flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/wagyu-japanese-background.webp')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-primary-800 opacity-90"></div>
      
      <section
        aria-labelledby="why-mitsurin-heading"
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
      >
        {/* Main Heading */}
        <ScrollAnimationWrapper animationType="slideUp">
          <h1 className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight">
            Why <span className="text-accent-dark">"Mitsurin"</span>
          </h1>
        </ScrollAnimationWrapper>

        {/* Cards */}
        <ScrollAnimationWrapper
          animationType="slideUp"
          duration={0.9}
          delay={0.5}
          initialY={60}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 max-w-4xl mx-auto">
            <HoverEffect
              styles={{
                hover:"bg-gray-50",
                title:"text-2xl"
              }}
              items={packages}
              enableLinks={false}
              showLearnMore={false}
            />
          </div>
        </ScrollAnimationWrapper>

        {/* Description */}
        <ScrollAnimationWrapper animationType="fade" delay={0.2}>
          <p className="text-stone-100 text-lg max-w-3xl">
            The ranch's name bridges Dr. Selva's heritage with the Japanese tradition of Wagyu cattle, 
            creating a meaningful connection between two cultures united by a passion for excellence.
          </p>
        </ScrollAnimationWrapper>

      </section>
    </div>
  );
}

export const packages = [
  {
    title: "Mitsurin",
    description:
      `In Japanese, Mitsurin refers to a dense forest or wooded grove - 
      a place of natural harmony, growth, and quiet strength`,
    icon: (
          <div className="rounded-full flex items-center justify-center mx-auto">
            <Image 
              src="/mitsurin-jungle-jp-serif-lighter.svg" 
              alt="Japanese jungle symbol"
              width={300}
              height={400}
              className="object-contain"
            />
          </div>
        ),
    link: "#",
    alt: "Japanese jungle meaning",
  },
  {
    title: "Selva",
    description:
      `Selva is the Spanish word for a lush tropical rainforest or jungle 
      evoking images of thick vegetation and thriving biodiversity. `,
    icon: (
      <div className="rounded-full flex items-center justify-center mx-auto">
            <Image 
              src="/selva-serif-gradient-lighter.svg" 
              alt="Japanese jungle symbol"
              width={300}
              height={400}
              className="object-contain"
            />
          </div>
    ),
    link: "#",
    alt: "Selva meaning",
  },
];