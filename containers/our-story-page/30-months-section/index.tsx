import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function ThirtyMonthsSection() {
  return (
    <section
      aria-labelledby="thirty-months-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <ScrollAnimationWrapper animationType="slideUp">
          <div className="bg-red-900 rounded-lg p-8 mx-auto max-w-4xl">
            {/* Title */}
            <h3
              id="thirty-months-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6 text-center text-yellow-600"
            >
              30 Months!
            </h3>
            {/* Description */}
            <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto space-y-4 text-center">
              From birth to processing, each animal receives close to three years of dedicated 
              care and expert nutrition to ensure the highest quality Wagyu beef.
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}