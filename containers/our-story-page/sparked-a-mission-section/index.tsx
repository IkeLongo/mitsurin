import Image from "next/image";
import { InfoHoverEffect } from "@/components/ui/card/hover/info-card-hover-effect";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import { FramedImage } from "@/components/ui/card/framed-image";

export default function SparkedMissionSection() {
  return (
    <section
      aria-labelledby="sparked-mission-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 pr-10 items-center">
          {/* Left: Text Content */}
          <div>
            <ScrollAnimationWrapper animationType="slideUp">
              {/* Eyebrow */}
              <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                OUR ORIGIN STORY
              </p>

              {/* Main Heading */}
              <h3
                id="sparked-mission-heading"
                className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
              >
                <span className="text-red-900">A Moment That Sparked a Mission</span>
              </h3>
            </ScrollAnimationWrapper>

            {/* Description */}
            <ScrollAnimationWrapper animationType="fade" delay={0.2}>
              <div className="space-y-4">
                <p className="text-stone-950 text-lg leading-relaxed">
                  Dr. Michael Selva had owned his ranch in Hondo, Texas for about 15 years when his 
                  life took an unexpected turn during a trip to Las Vegas. He was there to celebrate 
                  his niece's 21st birthday when his brother treated him to something extraordinary—a 
                  Wagyu steak dinner.
                </p>
                
                <p className="text-stone-950 text-lg leading-relaxed">
                  That first bite was a revelation. Dr. Selva was completely blown away by the richness, 
                  the marbling, the melt-in-your-mouth texture that made every other steak he'd ever 
                  had pale in comparison. This was not just beef—this was an experience.
                </p>
                
                <p className="text-stone-950 text-lg leading-relaxed">
                  But Wagyu beef is expensive and hard to come by. Rather than accept this as a rare 
                  luxury, Dr. Selva had a different idea:
                </p>

                <p className="text-red-900 text-lg leading-relaxed italic font-bold">
                  What if I could raise my own Wagyu cattle and share this incredible experience 
                  with my friends and family?
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Right: Framed Image */}
          {/* Background: Framed image */}
          <ScrollAnimationWrapper
            animationType="slideLeft"
            duration={0.8}
            delay={0.1}
            initialY={60}
          >
            <FramedImage
              src="/juicy-tbone-wagyu-steak.webp"
              alt="Marbled Wagyu beef cut"
              width={376}
              height={528}
              containerAlignment="ml-auto"
              frameColor="yellow-600"
              offsetRight={10}
              offsetTop={10}
              priority
            />
          </ScrollAnimationWrapper>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          <ScrollAnimationWrapper animationType="slideUp">
            {/* Eyebrow */}
            <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
              OUR ORIGIN STORY
            </p>

            {/* Main Heading */}
            <h3
              id="sparked-mission-heading-mobile"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-red-900">A Moment That Sparked a Mission</span>
            </h3>
          </ScrollAnimationWrapper>

          {/* Image - Positioned after heading */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="relative w-full mb-6">
              <Image
                src="/juicy-tbone-wagyu-steak.webp"
                alt="Marbled Wagyu beef cut"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
                style={{ borderRadius: '1rem' }}
                priority
              />
            </div>
          </ScrollAnimationWrapper>

          {/* Description */}
          <ScrollAnimationWrapper animationType="fade" delay={0.4}>
            <div className="space-y-4 mb-6">
              <p className="text-stone-950 text-lg leading-relaxed">
                Dr. Michael Selva had owned his ranch in Hondo, Texas for about 15 years when his 
                life took an unexpected turn during a trip to Las Vegas. He was there to celebrate 
                his niece's 21st birthday when his brother treated him to something extraordinary—a 
                Wagyu steak dinner.
              </p>
              
              <p className="text-stone-950 text-lg leading-relaxed">
                That first bite was a revelation. Dr. Selva was completely blown away by the richness, 
                the marbling, the melt-in-your-mouth texture that made every other steak he'd ever 
                had pale in comparison. This was not just beef—this was an experience.
              </p>
              
              <p className="text-stone-950 text-lg leading-relaxed">
                But Wagyu beef is expensive and hard to come by. Rather than accept this as a rare 
                luxury, Dr. Selva had a different idea:
              </p>

              <p className="text-red-900 text-lg leading-relaxed italic font-bold">
                What if I could raise my own Wagyu cattle and share this incredible experience 
                with my friends and family?
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}