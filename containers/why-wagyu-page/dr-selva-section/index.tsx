import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import SpinAnimation from "@/components/ui/animation/spin-animation";

export default function DrSelvaSection() {
  return (
    <section
      aria-labelledby="dr-selva-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Quote Box */}
        <ScrollAnimationWrapper animationType="slideUp">
          <div className="bg-primary-800 border-2 border-accent-dark rounded-2xl p-8 md:p-12 max-w-4xl mx-auto flex justify-center flex-col items-center text-center">
            {/* Quotation Mark */}
            <ScrollAnimationWrapper animationType="scale" delay={0.2}>
              <div className="mb-4">
                <SpinAnimation 
                  src="/quotation.svg"
                  alt="Quote"
                  className="w-10 h-10 md:w-12 md:h-12"
                  delay={0.5}
                />
              </div>
            </ScrollAnimationWrapper>

            {/* Quote Text */}
            <ScrollAnimationWrapper animationType="fade" delay={0.4}>
              <blockquote className="text-white italic font-[montserrat] text-lg md:text-xl lg:text-3xl leading-relaxed mb-8 font-light">
                "It can be part of a balanced diet that supports heart health, without sacrificing taste. 
                With its melt-in-your-mouth texture and unmatched flavor, Wagyu offers a luxurious 
                experience with a nutritional edge."
              </blockquote>
            </ScrollAnimationWrapper>

            {/* Horizontal Line */}
            <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
              <div className="w-full h-px bg-accent-dark mb-6"></div>
            </ScrollAnimationWrapper>

            {/* Attribution */}
            <ScrollAnimationWrapper animationType="fade" delay={0.8}>
              <cite className="text-accent-dark text-lg md:text-xl font-semibold not-italic">
                Dr. Michael Selva
              </cite>
            </ScrollAnimationWrapper>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}