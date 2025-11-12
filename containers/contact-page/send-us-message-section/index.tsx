import Image from "next/image";
import { InfoHoverEffect } from "@/components/ui/card/hover/info-card-hover-effect";
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

          {/* Right: Image */}
          <div className="relative flex items-center justify-center">
            <SignupFormDemo />
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          {/* Eyebrow */}
          <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
            HEALTH BENEFITS
          </p>

          {/* Main Heading */}
          <h3
            id="health-benefits-heading"
            className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
          >
            <span className="text-red-900">Rich in </span>
            <span className="text-yellow-600">Good Fats</span>
          </h3>

          {/* Image - Positioned after heading */}
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

          {/* Description */}
          <p className="text-stone-950 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            <InfoHoverEffect items={infoData} />
          </div>
        </div>
      </div>
    </section>
  );
}

const infoData = [
  {
    // Card Content
    percentage: "40%",
    description: "Higher in Monounsaturated Fats",
    
    // Modal Content (different from card)
    modalTitle: "The Science Behind Monounsaturated Fats in Wagyu",
    modalDescription: "Wagyu beef contains significantly higher levels of monounsaturated fats compared to regular beef. These healthy fats, including oleic acid, help reduce bad cholesterol (LDL) while maintaining good cholesterol (HDL) levels. The unique marbling pattern in Wagyu creates this exceptional nutritional profile through careful breeding and feeding practices that have been perfected over centuries in Japan."
  },
  {
    // Card Content
    percentage: "30%",
    description: "Lower in Saturated Fats",
    
    // Modal Content (completely different information)
    modalTitle: "Understanding Saturated Fat Reduction in Premium Beef",
    modalDescription: "Despite its rich appearance and intense marbling, Wagyu actually contains 30% less saturated fat than conventional beef. This remarkable characteristic comes from the specific genetics of Japanese cattle breeds and their specialized diet. The result is a healthier fat composition that doesn't compromise on taste or texture."
  }
];