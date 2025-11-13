import { Container, Package } from "lucide-react";
import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";

export default function PackagesSection() {
  return (
    <section
      aria-labelledby="about-mitsurin-heading"
      className="w-full bg-slate-200"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4">
            OUR PRODUCT
          </p>

          {/* Title */}
          <h3
            id="packages-section-heading"
            className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight text-stone-900 mb-8"
          >
            Premium Beef Packages
          </h3>

          {/* Description */}
          <p className="text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          <HoverEffect 
            items={packages}
          />
        </div>
      </div>       
    </section>
  );
}

export const packages = [
  {
    title: "Whole Cow",
    description:
      `A full share of premium, full-blooded Japanese Wagyu. Ideal for large families, 
      group purchases, or long-term enjoyment.`,
    link: "https://stripe.com",
    icon: (
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <Container className="text-yellow-600" size={64} />
          </div>
        ),
    alt: "Whole Cow Package",
  },
  {
    title: "Half Cow",
    description:
      `Perfect for smaller households or first-time buyers looking to experience 
      the unmatched tenderness of Wagyu.`,
    link: "https://netflix.com",
    icon: (
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
        <Package className="text-yellow-600" size={64} />
      </div>
    ),
    alt: "Half Cow Package",
  },
];