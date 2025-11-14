import { Container, Package } from "lucide-react";
import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function PackagesSection() {
  return (
    <section
      aria-labelledby="about-mitsurin-heading"
      className="w-full bg-slate-200"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow + Title Group */}
          <ScrollAnimationWrapper
            animationType="slideUp"
            duration={0.8}
            delay={0.1}
            initialY={60}
          >
            {/* Eyebrow */}
            <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4">
              OUR PRODUCT
            </p>

            {/* Title */}
            <h3
              id="packages-section-heading"
              className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight text-red-900 mb-8"
            >
              <span className="text-yellow-600">Premium</span> Beef Packages
            </h3>
          </ScrollAnimationWrapper>

          {/* Description */}
          <ScrollAnimationWrapper
            animationType="fade"
            duration={0.8}
            delay={0.3}
            initialY={40}
            className="mb-12"
          >
            <div className="text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                Two options. One promise: the best beef you can buy. Hand-selected, 
                full-blooded Wagyu raised with precision and care on our Texas ranch.
              </p>
              
              <p>
                Each package represents months of dedication to traditional Japanese breeding 
                methods combined with modern ranch management. Our cattle enjoy stress-free 
                environments, premium feed, and humane treatment that directly translates to 
                the exceptional marbling and flavor you'll taste in every bite.
              </p>
              
              <p className="font-semibold text-stone-800">
                Ready to experience the difference? Choose the package that fits your family's 
                appetite for excellence.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Cards */}
        <ScrollAnimationWrapper
          animationType="slideUp"
          duration={0.9}
          delay={0.5}
          initialY={60}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
            <HoverEffect 
              items={packages}
            />
          </div>
        </ScrollAnimationWrapper>
      </div>       
    </section>
  );
}

export const packages = [
  {
    title: "Whole Cow",
    description:
      `A full share of premium, full-blooded Japanese Wagyu. Ideal for large families, 
      group purchases, or long-term enjoyment.`,
    link: "https://stripe.com",
    icon: (
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <Container className="text-yellow-600" size={64} />
          </div>
        ),
    alt: "Whole Cow Package",
  },
  {
    title: "Half Cow",
    description:
      `Perfect for smaller households or first-time buyers looking to experience 
      the unmatched tenderness of Wagyu.`,
    link: "https://netflix.com",
    icon: (
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
        <Package className="text-yellow-600" size={64} />
      </div>
    ),
    alt: "Half Cow Package",
  },
];