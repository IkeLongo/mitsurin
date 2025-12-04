

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
              <span className="text-white">The </span>
              <span className="text-white">Finest</span>
              <span className="text-white"> Beef that can be Produced!</span>
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
              "As a physician, I believe in doing things the right way—with care, 
              science, and purpose. Our beef reflects that philosophy."
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
            </div>
          </ScrollAnimationWrapper>
          
        </div>
      </div>       
    </section>
  );
}