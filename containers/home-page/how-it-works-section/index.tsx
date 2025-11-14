import { Truck, ChefHat, Beef } from "lucide-react";
import { cn } from "@/lib/utils";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

const steps = [
  {
    id: 1,
    title: "Select Your Cut",
    description:
      "Choose from our premium selection of Wagyu cuts, each carefully curated for exceptional quality and marbling.",
    icon: Beef,
    iconBgColor: "bg-red-900",
  },
  {
    id: 2,
    title: "Expert Preparation",
    description:
      "Our master butchers prepare your order with precision, ensuring optimal aging and presentation.",
    icon: ChefHat,
    iconBgColor: "bg-yellow-600",
  },
  {
    id: 3,
    title: "Delivery to You",
    description:
      "Your Wagyu arrives fresh and perfectly packaged, ready to create an unforgettable dining experience.",
    icon: Truck,
    iconBgColor: "bg-red-900",
  },
];

export default function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works-heading" className="w-full bg-red-900">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-[1400px] lg:px-8">
        <div className="bg-white p-8 lg:p-12">
          <ScrollAnimationWrapper animationType="slideUp">
            <h3
              id="how-it-works-heading"
              className="mb-12 text-center font-[Montserrat] text-3xl font-bold leading-tight text-red-900 sm:text-4xl lg:text-5xl"
            >
              How it Works?
            </h3>
          </ScrollAnimationWrapper>

          {/* 
            Two different layouts:
            1. md+: Horizontal flow (icons row + content row)
            2. sm-: Simple stacked pairs (icon + content, dots, icon + content, dots, icon + content)
          */}
          
          {/* md+ screens: Horizontal layout with separate icon and content rows */}
          <div className="hidden lg:block">
            <div
              className="
                grid
                grid-cols-[minmax(80px,1fr)_minmax(100px,2fr)_minmax(80px,1fr)_minmax(100px,2fr)_minmax(80px,1fr)]
                xl:grid-cols-[100px_250px_100px_250px_100px]
                items-center
                justify-center
                gap-x-4
                xl:gap-x-8
                px-16
                xl:px-20
              "
            >
              {/* Row 1: icon #1 */}
              <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
                <IconBox {...steps[0]} className="col-start-1" />
              </ScrollAnimationWrapper>
              {/* Horizontal connector between 1 and 2 */}
              <ConnectorDotsHorizontal 
                className="col-start-2" 
                firstDotColor="#991b1b"
                lastDotColor="#ca8a04"
              />
              {/* Row 1: icon #2 */}
              <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
                <IconBox {...steps[1]} className="col-start-3" />
              </ScrollAnimationWrapper>
              {/* Horizontal connector between 2 and 3 */}
              <ConnectorDotsHorizontal 
                className="col-start-4"
                firstDotColor="#ca8a04"
                lastDotColor="#991b1b"
              />
              {/* Row 1: icon #3 */}
              <ScrollAnimationWrapper animationType="slideUp" delay={0.9}>
                <IconBox {...steps[2]} className="col-start-5" />
              </ScrollAnimationWrapper>
            </div>

            {/* Card content section - below the icon flow */}
            <div className="mt-8 grid grid-cols-[minmax(80px,1fr)_minmax(100px,2fr)_minmax(80px,1fr)_minmax(100px,2fr)_minmax(80px,1fr)] xl:grid-cols-[100px_250px_100px_250px_100px] justify-center gap-x-4 xl:gap-x-8 px-16 xl:px-20">
              <ScrollAnimationWrapper animationType="slideUp" delay={0.3}>
                <CardContent {...steps[0]} stepNumber={1} className="col-start-1" />
              </ScrollAnimationWrapper>
              <div className="col-start-2"></div> {/* Empty space for dots alignment */}
              <ScrollAnimationWrapper animationType="slideUp" delay={0.6}>
                <CardContent
                  {...steps[1]}
                  stepNumber={2}
                  className="col-start-3"
                  styles={{
                    stepNumber: "bg-yellow-600"
                  }}
                />
              </ScrollAnimationWrapper>
              <div className="col-start-4"></div> {/* Empty space for dots alignment */}
              <ScrollAnimationWrapper animationType="slideUp" delay={0.9}>
                <CardContent {...steps[2]} stepNumber={3} className="col-start-5" />
              </ScrollAnimationWrapper>
            </div>
          </div>

          {/* sm- screens: Simple stacked layout (icon + content pairs) */}
          <div className="lg:hidden space-y-8">
            {/* Step 1: Icon + Content */}
            <ScrollAnimationWrapper animationType="slideRight" delay={0.3}>
              <div className="flex flex-col items-center">
                <IconBox {...steps[0]} />
                <div className="mt-6">
                  <CardContent {...steps[0]} stepNumber={1} />
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Vertical connector */}
            <ConnectorDotsVertical 
              firstDotColor="#991b1b"
              lastDotColor="#ca8a04"
            />

            {/* Step 2: Icon + Content */}
            <ScrollAnimationWrapper animationType="slideLeft" delay={0.6}>
              <div className="flex flex-col items-center">
                <IconBox {...steps[1]} />
                <div className="mt-6">
                  <CardContent
                  {...steps[1]}
                  stepNumber={2}
                  styles={{
                    stepNumber: "bg-yellow-600"
                  }}
                />
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Vertical connector */}
            <ConnectorDotsVertical 
              firstDotColor="#ca8a04"
              lastDotColor="#991b1b"
            />

            {/* Step 3: Icon + Content */}
            <ScrollAnimationWrapper animationType="slideRight" delay={0.9}>
              <div className="flex flex-col items-center">
                <IconBox {...steps[2]} />
                <div className="mt-6">
                  <CardContent {...steps[2]} stepNumber={3} />
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Icon box only - for the flowing sequence */
function IconBox({
  icon: Icon,
  iconBgColor,
  className,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconBgColor: string;
  className?: string;
}) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`${iconBgColor} relative z-10 rounded-2xl p-6 shadow-lg`}>
        <Icon className="h-12 w-12 text-white" />
      </div>
    </div>
  );
}

