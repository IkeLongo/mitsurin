
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import Link from "next/link";

export default function ReadyToReserveSection() {
  return (
    <div 
      className="font-sans flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/wagyu-farm-land-in-hondo-texas.webp')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-red-900 opacity-90"></div>
      
      <section
        aria-labelledby="ready-to-reserve-heading"
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
      >
        {/* Main Heading */}
        <ScrollAnimationWrapper animationType="slideUp">
          <h4 className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight">
            Ready to Reserve?
          </h4>
        </ScrollAnimationWrapper>

        {/* Description */}
        <ScrollAnimationWrapper animationType="fade" delay={0.2}>
          <p className="mt-10 text-stone-100 text-lg max-w-3xl">
            This isn't just beef. It's an investment in quality, tradition, and taste.
          </p>
        </ScrollAnimationWrapper>

        {/* Button */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
          <Link href="/contact">
            <button className="border-2 bg-white border-white hover:bg-gray-200 text-red-900 font-semibold mt-10 px-6 py-3 rounded-lg text-md lg:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
              Contact Us to Reserve Your Share
            </button>
          </Link>
        </ScrollAnimationWrapper>

        {/* Description */}
        <ScrollAnimationWrapper animationType="fade" delay={0.6}>
          <p className="mt-10 text-stone-100 text-md max-w-3xl italic">
            Due to high demand and seasonal availability, early reservations are encouraged.
          </p>
        </ScrollAnimationWrapper>

        {/* Yellow Horizontal Line */}
        <div className="w-full h-0.5 bg-yellow-600 my-20" />

        <ScrollAnimationWrapper animationType="fade" delay={1.0}>
          <p>Learn More About Wagyu</p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="fade" delay={1.2}>
          <p className="text-yellow-600 mt-4"><a href="https://wagyu.org" target="_blank" rel="noopener noreferrer">American Wagyu Association — wagyu.org</a></p>
        </ScrollAnimationWrapper>

      </section>
    </div>
  );
}