

import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function DiscoverSection() {
  return (
    <section
      aria-labelledby="discover-mitsurin-heading"
      className="w-full bg-primary-800"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <ScrollAnimationWrapper
            animationType="slideUp"
            duration={0.8}
            delay={0.1}
            initialY={60}
            className="mb-8"
          >
            <h3
              id="discover-mitsurin-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Montserrat] leading-tight text-stone-900"
            >
              <span className="text-white">Discover the </span>
              <span className="text-yellow-600">Mitsurin</span>
              <span className="text-white"> Difference</span>
            </h3>
          </ScrollAnimationWrapper>

          {/* Rest of Content Group */}
          <ScrollAnimationWrapper
            animationType="fade"
            duration={0.9}
            delay={0.4}
            initialY={40}
          >
            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white font-light italic leading-relaxed mb-12">
              "Every cut tells a story of tradition, passion, and uncompromising quality. 
              Experience Wagyu beef the way it was meant to be."
            </blockquote>

            {/* Author */}
            <cite className="block text-white text-lg font-medium mb-12">
              — Dr. Michael Selva
            </cite>

            <div className="flex flex-col items-center justify-center gap-6">
              {/* Button */}
              <button className="bg-white hover:bg-gray-200 text-primary-800 font-semibold px-6 py-3 rounded-lg text-md lg:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                Explore Our Products
              </button>

              <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B8860B_0%,#8B0000_50%,#B8860B_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-primary-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Explore Our Products
                </span>
              </button>
            </div>
          </ScrollAnimationWrapper>
          
        </div>
      </div>       
    </section>
  );
}