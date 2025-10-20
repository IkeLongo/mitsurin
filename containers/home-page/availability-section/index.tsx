import { NumberedLadder } from "@/components/ui/ladder/numbered-ladder";
import { GalleryCard } from "@/components/ui/card/gallery/gallery-click-effect";

const ladderItems = [
  { 
    number: 0o1, 
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
  },
  { 
    number: 0o2, 
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
  },
  { 
    number: 0o3, 
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis." 
  },
  { 
    number: 0o4, 
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio." 
  },
];

const galleryImages = [
  { src: "/steak-gallery-1.webp", alt: "Wagyu beef cut 1" },
  { src: "/steak-gallery-2.webp", alt: "Wagyu beef cut 2" },
  { src: "/steak-gallery-3.webp", alt: "Wagyu beef cut 3" },
];

export default function AvailabilitySection() {
  return (
    <section
      aria-labelledby="availability-mitsurin-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Product Availability */}
          <div>
            <h3
              id="availability-mitsurin-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Montserrat] leading-tight text-stone-900 mb-8"
            >
              Product Availability
            </h3>
            
            {/* Ladder Component Placeholder */}
            <NumberedLadder items={ladderItems} />
          </div>

          {/* Right Column: Additional Content */}
          <GalleryCard images={galleryImages} />
        </div>
      </div>
    </section>
  );
}