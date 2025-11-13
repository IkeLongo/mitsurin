import { ProductHoverEffect } from "@/components/ui/card/hover/product-card-hover-effect";
import { Award, Container, Package, Package2 } from "lucide-react";
import Image from "next/image";

function InfoModal() {
  return (
    <div className="bg-red-950 rounded-lg p-8 mx-auto max-w-5xl">
      <p className="text-white leading-relaxed pl-0 -indent-0 md:pl-[104px] md:-indent-[104px]">
        <span className="text-yellow-600 font-bold">Please Note: </span>
        All sales are handled directly. After selecting your share, you may choose to take 
        your cow to your preferred butcher or, if available, purchase pre-processed cuts 
        from our inventory.
      </p>
    </div>
  );
}

export default function PurchasingOptionsSection() {
  return (
    <section
      aria-labelledby="purchasing-options-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Eyebrow */}
        <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
          PURCHASING OPTIONS
        </p>

        {/* Main Heading */}
        <h3
          id="purchasing-options-heading"
          className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-12 text-center text-red-900"
        >
          <span className="text-red-900">Choose Your Share </span>
          <span className="text-yellow-600">of the Herd</span>
        </h3>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          <ProductHoverEffect 
            items={packages} 
            styles={{
              hover: "bg-red-900",            // Brand red hover
              card: "bg-gray-50 border-2 border-yellow-600",               // Transparent card background
              title: "text-red-900 text-center text-2xl font-bold",          // Brand red titles
              description: "text-stone-600 text-center",  // Stone gray description
              learnMore: "text-center text-yellow-600",    // Brand yellow accent
              bulletPoint: "text-stone-600"              // Bullet point color
            }}
            className="max-w-5xl"
            showLearnMore={false}
            enableLinks={false}
          />
        </div>

        {/* Bullet Points Component */}
        <InfoModal />
      </div>
    </section>
  );
}

export const packages = [
  {
    title: "Whole Cow",
    description:
      `Ideal for large families, group shares, or long-term freezer storage. 
      You'll receive a full variety of premium Wagyu cuts, custom butchered to 
      your preference.`,
    bulletPoints: [
      "400-600 lbs of beef",
      "Variety of cuts included",
      "Custom butcher preferences",
      "Best value per pound",
      "Freezer space required",
      "Perfect for large families"
    ],
    link: "",
    icon: (
      <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Container className="text-yellow-600" size={32} />
      </div>
    ),
    alt: "Whole Cow Package",
  },
  {
    title: "Half Cow",
    description:
      `A perfect entry point for smaller households or first-time buyers. 
      Enjoy a curated selection of rich, marbled cuts tailored to your specifications.`,
    bulletPoints: [
      "200-300 lbs of beef",
      "Balanced cut selection",
      "Easier storage",
      "Great for small families",
      "First-time buyer friendly",
      "Premium quality cuts"
    ],
    link: "",
    icon: (
      <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Package className="text-yellow-600" size={32} />
      </div>
    ),
    alt: "Half Cow Package",
  },
];