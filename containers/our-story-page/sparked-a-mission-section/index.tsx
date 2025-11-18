import Image from "next/image";
import { InfoHoverEffect } from "@/components/ui/card/hover/info-card-hover-effect";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import { FramedImage } from "@/components/ui/card/framed-image";

export default function SparkedMissionSection() {
  return (
    <section
      aria-labelledby="sparked-mission-heading"
      className="w-full bg-gray-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div>
            <ScrollAnimationWrapper animationType="slideUp">
              {/* Eyebrow */}
              <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                SPARKED A MISSION
              </p>

              {/* Main Heading */}
              <h3
                id="sparked-mission-heading"
                className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
              >
                <span className="text-red-900">A Momenet That Sparked a Mission</span>
              </h3>
            </ScrollAnimationWrapper>

            {/* Description */}
            <ScrollAnimationWrapper animationType="fade" delay={0.2}>
              <div className="space-y-4">
                <p className="text-stone-950 text-lg leading-relaxed">
                  Dr. Michael Selva had owned his ranch in Hondo, Texas for about 15 years when his 
                  life took an unexpected turn during a trip to Las Vegas. He was there to celebrate 
                  his niece's 21st birthday when his brother treated him to something extraordinary—a 
                  Wagyu steak dinner.
                </p>
                
                <p className="text-stone-950 text-lg leading-relaxed">
                  That first bite was a revelation. Dr. Selva was completely blown away by the richness, 
                  the marbling, the melt-in-your-mouth texture that made every other steak he'd ever 
                  had pale in comparison. This was not just beef—this was an experience.
                </p>
                
                <p className="text-stone-950 text-lg leading-relaxed">
                  But Wagyu beef is expensive and hard to come by. Rather than accept this as a rare 
                  luxury, Dr. Selva had a different idea:
                </p>

                <p className="text-red-900 text-lg leading-relaxed italic font-bold">
                  What if I could raise my own Wagyu cattle and share this incredible experience 
                  with my friends and family?
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>

          {/* Right: Framed Image */}
          {/* Background: Framed image */}
          <ScrollAnimationWrapper
            animationType="slideRight"
            duration={0.8}
            delay={0.1}
            initialY={60}
          >
            <FramedImage
              src="/juicy-tbone-wagyu-steak.webp"
              alt="Marbled Wagyu beef cut"
              width={376}
              height={528}
              containerAlignment="ml-auto"
              frameColor="yellow-600"
              offsetRight={10}
              offsetTop={10}
              priority
            />
          </ScrollAnimationWrapper>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          <ScrollAnimationWrapper animationType="slideUp">
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
          </ScrollAnimationWrapper>

          {/* Image - Positioned after heading */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.2}>
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
          </ScrollAnimationWrapper>

          {/* Description */}
          <ScrollAnimationWrapper animationType="fade" delay={0.4}>
            <div className="space-y-4 mb-6">
              <p className="text-stone-950 text-lg leading-relaxed">
                Wagyu beef isn't just rich in flavor—it's also rich in good fats. Thanks to its 
                high oleic acid content, the same heart-healthy fat found in olive oil, Wagyu 
                may be a smarter choice compared to other types of beef.
              </p>
              
              <p className="text-stone-950 text-lg leading-relaxed">
                The unique marbling pattern in Wagyu creates an exceptional nutritional profile. 
                Studies show that Wagyu contains higher levels of conjugated linoleic acid (CLA), 
                which has been linked to potential anti-inflammatory properties and improved 
                immune function. Additionally, the meat is rich in omega-3 and omega-6 fatty 
                acids in a more balanced ratio than conventional beef.
              </p>
              
              <p className="text-stone-950 text-lg leading-relaxed">
                When you choose Wagyu, you're not just indulging in extraordinary taste—you're 
                making a choice that aligns with a more health-conscious approach to premium dining.
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Cards */}
          <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
            <div className="flex flex-col gap-4">
              <InfoHoverEffect items={infoData} />
            </div>
          </ScrollAnimationWrapper>
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