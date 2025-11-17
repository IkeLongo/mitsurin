import MarblingQualityComparison from "@/components/ui/chart/marbling-quality-comparison";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function USDAGradingSection() {
  return (
    <section
      aria-labelledby="usda-grading-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Content for lg screens and above */}
        <div className="text-center max-w-4xl mx-auto">
          <ScrollAnimationWrapper animationType="slideUp">
            {/* Eyebrow */}
            <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4">
              USDA GRADING
            </p>

            {/* Main Heading */}
            <h3
              id="usda-grading-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-red-900">Beyond </span>
              <span className="text-yellow-600">Prime</span>
            </h3>
          </ScrollAnimationWrapper>

          {/* Description */}
          <ScrollAnimationWrapper animationType="fade" delay={0.2}>
            <p className="text-stone-950 text-lg leading-relaxed mb-12 mx-auto">
              The USDA grades beef based on quality and yield, with the most common quality grades 
              being Prime, Choice, and Select. But Wagyu cattle are genetically predisposed to develop 
              intense marbling—those rich, buttery streaks of fat within the muscle that melt into 
              rich, buttery flavor.
            </p>
          </ScrollAnimationWrapper>

          {/* Component Placeholder */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
            <MarblingQualityComparison />
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}