import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import { MapPin, Mail, Phone } from "lucide-react";

export default function HeadingSection() {
  return (
    <div className="relative bg-white">
      {/* Background Image Section */}
      <div 
        className="font-sans flex items-center justify-center pt-40 md:pt-48 lg:pt-52 pb-20 sm:pb-24 md:pb-32 lg:pb-48 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/wagyu-meat-bg.webp')"
        }}
      >
        <section
          aria-labelledby="get-in-touch-heading"
          className="flex flex-col items-center text-center max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Eyebrow */}
          <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4">
            GET IN TOUCH
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight">
            <span className="text-white">Contact </span>
            <span className="text-yellow-600">Mitsurin Wagyu</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-stone-100 text-lg max-w-3xl">
            Ready to experience the finest Wagyu beef in Texas? We're here to answer your questions.
          </p>
        </section>
      </div>

      {/* Overlapping Cards Section */}
      <div className="hidden lg:block -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 z-20">
        <div className="flex flex-col gap-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cards that overlap the background */}
          <div className="w-full">
            <HoverEffect 
              items={cardData}
              showLearnMore={false}
              enableLinks={false}
              styles={{
                hover: "bg-yellow-600",
                card: "bg-white border-2 border-yellow-600",
                title: "text-red-900 text-center text-xl",
                description: "text-black text-center text-md",
              }}
              className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 py-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    title: "Location",
    description: "1396 CR 646, Hondo, Tx 78861",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-[#630710] rounded-full mx-auto mb-4 flex items-center justify-center">
        <MapPin className="text-[#bf8136]" size={32} />
      </div>
    ),
    alt: "Healthy Fats Benefits",
  },
  {
    title: "Email",
    description: "michael@mitsurinwagyu.com",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-[#630710] rounded-full mx-auto mb-4 flex items-center justify-center">
        <Mail className="text-[#bf8136]" size={32} />
      </div>
    ),
    alt: "Lower Saturated Fat Content",
  },
  {
    title: "Phone",
    description: "210-827-0658",
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-[#630710] rounded-full mx-auto mb-4 flex items-center justify-center">
        <Phone className="text-[#bf8136]" size={32} />
      </div>
    ),
    alt: "Omega-3 Fatty Acids",
  }
];