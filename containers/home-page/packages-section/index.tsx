import { HoverEffect } from "@/components/ui/card/hover/card-hover-effect";

export default function PackagesSection() {
  return (
    <section
      aria-labelledby="about-mitsurin-heading"
      className="w-full bg-slate-200"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4">
            OUR PRODUCT
          </p>

          {/* Title */}
          <h3
            id="packages-section-heading"
            className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight text-stone-900 mb-8"
          >
            Premium Beef Packages
          </h3>

          {/* Description */}
          <p className="text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          <HoverEffect items={packages} />
        </div>
      </div>       
    </section>
  );
}

export const packages = [
  {
    title: "Whole Cow",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    image: "/whole-cow-icon.webp",
    alt: "Whole Cow Package",
  },
  {
    title: "Half Cow",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    image: "/half-cow-icon.webp",
    alt: "Half Cow Package",
  },
];