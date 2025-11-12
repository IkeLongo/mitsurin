import Image from "next/image";
import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import { MapPin, Mail, Phone } from "lucide-react";
import SignupFormDemo from "../form-section";

export default function SendUsMessageSection() {
  return (
    <section
      aria-labelledby="send-us-message-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Right: Image */}
            <div className="relative w-full mb-6">
              <Image
                src="/fatty-juicy-wagyu.webp"
                alt="Healthy Wagyu beef showcasing nutritional benefits"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
                style={{ borderRadius: '1rem' }}
                priority
              />
            </div>

            {/* Eyebrow */}
            <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
              SEND US A MESSAGE
            </p>

            {/* Main Heading */}
            <h3
              id="health-benefits-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-red-900">Let's Start a </span>
              <span className="text-yellow-600">Conversation</span>
            </h3>

            {/* Description */}
            <p className="text-stone-950 text-lg leading-relaxed">
              Whether you're ready to place an order or have questions about our premium Wagyu beef, 
              we're here to help. Fill out the form and we'll get back to you within 24 hours.
            </p>

          </div>

          {/* Right: SignUpForm */}
          <div className="relative flex items-center justify-center">
            <SignupFormDemo />
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          {/* Top: SignUpForm */}
          <div className="relative flex items-center justify-center">
            <SignupFormDemo />
          </div>

          {/* Overlapping Cards Section */}
          <div className="block z-20">
            <div className="flex flex-col gap-10">
              {/* Cards that overlap the background */}
              <div className="w-full flex justify-center">
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
                  className="grid md:grid-cols-1 gap-4 sm:gap-6 max-w-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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