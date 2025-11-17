import Image from "next/image";
import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import CutCard from "@/components/ui/card/normal/cut-card";
import { Package, Beef, ClipboardList, Truck } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function CutSelectionSection() {
  return (
    <section
      aria-labelledby="cut-selection-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <ScrollAnimationWrapper animationType="slideUp">
          {/* Eyebrow */}
          <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
            CUT SELECTION
          </p>

          {/* Centered Main Heading */}
          <div className="flex justify-center items-center mb-6">
            <h3
              id="cut-selection-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight text-center"
            >
              <span className="text-red-900">What's in a </span>
              <span className="text-yellow-600">Wagyu Share?</span>
            </h3>
          </div>

          <p className="text-center text-black text-lg leading-relaxed max-w-4xl mx-auto mb-10">
            While each butcher's method may vary, a typical Wagyu cow yields the following premium cuts:
          </p>
        </ScrollAnimationWrapper>

        {/* Desktop Layout: One column, two rows */}
        <div className="flex flex-col gap-10 mb-10">
          {/* Top Row: Four cards with sequential animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {cutCardData.map((cut, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animationType="slideUp" 
                delay={0.2 + (index * 0.15)}
              >
                <CutCard 
                  title={cut.title}
                  bulletPoints={cut.bulletPoints}
                />
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>

        <ScrollAnimationWrapper animationType="fade" delay={0.8}>
          <p className="text-center text-black text-lg leading-relaxed max-w-4xl mx-auto italic">
            *Exact yield will depend on whether you choose a whole or half cow and how you prefer it butchered.
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

const cutCardData = [
  {
    title: "Premium Steaks",
    bulletPoints: [
      "Ribeye Steaks",
      "New York Strip Steaks", 
      "Filet Mignon / Tenderloin",
      "Flat iron Steaks",
      "Chuck Eye Steaks"
    ]
  },
  {
    title: "Roasts & Large Cuts",
    bulletPoints: [
      "Prime Rib Roast",
      "Chuck Roast",
      "Brisket",
      "Tri-tip Roast",
      "Arm Roast"
    ]
  },
  {
    title: "Ground Beef",
    bulletPoints: [
      "Ground Beef (80/20)",
      "Ground Beef (85/15)",
      "Short Ribs",
      "Beef Stew Meat",
      "Soup Bones"
    ]
  },
  {
    title: "Additional Cuts",
    bulletPoints: [
      "Flank Steak",
      "Skirt Steak",
      "Sirloin Steaks",
      "Round Steaks",
      "Organ Meats (optional)"
    ]
  }
];