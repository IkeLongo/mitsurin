
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import Link from "next/link";

export default function ExperienceTheDifferenceSection() {
  return (
    <div 
      className="font-sans flex items-center justify-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url('/mitsurin-wagyu-beef-cuts-south-texas.webp')",
        backgroundPosition: "center 17%",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-slate-900 opacity-50"></div>
      
      <section
        aria-labelledby="experience-the-difference-heading"
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
      >
        {/* Main Heading */}
        <ScrollAnimationWrapper animationType="slideUp">
          <h1 className="text-4xl sm:text-5xl text-white font-bold font-[Montserrat] leading-tight">
            Experience the Difference with <span className="text-accent-dark">Wagyu</span>
          </h1>
        </ScrollAnimationWrapper>

        {/* Description */}
        <ScrollAnimationWrapper animationType="fade" delay={0.2}>
          <p className="mt-10 text-stone-100 text-lg max-w-3xl">
            Elevate every meal with unmatched tenderness, rich marbling, and unforgettable flavor.
          </p>
        </ScrollAnimationWrapper>

        {/* Button */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <Link href="/contact">
            <button className="border-2 border-white hover:bg-gray-200/25 text-white font-semibold mt-10 px-6 py-3 rounded-lg text-md lg:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
              Contact Us
            </button>
          </Link>
        </ScrollAnimationWrapper>

        <div className="w-full h-0.5 bg-accent-dark my-10" />

        <ScrollAnimationWrapper animationType="fade" delay={0.8}>
          <p className="text-white">Learn More About Wagyu</p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="fade" delay={1.0}>
          <p className="text-white mt-4"><a href="https://wagyu.org" target="_blank" rel="noopener noreferrer">American Wagyu Association — wagyu.org</a></p>
        </ScrollAnimationWrapper>

      </section>
    </div>
  );
}