import Carousel from '@/components/ui/card/carousel/carousel-logic';
import CarouselCard from "@/components/ui/card/carousel/carousel-card";
import ScrollAnimationWrapper from "@/components/ui/animation/scroll-animation-wrapper";

export default function WagyuExperienceSection() {
  return (
    <section
      aria-labelledby="wagyu-experience-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <ScrollAnimationWrapper animationType="slideUp">
          {/* Eyebrow */}
          <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
            THE WAGYU EXPERIENCE
          </p>

          {/* Main Heading */}
          <h3
            id="wagyu-experience-heading"
            className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-12 text-center text-red-900"
          >
            What to Expect with Every Bite
          </h3>
        </ScrollAnimationWrapper>

        {/* Carousel Cards */}
        <Carousel 
          cards={cardInfo.map((card, index) => (
            <CarouselCard
              key={index}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
          autoPlay={true}
          autoPlayInterval={5000}
          className="max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
}

const cardInfo = [
  {
    number: "1",
    title: "Buttery Texture",
    description: "The intense marbling creates a melt-in-your-mouth sensation unlike any other beef.",
  },
  {
    number: "2",
    title: "Rich Savory Flavor",
    description: "Deep, complex flavors that evolve with each bite, enhanced by natural fats.",
  },
  {
    number: "3",
    title: "Unparalleled Marbling",
    description: "Experience the rich, buttery flavor that only Wagyu beef can offer.",
  },
]