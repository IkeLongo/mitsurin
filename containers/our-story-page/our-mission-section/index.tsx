

import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function OurMissionSection() {
  return (
    <section
      aria-labelledby="our-mission-heading"
      className="w-full bg-gradient-to-b from-[#7f1d1d] to-[#450a0f]"
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
              id="our-mission-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Montserrat] leading-tight text-stone-900"
            >
              <span className="text-yellow-600">Our Mission</span>
            </h3>
          </ScrollAnimationWrapper>

          {/* Rest of Content Group */}
          <ScrollAnimationWrapper
            animationType="fade"
            duration={0.9}
            delay={0.4}
            initialY={40}
          >
            {/* Description */}
            <div className="text-lg sm:text-xl lg:text-2xl text-white font-light leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                What began as one man's desire to share an incredible dining experience with 
                friends and family has grown into a mission to make premium Wagyu beef 
                accessible and affordable for more people.
              </p>
              <p>
                Every cow we raise represents our commitment to quality, care, and the belief 
                that everyone deserves to experience the extraordinary taste that changed Dr. 
                Selva's life that night in Las Vegas.
              </p>
            </div>
          </ScrollAnimationWrapper>
          
        </div>
      </div>       
    </section>
  );
}