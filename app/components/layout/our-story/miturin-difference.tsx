

import ScrollAnimationWrapper from "@/app/components/ui/animation/scroll-animation-wrapper";
import { TrackedCTA } from "@/app/components/analytics/tracked-cta";

export default function TheMitsurinDifferenceSection() {
  return (
    <section
      aria-labelledby="the-mitsurin-difference-heading"
      className="w-full bg-white-100"
    >
      <div className="max-w-3xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <ScrollAnimationWrapper
            animationType="slideUp"
            duration={0.8}
            delay={0.1}
            initialY={60}
            className="mb-8"
          >
            <div className="bg-gray-100 border-2 border-accent-dark rounded-lg p-8 mx-auto">
              <h4
                id="the-mitsurin-difference-heading"
                className="text-4xl font-bold font-[Montserrat] leading-tight text-primary-800 mb-4"
              >
                Experience the Mitsurin Difference
              </h4>
              
              <p className="text-stone-950 text-lg leading-relaxed mb-6 max-w-xl mx-auto">
                Discover why our Wagyu beef stands apart, learn about our available cuts, or get in touch to place your order.
              </p>
              
              <TrackedCTA
                href="/contact"
                cta_id="our-story-mitsurin-difference-contact"
                label="Get in Touch"
                className="bg-primary-800 hover:bg-primary-900 text-white-50 font-semibold px-6 py-3 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl hover:cursor-pointer"
                location="Our Story - Mitsurin Difference Section"
              >
                Get in Touch
              </TrackedCTA>
            </div>
          </ScrollAnimationWrapper>
          
        </div>
      </div>       
    </section>
  );
}