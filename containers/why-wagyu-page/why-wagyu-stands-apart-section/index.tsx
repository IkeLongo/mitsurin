import Image from "next/image";
import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import { Crown, Star, Award } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function WhyWagyuStandsApartSection() {
  return (
    <section
      aria-labelledby="why-wagyu-stands-apart-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Centered Main Heading */}
        <ScrollAnimationWrapper animationType="slideUp">
          <div className="flex justify-center items-center mb-10">
            <h3
              id="why-wagyu-stands-apart-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight text-center"
            >
              <span className="text-red-900">Why </span>
              <span className="text-yellow-600">Wagyu </span>
              <span className="text-red-900">Stands Apart</span>
            </h3>
          </div>
        </ScrollAnimationWrapper>
        {/* Desktop Layout: One column, two rows */}
        <div className="flex flex-col gap-10">
          {/* Top Row: Three cards with sequential animations */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 py-6">
              {cardData.map((item, index) => (
                <ScrollAnimationWrapper 
                  key={item.title}
                  animationType="slideUp" 
                  delay={0.2 + (index * 0.15)}
                >
                  <div className="relative group block p-2 h-full w-full">
                    <div className="relative h-full w-full p-6 bg-red-900 rounded-2xl border border-transparent group-hover:bg-slate-900 transition duration-200">
                      {item.icon}
                      <h4 className="text-yellow-600 text-center text-xl font-bold mb-4">
                        {item.title}
                      </h4>
                      <p className="text-white text-center text-md leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
          
          {/* Bottom Row: Long rectangle with title and description */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.65}>
            <div className="w-full">
              <div className="bg-yellow-600 rounded-2xl p-8 text-center">
                <h4 className="text-black text-2xl sm:text-3xl font-bold font-[Montserrat] mb-4">
                  THE FINEST BEEF IN THE WORLD
                </h4>
                <p className="text-black text-lg leading-relaxed max-w-4xl mx-auto">
                  Experience the difference that centuries of breeding excellence makes
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
    title: "Rich in Healthy Fats",
    description: "Wagyu contains 40% more monounsaturated fats than regular beef, promoting heart health and reducing bad cholesterol while maintaining beneficial nutrients.",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Crown className="text-red-900" size={32} />
      </div>
    ),
    alt: "Healthy Fats Benefits",
  },
  {
    title: "Lower Saturated Fats",
    description: "Despite its rich marbling, Wagyu has 30% less saturated fat than conventional beef thanks to unique Japanese cattle genetics and feeding practices.",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Star className="text-red-900" size={32} />
      </div>
    ),
    alt: "Lower Saturated Fat Content",
  },
  {
    title: "High in Omega-3",
    description: "Contains twice the omega-3 fatty acids of regular beef, supporting brain function, heart health, and reducing inflammation throughout the body.",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Award className="text-red-900" size={32} />
      </div>
    ),
    alt: "Omega-3 Fatty Acids",
  }
];