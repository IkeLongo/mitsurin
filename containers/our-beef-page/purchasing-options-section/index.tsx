import { ProductHoverEffect } from "@/components/ui/card/hover/product-card-hover-effect";
import { Container, Package } from "lucide-react";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";
import { sanityFetch } from "@/sanity/lib/live";
import { cowPurchaseQuery } from "@/lib/queries/cow-purchase";

function InfoModal() {
  return (
    <div className="bg-primary-800 rounded-lg p-8 mx-auto max-w-5xl">
      <p className="text-white leading-relaxed pl-0 -indent-0 md:pl-[104px] md:-indent-[104px]">
        <span className="text-accent-dark font-bold">Please Note: </span>
        All sales are handled directly. After selecting your share, you may choose to take 
        your cow to your preferred butcher or, if available, purchase pre-processed cuts 
        from our inventory.
      </p>
    </div>
  );
}

// Define the interface for cow purchase data
interface CowPurchase {
  _id: string;
  name: string;
  description: string;
  icon?: string;
  estimatedYield?: string;
  estimatedWeight?: string;
  freezerSpaceRequired?: string;
  processingTime?: string;
  includes?: string[];
  minimumNotice?: string;
  availability: string;
  basePrice?: number;
  priceUnit?: string;
}

export default async function PurchasingOptionsSection() {
  // Fetch cow purchase data from Sanity
  const { data: cowPurchases } = await sanityFetch({
    query: cowPurchaseQuery,
    stega: false,
  });

  // Filter to only show whole cow and half cow options (exclude live delivery)
  const filteredCowPurchases = cowPurchases?.filter((cow: CowPurchase) => 
    (cow.name?.toLowerCase().includes('whole') || 
     cow.name?.toLowerCase().includes('half')) &&
    !cow.name?.toLowerCase().includes('live')
  );

  // Convert Sanity data to the format expected by ProductHoverEffect
  const packages = filteredCowPurchases?.map((cow: CowPurchase, index: number) => {
    // Create dynamic bullet points from Sanity fields
    const bulletPoints = [];
    
    if (cow.estimatedYield) bulletPoints.push(cow.estimatedYield);
    if (cow.estimatedWeight) bulletPoints.push(`${cow.estimatedWeight}`);
    if (cow.freezerSpaceRequired) bulletPoints.push(`${cow.freezerSpaceRequired} freezer space required`);
    if (cow.processingTime) bulletPoints.push(`${cow.processingTime}`);
    if (cow.minimumNotice) bulletPoints.push(`${cow.minimumNotice} advance notice`);
    
    // Add items from the includes array
    if (cow.includes && cow.includes.length > 0) {
      bulletPoints.push(...cow.includes.slice(0, 2)); // Add first 2 includes to avoid too many bullets
    }
    
    // Fallback bullet points if no data
    if (bulletPoints.length === 0) {
      bulletPoints.push(
        "Premium Wagyu cuts",
        "Custom butcher preferences", 
        "Best value per pound"
      );
    }

    // Determine icon based on cow type or use fallback
    const iconSrc = cow.name?.toLowerCase().includes('whole') 
      ? '/full-cow.png' 
      : cow.name?.toLowerCase().includes('half')
      ? '/half-cow.png'
      : '/full-cow.png';

    const iconSize = cow.name?.toLowerCase().includes('half') ? 48 : 56;

    return {
      title: cow.name?.replace(/\s*-\s*Already Processed/i, '') || cow.name,
      description: cow.description,
      bulletPoints,
      link: "/availability",
      icon: (
        <div className="w-24 h-24 bg-primary-800 rounded-full flex items-center justify-center mb-6 mx-auto">
          {cow.icon ? (
            <Image 
              src={cow.icon} 
              alt={`${cow.name} Icon`} 
              width={iconSize} 
              height={iconSize}
              className={`w-${iconSize === 48 ? '12' : '14'} h-${iconSize === 48 ? '12' : '14'}`}
            />
          ) : (
            <Image 
              src={iconSrc} 
              alt={`${cow.name} Icon`} 
              width={iconSize} 
              height={iconSize}
              className={`w-${iconSize === 48 ? '12' : '14'} h-${iconSize === 48 ? '12' : '14'}`}
            />
          )}
        </div>
      ),
      alt: `${cow.name} Package`,
    };
  }) || [];

  return (
    <section
      aria-labelledby="purchasing-options-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <ScrollAnimationWrapper animationType="slideUp">
          {/* Eyebrow */}
          <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
            PURCHASING OPTIONS
          </p>

          {/* Main Heading */}
          <h3
            id="purchasing-options-heading"
            className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-12 text-center text-primary-800"
          >
            <span className="text-primary-800">Choose Your Share </span>
            <span className="text-accent-dark">of the Herd</span>
          </h3>
        </ScrollAnimationWrapper>

        {/* Cards */}
        <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
            <ProductHoverEffect 
              items={packages} 
              styles={{
                hover: "bg-primary-800",            // Brand red hover
                card: "bg-gray-50 border-2 border-accent-dark",               // Transparent card background
                title: "text-primary-800 text-center text-2xl font-bold",          // Brand red titles
                description: "text-stone-600 text-center",  // Stone gray description
                learnMore: "text-center text-accent-dark",    // Brand yellow accent
                bulletPoint: "text-stone-600"              // Bullet point color
              }}
              className="max-w-5xl"
            />
          </div>
        </ScrollAnimationWrapper>

        {/* Bullet Points Component */}
        <ScrollAnimationWrapper animationType="fade" delay={0.6}>
          <InfoModal />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}