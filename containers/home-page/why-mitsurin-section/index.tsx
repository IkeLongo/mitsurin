type FeatureCard = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// Feature-specific icons
import { Dna, Leaf, ChefHat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

// Import Aceternity UI 3D Card Components
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/card/3d/3d-card";
import { AnimatedProgressBar } from "@/components/ui/progress/animated-progress-bar";

const features: FeatureCard[] = [
  {
    title: "Premium Quality Genetics",
    description: "100% pure Japanese bloodlines ensure authentic Wagyu characteristics and superior marbling.",
    icon: Dna,
  },
  {
    title: "Sustainable Ranch Practices",
    description: "Ethical farming methods and stress-free environments produce healthier, better-tasting beef.",
    icon: Leaf,
  },
  {
    title: "Unmatched Flavor Profile",
    description: "Rich savory taste and buttery texture that melts in your mouth - a true culinary experience.",
    icon: ChefHat,
  },
];

/** Feature Card Icon Component */
function FeatureIcon({ 
  icon: Icon, 
  className = "" 
}: { 
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}) {
  return (
    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center ${className}`}>
      <Icon className="w-8 h-8 text-accent-dark" />
    </div>
  );
}

/** Feature Card Title Component */
function FeatureTitle({ 
  title, 
  className = "" 
}: { 
  title: string;
  className?: string;
}) {
  return (
    <h4 className={`text-lg font-bold text-white mb-1 ${className}`}>
      {title}
    </h4>
  );
}

/** Feature Card Description Component */
function FeatureDescription({ 
  description, 
  className = "" 
}: { 
  description: string;
  className?: string;
}) {
  return (
    <p className={`text-gray-300 text-sm leading-relaxed ${className}`}>
      {description}
    </p>
  );
}

/** Feature Card Component */
function FeatureCard({ 
  title, 
  description, 
  icon, 
  className = "" 
}: {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}) {
  return (
    <article className={`flex items-center gap-4 p-6 bg-red-950 rounded-lg w-full ${className}`}>
      {/* Icon Component */}
      <FeatureIcon icon={icon} />

      {/* Text Content */}
      <div className="flex-1">
        <FeatureTitle title={title} />
        <FeatureDescription description={description} />
      </div>
    </article>
  );
}

export default function WhyMitsurinSection() {
  return (
    <section
      aria-labelledby="why-mitsurin-heading"
      className="w-full bg-primary-800"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Column: Text + Feature Cards */}
          <div className="flex flex-col h-full">
            <ScrollAnimationWrapper animationType="slideUp">
              <div className="space-y-8">
                {/* Eyebrow text */}
                <p className="text-white text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                  WHY CHOOSE MITSURIN
                </p>

                {/* Main heading */}
                <h3
                  id="why-mitsurin-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Montserrat] leading-tight text-white"
                >
                  <span className="text-accent-dark">Choose The Best</span><br/>
                  Choose Mitsurin<span className="text-accent-dark"></span>
                </h3>
              </div>
            </ScrollAnimationWrapper>

            {/* Feature cards stack - fills remaining space */}
            <div className="flex flex-col justify-around flex-1 mt-8 space-y-4 lg:space-y-0">
              {features.map((feature, index) => (
                <ScrollAnimationWrapper 
                  key={feature.title}
                  animationType="slideRight" 
                  delay={0.3 + (index * 0.2)}
                >
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Card */}
          <div className="flex items-center justify-center">
            <CardContainer className="inter-var">
              <CardBody className="bg-zinc-800 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  Premium Wagyu Experience
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-300 text-sm max-w-sm mt-2"
                >
                  Discover the exceptional quality and flavor that makes Mitsurin Wagyu the finest choice for discerning beef connoisseurs.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/delicious-wagyu-meal.webp"
                    alt="Delicious Wagyu meal showcasing premium beef quality"
                    width={500}
                    height={300}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    priority
                  />
                </CardItem>

                {/* Quality Score Rows - Animated */}
                <CardItem translateZ="80" className="w-full mt-6">
                  <div className="space-y-4">
                    <AnimatedProgressBar
                      label="Marbling"
                      value="A5"
                      percentage={95}
                      delay={200}
                    />
                    
                    <AnimatedProgressBar
                      label="Tenderness"
                      value="Exceptional"
                      percentage={92}
                      delay={400}
                    />
                    
                    <AnimatedProgressBar
                      label="Flavor Intensity"
                      value="Rich"
                      percentage={88}
                      delay={600}
                    />
                    
                    <AnimatedProgressBar
                      label="Overall Quality"
                      value="Premium+"
                      percentage={94}
                      delay={800}
                    />
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white cursor-pointer hover:bg-gray-700 transition-colors"
                  >
                    <Link href="/our-beef">
                      Learn More →
                    </Link>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <Link href="/contact">
                      Order Now
                    </Link>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>       
    </section>
  );
}