import Image from "next/image";
import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import { MapPin, Mail, Phone } from "lucide-react";
import SignupFormDemo from "../form-section";

export default function SendUsMessageSection() {
  return (
    <section
      aria-labelledby="send-us-message-heading"
      className="w-full bg-white-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="pl-20">
            {/* Right: Image */}
            <div className="relative w-full mb-6 h-96 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/juicy-mitsurin-wagyu-steak-hondo-texas.webp"
                alt="Healthy Wagyu beef showcasing nutritional benefits"
                fill
                className="object-cover object-center"
                style={{ borderRadius: '1rem' }}
                priority
              />
            </div>

            {/* Eyebrow */}
            <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
              SEND US A MESSAGE
            </p>

            {/* Main Heading */}
            <h3
              id="health-benefits-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-primary-800">Let's Start a </span>
              <span className="text-accent-dark">Conversation</span>
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
                  styles={{
                    hover: "bg-accent-dark",
                    card: "bg-white border-2 border-accent-dark",
                    title: "text-primary-800 text-center text-xl",
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
    link: "https://maps.google.com/?q=1396+CR+646,+Hondo,+TX+78861",
    icon: (
      <div className="w-16 h-16 bg-[#630710] rounded-full mx-auto mb-4 flex items-center justify-center">
        <MapPin className="text-[#bf8136]" size={32} />
      </div>
    ),
    alt: "Mitsurin Wagyu Ranch Location in Hondo, Texas",
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
    alt: "Contact Mitsurin Wagyu via Email",
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
    alt: "Call Mitsurin Wagyu Phone Number",
  }
];