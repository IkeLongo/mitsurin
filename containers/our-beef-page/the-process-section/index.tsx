import Image from "next/image";
import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import { Package, Beef, ClipboardList, Truck } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function TheProcessSection() {
  return (
    <section
      aria-labelledby="the-process-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <ScrollAnimationWrapper animationType="slideUp">
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
        </ScrollAnimationWrapper>
        {/* Desktop Layout: One column, two rows */}
        <div className="flex flex-col gap-10">
          {/* Top Row: Four cards with sequential animations */}
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-0">
              {cardData.map((item, index) => (
                <ScrollAnimationWrapper 
                  key={item.title}
                  animationType="slideUp" 
                  delay={0.2 + (index * 0.15)}
                >
                  <div className="relative group block p-2 h-full w-full">
                    <div className="relative h-full w-full p-6 bg-gray-100 rounded-2xl border border-transparent group-hover:bg-red-900 transition duration-200">
                      {item.icon}
                      <h4 className="text-red-900 text-center text-xl font-bold mb-4 group-hover:text-white transition duration-200">
                        {item.title}
                      </h4>
                      <p className="text-stone-900 text-center text-md leading-relaxed group-hover:text-white transition duration-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
          
          {/* Bottom Row: Long rectangle with title and description */}
          <ScrollAnimationWrapper animationType="fade" delay={0.8}>
            <div className="w-full">
              <div className="bg-yellow-600 rounded-2xl p-8 text-center">
                <p className="text-black font-bold text-lg leading-relaxed max-w-4xl mx-auto">
                  All Mitsurin beef is sold by reservation only. Limited seasonal availability.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
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