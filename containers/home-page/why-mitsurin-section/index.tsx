type FeatureCard = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// Feature-specific icons
import { Dna, Leaf, ChefHat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import Aceternity UI 3D Card Components
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/card/3d/3d-card";

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
    description: "Rich umami taste and buttery texture that melts in your mouth - a true culinary experience.",
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
      <Icon className="w-8 h-8 text-yellow-600" />
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
      className="w-full bg-red-900"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left Column: Text + Feature Cards */}
          <div className="flex flex-col h-full">
            <div className="space-y-8">
              {/* Eyebrow text */}
              <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
                WHY CHOOSE WAGYU
              </p>

              {/* Main heading */}
              <h3
                id="why-mitsurin-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Montserrat] leading-tight text-white"
              >
                Choose The Best Wagyu, Choose <span className="text-yellow-600">Mitsurin Wagyu</span>
              </h3>
            </div>

            {/* Feature cards stack - fills remaining space */}
            <div className="flex flex-col justify-around flex-1 mt-8 space-y-4 lg:space-y-0">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>

          {/* Right Column: 3D Card */}
          <div className="flex items-center justify-center">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-800 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Premium Wagyu Experience
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
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

                {/* Quality Score Rows */}
                <CardItem translateZ="80" className="w-full mt-6">
                  <div className="space-y-4">
                    {/* Marbling Score */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-300">Marbling</span>
                        <span className="text-neutral-600 dark:text-neutral-300 font-semibold">A5</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>

                    {/* Tenderness Score */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-300">Tenderness</span>
                        <span className="text-neutral-600 dark:text-neutral-300 font-semibold">Exceptional</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>

                    {/* Flavor Score */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-300">Flavor Intensity</span>
                        <span className="text-neutral-600 dark:text-neutral-300 font-semibold">Rich</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>

                    {/* Overall Quality Score */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600 dark:text-neutral-300">Overall Quality</span>
                        <span className="text-neutral-600 dark:text-neutral-300 font-semibold">Premium+</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Link href="/our-beef">
                      Learn More →
                    </Link>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
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