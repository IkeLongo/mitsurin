import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import { MapPin, Mail, Phone } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function HeadingSection() {
  return (
    <div className="relative bg-white-100">
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
          <ScrollAnimationWrapper animationType="slideUp">
            {/* Eyebrow */}
            <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4">
              GET IN TOUCH
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight">
              <span className="text-white">Contact </span>
              <span className="text-accent-dark">Mitsurin Wagyu</span>
            </h1>
          </ScrollAnimationWrapper>

          {/* Description */}
          <ScrollAnimationWrapper animationType="fade" delay={0.2}>
            <p className="mt-6 text-stone-100 text-lg max-w-3xl">
              Ready to experience the finest Wagyu beef in Texas? We're here to answer your questions.
            </p>
          </ScrollAnimationWrapper>
        </section>
      </div>

      {/* Overlapping Cards Section */}
      <div className="hidden lg:block -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 z-20">
        <div className="flex flex-col gap-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cards that overlap the background */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 py-6">
              {cardData.map((item, index) => (
                <ScrollAnimationWrapper 
                  key={item.title}
                  animationType="slideUp" 
                  delay={0.4 + (index * 0.15)}
                >
                  <a 
                    href={item.link} 
                    className="relative group block p-2 h-full w-full cursor-pointer"
                  >
                    <div className="relative h-full w-full p-6 bg-white border-2 border-accent-dark rounded-2xl group-hover:bg-white-100 transition duration-300 shadow-lg hover:shadow-xl">
                      {item.icon}
                      <h4 className="text-primary-800 text-center text-xl font-bold mb-4 transition duration-300">
                        {item.title}
                      </h4>
                      <p className="text-black text-center text-md leading-relaxed transition duration-300">
                        {item.description}
                      </p>
                    </div>
                  </a>
                </ScrollAnimationWrapper>
              ))}
            </div>
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
    link: "https://maps.google.com/?q=1396+CR+646,+Hondo,+TX+78861",
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
    link: "mailto:michael@mitsurinwagyu.com",
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
    link: "tel:+12108270658",
    icon: (
      <div className="w-16 h-16 bg-[#630710] rounded-full mx-auto mb-4 flex items-center justify-center">
        <Phone className="text-[#bf8136]" size={32} />
      </div>
    ),
    alt: "Omega-3 Fatty Acids",
  }
];