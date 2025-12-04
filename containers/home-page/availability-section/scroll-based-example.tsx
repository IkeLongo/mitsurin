// Alternative implementation using scroll progress
import { NumberedLadder } from "@/components/ui/ladder/numbered-ladder";
import { GalleryCard } from "@/components/ui/card/gallery/gallery-click-effect";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import { useScrollBasedPreloader } from "@/hooks/use-scroll-based-preloader";

const ladderItems = [
  { 
    number: 1, 
    text: `Our full-blooded Japanese Wagyu are raised slowly over 30+ months 
    on Texas grasslands to ensure optimal marbling, tenderness, and flavor.`
  },
  { 
    number: 2, 
    text: `Because of our slow-growth, high-quality process, availability is 
    extremely limited and seasonal. We raise only a select number of animals 
    per year to maintain our exceptional standards.`
  },
  { 
    number: 3, 
    text: `We recommend contacting us well in advance to reserve your Wagyu 
    beef share. All orders are fulfilled on a first-come, first-served basis.`
  },
  { 
    number: 4, 
    text: `Once reserved, you can choose your preferred butcher or select from 
    our available pre-processed cuts. Pickup and delivery options are available 
    based on your location.`
  },
];

const galleryImages = [
  { src: "/steak-gallery-1.webp", alt: "Wagyu beef cut 1", className: "rounded-xl" },
  { src: "/steak-gallery-2.webp", alt: "Wagyu beef cut 2", className: "rounded-xl" },
  { src: "/steak-gallery-3.webp", alt: "Wagyu beef cut 3", className: "rounded-xl" },
];

export default function AvailabilitySectionScrollBased() {
  // Alternative: Preload images when user has scrolled 50% through the page
  const hasPreloaded = useScrollBasedPreloader({
    images: galleryImages.map(img => img.src),
    triggerPercent: 0.5 // Load when user is 50% through the page
  });

  return (
    <section
      aria-labelledby="availability-mitsurin-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Product Availability */}
          <ScrollAnimationWrapper
            animationType="slideUp"
            duration={0.8}
            delay={0.1}
            initialY={60}
          >
            <div>
              <h3
                id="availability-mitsurin-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Montserrat] leading-tight text-red-900 mb-8"
              >
                Product Availability
              </h3>
              
              {/* Ladder Component Placeholder */}
              <NumberedLadder items={ladderItems} />
            </div>
          </ScrollAnimationWrapper>

          {/* Right Column: Additional Content */}
          <GalleryCard images={galleryImages} />
        </div>
      </div>
    </section>
  );
}