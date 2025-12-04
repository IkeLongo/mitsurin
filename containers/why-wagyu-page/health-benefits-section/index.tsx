import Image from "next/image";
import { InfoHoverEffect } from "@/components/ui/card/hover/info-card-hover-effect";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import FramedImage from "@/components/ui/card/framed-image/framed-image";

export default function HealthBenefitsSection() {
  return (
    <section
      aria-labelledby="health-benefits-heading"
      className="w-full bg-gray-100 overflow-hidden"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div>
            <ScrollAnimationWrapper animationType="slideUp">
              {/* Eyebrow */}
              <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                HEALTH BENEFITS
              </p>

              {/* Main Heading */}
              <h3
                id="health-benefits-heading"
                className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
              >
                <span className="text-primary-800">Rich in </span>
                <span className="text-accent-dark">Good Fats</span>
              </h3>
            </ScrollAnimationWrapper>

            {/* Description */}
            <ScrollAnimationWrapper animationType="fade" delay={0.2}>
              <div className="space-y-4">
                <p className="text-stone-950 text-lg leading-relaxed">
                  Wagyu beef isn't just rich in flavor—it's also rich in good fats. Thanks to its 
                  <span className="font-bold"> high oleic acid</span> content<sup className="text-xs text-accent-dark">1</sup>, the same heart-healthy fat found in olive oil, Wagyu 
                  stands as the superior choice for health-conscious beef enthusiasts.
                </p>
                
                <p className="text-stone-950 text-lg leading-relaxed">
                  The unique marbling pattern in Wagyu creates an exceptional nutritional profile. 
                  Research published in the <em>Journal of Animal Science</em> and <em>Meat Science</em> 
                  shows that Wagyu contains higher levels of conjugated linoleic acid (CLA)<sup className="text-xs text-accent-dark">2</sup> and 
                  beneficial fatty acids with anti-inflammatory properties. Additionally, studies 
                  demonstrate that Wagyu beef has 40-50% higher monounsaturated fat content<sup className="text-xs text-accent-dark">3</sup> and 
                  superior omega fatty acid ratios compared to conventional beef.
                </p>
                
                <p className="text-stone-950 text-lg leading-relaxed">
                  When you choose Wagyu, you're not just indulging in extraordinary taste—you're 
                  making a choice that aligns with a more health-conscious approach to premium dining.
                </p>
              </div>
            </ScrollAnimationWrapper>

          </div>

          {/* Image */}
          <ScrollAnimationWrapper
            animationType="slideLeft"
            delay={0.2}
          >
            <FramedImage
              src="/fatty-juicy-wagyu.webp"
              alt="Marbled Wagyu beef cut"
              width={563}
              height={600}
              imageWidth="w-[563px]"
              frameColor="accent-dark"
              offsetX={5}
              offsetY={5}
              priority
            />
          </ScrollAnimationWrapper>
        </div>

        {/* Cards Section - Desktop */}
        <div className="hidden lg:block mt-12">
          <ScrollAnimationWrapper animationType="slideUp" delay={0.4}>
            <div className="flex flex-col gap-4">
              <InfoHoverEffect items={infoData} />
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* References Section - Desktop */}
        <div className="hidden lg:block">
          <ScrollAnimationWrapper animationType="fade" delay={0.6}>
            <div className="mt-8 pt-6 border-t border-gray-300">
              <h4 className="text-sm font-bold text-primary-800 mb-3">Scientific References:</h4>
              <div className="text-xs text-gray-600 space-y-2 max-w-4xl">
                <p><sup>1</sup> Kazala, E.C., et al. (1999). Relationship of fatty acid composition to intramuscular fat content in beef from crossbred Wagyu cattle. <em>Journal of Animal Science</em>, 77(7), 1717-1725.</p>
                <p><sup>2</sup> Mir, P.S., et al. (2002). Growth, carcass characteristics, muscle conjugated linoleic acid (CLA) content and response to intravenous glucose challenge in high percentage Wagyu. <em>Journal of Animal Science</em>, 80(11), 2996-3004.</p>
                <p><sup>3</sup> Gotoh, T., Joo, S.T. (2016). Characteristics and health benefit of highly marbled Wagyu and Hanwoo beef. <em>Korean Journal for Food Science of Animal Resources</em>, 36(6), 709-718.</p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden">
          <ScrollAnimationWrapper animationType="slideUp">
            {/* Eyebrow */}
            <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
              HEALTH BENEFITS
            </p>

            {/* Main Heading */}
            <h3
              id="health-benefits-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-primary-800">Rich in </span>
              <span className="text-accent-dark">Good Fats</span>
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
                high oleic acid content<sup className="text-xs text-accent-dark">1</sup>, the same heart-healthy fat found in olive oil, Wagyu 
                stands as the superior choice for health-conscious beef enthusiasts.
              </p>
              
              <p className="text-stone-950 text-lg leading-relaxed">
                The unique marbling pattern in Wagyu creates an exceptional nutritional profile. 
                Research published in the <em>Journal of Animal Science</em> and <em>Meat Science</em> 
                shows that Wagyu contains higher levels of conjugated linoleic acid (CLA)<sup className="text-xs text-accent-dark">2</sup> and 
                beneficial fatty acids with anti-inflammatory properties. Additionally, studies 
                demonstrate that Wagyu beef has 40-50% higher monounsaturated fat content<sup className="text-xs text-accent-dark">3</sup> and 
                superior omega fatty acid ratios compared to conventional beef.
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

          {/* References Section */}
          <ScrollAnimationWrapper animationType="fade" delay={0.8}>
            <div className="mt-8 pt-6 border-t border-gray-300">
              <h4 className="text-sm font-bold text-primary-800 mb-3">Scientific References:</h4>
              <div className="text-xs text-gray-600 space-y-2">
                <p><sup>1</sup> Kazala, E.C., et al. (1999). Relationship of fatty acid composition to intramuscular fat content in beef from crossbred Wagyu cattle. <em>Journal of Animal Science</em>, 77(7), 1717-1725.</p>
                <p><sup>2</sup> Mir, P.S., et al. (2002). Growth, carcass characteristics, muscle conjugated linoleic acid (CLA) content and response to intravenous glucose challenge in high percentage Wagyu. <em>Journal of Animal Science</em>, 80(11), 2996-3004.</p>
                <p><sup>3</sup> Gotoh, T., Joo, S.T. (2016). Characteristics and health benefit of highly marbled Wagyu and Hanwoo beef. <em>Korean Journal for Food Science of Animal Resources</em>, 36(6), 709-718.</p>
              </div>
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

