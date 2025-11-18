

import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function BreedingandRaisingSection() {
  return (
    <section
      aria-labelledby="breeding-and-raising-heading"
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
            <h3
              id="breeding-and-raising-heading"
              className="text-4xl sm:text-4xl lg:text-5xl font-bold font-[Montserrat] leading-tight text-stone-900"
            >
              <span className="text-red-900">Our Breeding & Raising Program</span>
            </h3>
          </ScrollAnimationWrapper>

          {/* Rest of Content Group */}
          <ScrollAnimationWrapper
            animationType="fade"
            duration={0.9}
            delay={0.4}
            initialY={40}
          >
            <p className="text-lg text-stone-950 leading-relaxed max-w-3xl mx-auto">
              Raising premium Wagyu cattle is a commitment that takes patience, expertise, and nearly three years per animal.
            </p>
          </ScrollAnimationWrapper>
          
        </div>
      </div>       
    </section>
  );
}