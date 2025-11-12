import Carousel from '@/components/ui/card/carousel/carousel-logic';
import CarouselCard from "@/components/ui/card/carousel/carousel-card";

export default function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Eyebrow */}
        <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-center">
          HOW IT WORKS
        </p>

        {/* Main Heading */}
        <h3
          id="wagyu-experience-heading"
          className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-12 text-center text-red-900"
        >
          Our
          <span className="text-yellow-600"> Ordering Process</span>
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cardInfo.map((card, index) => (
            <CarouselCard
              key={index}
              number={card.number}
              title={card.title}
              description={card.description}
              styles={{
                border: "border-none",
                background: "bg-transparent",
                paddingY: "py-6",
                circle: "bg-red-900",
                titleText: "text-red-900",
                numberText: "text-yellow-600",
                descriptionText: "text-stone-950",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const cardInfo = [
  {
    number: "1",
    title: "Contact Us",
    description: "Reach out via phone or email to discuss your order. We'll answer all your questions about our Wagyu beef.",
  },
  {
    number: "2",
    title: "Place Your Order",
    description: "Choose from 1/2 cow or whole cow options. We'll schedule processing and delivery at your convenience.",
  },
  {
    number: "3",
    title: "Enjoy Premium Beef",
    description: "Receive your premium Wagyu beef, expertly processed and ready to transform your meals.",
  },
]