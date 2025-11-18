

import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function TheMitsurinDifferenceSection() {
  return (
    <section
      aria-labelledby="the-mitsurin-difference-heading"
      className="w-full bg-gray-50"
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
            <div className="bg-gray-100 border-2 border-yellow-600 rounded-lg p-8 max-w-2xl mx-auto">
              <h4
                id="the-mitsurin-difference-heading"
                className="text-2xl sm:text-3xl font-bold font-[Montserrat] leading-tight text-red-900 mb-4"
              >
                Experience the Mitsurin Difference
              </h4>
              
              <p className="text-stone-950 text-lg leading-relaxed mb-6">
                Discover why our Wagyu beef stands apart, learn about our available cuts, or get in touch to place your order.
              </p>
              
              <button className="bg-gray-100 hover:bg-gray-200 text-red-900 border-yellow-600 border-2 font-semibold px-6 py-3 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer">
                Get in Touch
              </button>
            </div>
          </ScrollAnimationWrapper>
          
        </div>
      </div>       
    </section>
  );
}