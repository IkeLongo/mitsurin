import Image from "next/image";
import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import { Package, Beef, ClipboardList, Truck } from "lucide-react";

export default function TheProcessSection() {
  return (
    <section
      aria-labelledby="the-process-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Eyebrow */}
        <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
          THE PROCESS
        </p>

        {/* Centered Main Heading */}
        <div className="flex justify-center items-center mb-10">
          <h3
            id="the-process-heading"
            className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight text-center"
          >
            <span className="text-red-900">Flexible. </span>
            <span className="text-red-900">Personal. </span>
            <span className="text-yellow-600">Premium.</span>
          </h3>
        </div>
        {/* Desktop Layout: One column, two rows */}
        <div className="flex flex-col gap-10">
          {/* Top Row: Three cards evenly spaced */}
          <div className="w-full">
            <HoverEffect 
              items={cardData}
              showLearnMore={false}
              enableLinks={false}
              styles={{
                hover: "bg-red-900",
                card: "bg-gray-100",
                title: "text-red-900 text-center text-xl",
                description: "text-stone-900 text-center text-md",
              }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-0"
            />
          </div>
          
          {/* Bottom Row: Long rectangle with title and description */}
          <div className="w-full">
            <div className="bg-yellow-600 rounded-2xl p-8 text-center">
              <p className="text-black font-bold text-lg leading-relaxed max-w-4xl mx-auto">
                All Mitsurin beef is sold by reservation only. Limited seasonal availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const cardData = [
  {
    title: "Contact Us",
    description: "Reach out to reserve your whole or half cow.",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
        <ClipboardList className="text-red-900" size={32} />
      </div>
    ),
    alt: "Healthy Fats Benefits",
  },
  {
    title: "Choose Your Butcher",
    description: "Use your preferred butcher or inquire about our inventory.",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Beef className="text-red-900" size={32} />
      </div>
    ),
    alt: "Lower Saturated Fat Content",
  },
  {
    title: "Customize Your Cuts",
    description: "Tailor cuts to fit your family's needs.",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Package className="text-red-900" size={32} />
      </div>
    ),
    alt: "Omega-3 Fatty Acids",
  },
  {
    title: "Pick Up or Delivery",
    description: "Based on your location and timing preferences.",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Truck className="text-red-900" size={32} />
      </div>
    ),
    alt: "Omega-3 Fatty Acids",
  },
];