/** Card content - title and description only */
function CardContent({
  title,
  description,
  stepNumber,
  className,
  styles = {},
}: {
  title: string;
  description: string;
  stepNumber: number;
  className?: string;
  styles?: {
    stepNumber?: string;
    title?: string;
    description?: string;
  };
}) {
  // Base styles that should always be present
  const baseStyles = {
    stepNumber: "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white",
    title: "min-w-[200px] font-[Montserrat] text-xl font-bold text-stone-900 text-center",
    description: "min-w-[200px] leading-relaxed text-gray-600 text-center max-w-xs",
  };

  // Default colors/additional styles
  const defaultStyles = {
    stepNumber: "bg-red-900",
    title: "",
    description: "",
  };

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Step number indicator */}
      <div className="mb-4 flex justify-center">
        <div className={cn(
          baseStyles.stepNumber,
          defaultStyles.stepNumber,
          styles.stepNumber
        )}>
          {stepNumber}
        </div>
      </div>

      {/* Title - wrapped in flex container to maintain centering */}
      <div className="mb-4 flex justify-center">
        <h4 className={cn(
          baseStyles.title,
          defaultStyles.title,
          styles.title
        )}>{title}</h4>
      </div>

      {/* Description - also wrapped to maintain centering */}
      <div className="flex justify-center">
        <p className={cn(
          baseStyles.description,
          defaultStyles.description,
          styles.description
        )}>{description}</p>
      </div>
    </div>
  );
}

/** Icon + title + description (keeping for backward compatibility, but not used in main layout) */
function Card({
  title,
  description,
  icon: Icon,
  iconBgColor,
  className,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconBgColor: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center text-center">
        {/* Icon box */}
        <div className={`${iconBgColor} relative z-10 mb-6 rounded-2xl p-6 shadow-lg`}>
          <Icon className="h-12 w-12 text-white" />
        </div>

        {/* Title */}
        <h4 className="mb-4 font-[Montserrat] text-xl font-bold text-stone-900">{title}</h4>

        {/* Description */}
        <p className="leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
}

/** 
 * Horizontal dotted connector that auto-fills available width.
 * Works by repeating a small circle pattern; mask fades the ends slightly.
 * Supports customizable first and last dot colors.
 */
function ConnectorDotsHorizontal({ 
  className = "",
  firstDotColor = "#991b1b", // red-800
  lastDotColor = "#991b1b"   // red-800
}: { 
  className?: string;
  firstDotColor?: string;
  lastDotColor?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Background dot pattern */}
      <div
        aria-hidden
        className="h-3 w-full"
        style={{
          // dot size & spacing (tweak these two for bigger/smaller dots)
          color: "#d1d5db", // (Tailwind gray-300)
          background:
            "radial-gradient(#d1d5db 2px, transparent 2.5px) center/16px 16px repeat-x",
          // soften the very ends so dots don't butt up against the icon box
          WebkitMaskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      />
      
      {/* First dot overlay */}
      <div
        className="absolute top-1/2 left-0 w-3 h-3 rounded-full transform -translate-y-1/2"
        style={{ 
          backgroundColor: firstDotColor,
          marginLeft: '0%' // Match the mask fade-in
        }}
      />
      
      {/* Last dot overlay */}
      <div
        className="absolute top-1/2 right-0 w-3 h-3 rounded-full transform -translate-y-1/2"
        style={{ 
          backgroundColor: lastDotColor,
          marginRight: '0%' // Match the mask fade-out
        }}
      />
    </div>
  );
}

/**
 * Vertical dotted connector that auto-fills available height.
 * Works by repeating a small circle pattern; mask fades the ends slightly.
 * Supports customizable first and last dot colors.
 */
function ConnectorDotsVertical({ 
  className = "",
  height = "h-32",
  width = "w-[3px]",
  firstDotColor = "#991b1b", // red-800
  lastDotColor = "#991b1b",  // red-800
  dotColor = "#d1d5db"       // gray-300 (default background dots)
}: { 
  className?: string;
  height?: string;
  width?: string;
  firstDotColor?: string;
  lastDotColor?: string;
  dotColor?: string;
}) {
  return (
    <div className={`relative flex justify-center ${className}`}>
      {/* Background dot pattern */}
      <div
        aria-hidden
        className={`${height} ${width}`}
        style={{
          // dot size & spacing (tweak these two for bigger/smaller dots)
          background:
            `radial-gradient(${dotColor} 2px, transparent 2.5px) center/16px 16px repeat-y`,
          // soften the very ends so dots don't butt up against content
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      />
      
      {/* First dot overlay (top) */}
      <div
        className="absolute top-0 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2"
        style={{ 
          backgroundColor: firstDotColor,
          marginTop: '0%' // Match the mask fade-in
        }}
      />
      
      {/* Last dot overlay (bottom) */}
      <div
        className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2"
        style={{ 
          backgroundColor: lastDotColor,
          marginBottom: '0%' // Match the mask fade-out
        }}
      />
    </div>
  );
}
