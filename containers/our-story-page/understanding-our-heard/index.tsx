import { BadgeCheck, Beef, GitBranch } from "lucide-react";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function BreedingExcellenceSection() {
  return (
    <section
      aria-labelledby="breeding-excellence-heading"
      className="w-full bg-white-100"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <ScrollAnimationWrapper animationType="slideUp">
          {/* Eyebrow */}
          <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
            BREEDING EXCELLENCE
          </p>

          {/* Main Heading */}
          <h3
            id="breeding-excellence-heading"
            className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-8 text-center text-primary-800"
          >
            Understanding Our Herd
          </h3>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animationType="fade" delay={0.2}>
          <p className="text-stone-950 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10">
            At Mitsurin Wagyu, we maintain a diverse herd to meet different needs and preferences, 
            all raised with the same commitment to excellence.
          </p>
        </ScrollAnimationWrapper>

        {/* Desktop Layout: One column, two rows */}
        <div className="flex flex-col gap-10">
          {/* Top Row: Four cards with sequential animations */}
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-0">
              {cardData.map((item, index) => (
                <ScrollAnimationWrapper 
                  key={item.title}
                  animationType="slideUp" 
                  delay={0.2 + (index * 0.15)}
                >
                  <div className="relative group block p-2 h-full w-full">
                    <div className="relative h-full w-full p-6 bg-gray-50 rounded-2xl border border-primary-800 group-hover:bg-primary-800 transition duration-200">
                      {item.icon}
                      <h4 className="text-primary-800 text-center text-xl font-bold mb-4 group-hover:text-white transition duration-200">
                        {item.title}
                      </h4>
                      <p className="text-stone-900 text-center text-md leading-relaxed group-hover:text-white transition duration-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const cardData = [
  {
    title: "100% Registered Wagyu",
    description: `Our premium tier features fullblood, registered Wagyu cattle with documented lineage 
    and the highest genetic standards. Complete certification and verified pedigree.`,
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-primary-800 group-hover:bg-gray-50 rounded-full flex items-center justify-center mb-6 mx-auto transition duration-200">
        <BadgeCheck className="text-accent-dark" size={32} />
      </div>
    ),
    alt: "Registered Wagyu with certified pedigree",
  },
  {
    title: "Pure Wagyu",
    description: `Purebred Wagyu cattle that deliver exceptional marbling and flavor, though not formally registered. 
    Premium quality without the premium registration costs.`,
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-primary-800 group-hover:bg-gray-50 rounded-full flex items-center justify-center mb-6 mx-auto transition duration-200">
        <Beef className="text-accent-dark" size={32} />
      </div>
    ),
    alt: "Pure Wagyu beef with exceptional marbling",
  },
  {
    title: "F1 - F2 Wagyu Cross",
    description: `Crossbred (50% - 75% Wagyu) offering a superb balance of Wagyu quality and value. 
    Enhanced tenderness and flavor with accessible pricing.`,
    link: "#",
    icon: (
      <div className="w-16 h-16 bg-primary-800 group-hover:bg-gray-50 rounded-full flex items-center justify-center mb-6 mx-auto transition duration-200">
        <GitBranch className="text-accent-dark" size={32} />
      </div>
    ),
    alt: "F1 Wagyu crossbreed cattle",
  },
];