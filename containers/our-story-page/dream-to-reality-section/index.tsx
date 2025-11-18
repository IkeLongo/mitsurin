import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import { FramedImage } from "@/components/ui/card/framed-image";

export default function GrowingTheDreamSection() {
  return (
    <section
      aria-labelledby="growing-the-dream-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 pr-10 items-center">
          {/* Left: Framed Image */}
          {/* Background: Framed image */}
          <ScrollAnimationWrapper
            animationType="slideRight"
            duration={0.8}
            delay={0.1}
            initialY={60}
          >
            <FramedImage
              src="/beefy-wagyu-smiling-at-camera.webp"
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

          {/* Right: Text Content */}
          <div className="ml-10">
            <ScrollAnimationWrapper animationType="slideUp">
              {/* Eyebrow */}
              <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                GROWING THE DREAM
              </p>

              {/* Main Heading */}
              <h3
                id="growing-the-dream-heading"
                className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
              >
                <span className="text-red-900">From Dream to Reality</span>
              </h3>
            </ScrollAnimationWrapper>

            {/* Description */}
            <ScrollAnimationWrapper animationType="fade" delay={0.2}>
              <div className="space-y-4">
                <p className="text-stone-950 text-lg leading-relaxed">
                  What started as a personal quest to enjoy Wagyu beef has grown into something 
                  much bigger. Dr. Selva began with about 15 Wagyu cows, learning the intricate 
                  art of raising these remarkable animals on his ranch in Hondo, Texas.
                </p>
                
                <p className="text-stone-950 text-lg leading-relaxed">
                  Through dedication, research, and a commitment to quality, the herd has grown 
                  to <span className="font-bold text-red-900">50 Cows</span> —all born and raised 
                  right here on the ranch. Each animal receives the care and attention needed to 
                  produce the exceptional beef that first captivated Dr. Selva in Las Vegas.
                </p>
                
                <p className="text-stone-950 text-lg leading-relaxed">
                  Now, Dr. Selva wants to share this extraordinary beef with a wider circle, making 
                  it affordable and available to more people so they too can have an out-of-this-world 
                  tasting experience.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          <ScrollAnimationWrapper animationType="slideUp">
            {/* Eyebrow */}
            <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
              GROWING THE DREAM
            </p>

            {/* Main Heading */}
            <h3
              id="growing-the-dream-heading-mobile"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-red-900">From Dream to Reality</span>
            </h3>
          </ScrollAnimationWrapper>

          {/* Image - Positioned after heading */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
            <div className="relative w-full mb-6">
              <Image
                src="/beefy-wagyu-smiling-at-camera.webp"
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
                What started as a personal quest to enjoy Wagyu beef has grown into something 
                much bigger. Dr. Selva began with about 15 Wagyu cows, learning the intricate 
                art of raising these remarkable animals on his ranch in Hondo, Texas.
              </p>
              
              <p className="text-stone-950 text-lg leading-relaxed">
                Through dedication, research, and a commitment to quality, the herd has grown 
                to <span className="font-bold text-red-900">50 Cows</span> —all born and raised 
                right here on the ranch. Each animal receives the care and attention needed to 
                produce the exceptional beef that first captivated Dr. Selva in Las Vegas.
              </p>
              
              <p className="text-stone-950 text-lg leading-relaxed">
                Now, Dr. Selva wants to share this extraordinary beef with a wider circle, making 
                it affordable and available to more people so they too can have an out-of-this-world 
                tasting experience.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}