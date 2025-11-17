import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function WhatIsWagyuSection() {
  return (
    <section
      aria-labelledby="what-is-wagyu-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Mobile/Tablet Layout - Title First */}
        <div className="lg:hidden">
          <ScrollAnimationWrapper animationType="slideUp">
            {/* Eyebrow */}
            <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
              WHAT IS WAGYU?
            </p>

            {/* Main Heading */}
            <h3
              id="what-is-wagyu-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6 text-center"
            >
              <span className="text-red-900">The Pinnacle of </span><br />
              <span className="text-yellow-600">Beef Quality</span>
            </h3>
          </ScrollAnimationWrapper>

          {/* Image */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="relative flex items-center justify-center mb-6">
              <Image
                src="/delicious-sliced-raw-wagyu.webp"
                alt="Premium Wagyu beef cuts showcasing marbling"
                width={600}
                height={400}
                className="object-cover rounded-2xl"
                style={{ borderRadius: '1rem' }}
                priority
              />
            </div>
          </ScrollAnimationWrapper>

          {/* Description */}
          <ScrollAnimationWrapper animationType="fade" delay={0.4}>
            <div>
              <p className="text-stone-950 text-lg leading-relaxed">
                Wagyu represents centuries of selective breeding and meticulous care, 
                resulting in beef that's renowned worldwide for its exceptional marbling, 
                buttery texture, and rich umami flavor. The term "Wagyu" literally means 
                "Japanese cow," and these cattle are raised using traditional methods that 
                prioritize animal welfare and stress-free environments.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animationType="fade" delay={0.6}>
            <div>
              <p className="mt-4 text-stone-950 text-lg leading-relaxed">
                What sets Wagyu apart is its extraordinary intramuscular fat distribution, 
                creating the signature marbling that melts at body temperature. This results 
                in an incredibly tender, flavorful experience that's unlike any other beef. 
                At Mitsurin, we honor these traditions while bringing authentic Wagyu 
                excellence to Texas.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <ScrollAnimationWrapper animationType="slideRight" delay={0.2}>
            <div className="relative flex items-center justify-center">
              <Image
                src="/delicious-sliced-raw-wagyu.webp"
                alt="Premium Wagyu beef cuts showcasing marbling"
                width={600}
                height={400}
                className="object-cover rounded-2xl"
                style={{ borderRadius: '1rem' }}
                priority
              />
            </div>
          </ScrollAnimationWrapper>

          {/* Right: Text Content */}
          <div>
            <ScrollAnimationWrapper animationType="slideUp">
              {/* Eyebrow */}
              <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                WHAT IS WAGYU?
              </p>

              {/* Main Heading */}
              <h3 className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6">
                <span className="text-red-900">The Pinnacle of </span><br />
                <span className="text-yellow-600">Beef Quality</span>
              </h3>
            </ScrollAnimationWrapper>

            {/* Description */}
            <ScrollAnimationWrapper animationType="fade" delay={0.3}>
              <p className="text-stone-950 text-lg leading-relaxed">
                Wagyu represents centuries of selective breeding and meticulous care, 
                resulting in beef that's renowned worldwide for its exceptional marbling, 
                buttery texture, and rich umami flavor. The term "Wagyu" literally means 
                "Japanese cow," and these cattle are raised using traditional methods that 
                prioritize animal welfare and stress-free environments.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animationType="fade" delay={0.5}>
              <p className="mt-4 text-stone-950 text-lg leading-relaxed">
                What sets Wagyu apart is its extraordinary intramuscular fat distribution, 
                creating the signature marbling that melts at body temperature. This results 
                in an incredibly tender, flavorful experience that's unlike any other beef. 
                At Mitsurin, we honor these traditions while bringing authentic Wagyu 
                excellence to Texas.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}