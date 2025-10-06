"use client";

import Image from "next/image";

type MeatCard = {
  title: string;
  description: string;
  iconSrc?: string;
};

const meatCards: MeatCard[] = [
  { title: "Beef Meat",  description: "Quisque purus purus feugiat quis nisi vel.", iconSrc: "https://placehold.co/62x62" },
  { title: "Turkey Meat", description: "Quisque purus purus feugiat quis nisi vel.", iconSrc: "https://placehold.co/62x62" },
  { title: "Lamb Meat",  description: "Quisque purus purus feugiat quis nisi vel.", iconSrc: "https://placehold.co/62x62" },
];

const bullets = [
  "100% Organic Meat",
  "No Hormones or Antibiotics",
  "Pasture-Raised on Texas Grasslands",
  "Pure Japanese Genetics",
  "Grain Finished for Optimal Marbling",
  "Stress-Free Handling",
];

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-mitsurin-heading"
      className="w-full max-w-2xl mx-auto lg:max-w-[1320px] py-12"
    >

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Combined cards + image section */}
        <div className="relative">
          {/* Background: Framed image */}
          <div className="relative mx-auto lg:ml-auto">
            {/* Back frame - positioned down and left */}
            <div className="absolute right-4 top-4 w-full h-full border-[6px] border-yellow-600 rounded-sm z-10 max-w-[376px] max-h-[528px]" />
            {/* Foreground image with a 1px border */}
            <div className="">
              <Image
                src="/about-section-cow.webp"
                alt="Marbled Wagyu beef cut"
                width={376}
                height={528}
                className="object-cover border border-yellow-600 ml-auto"
                priority
              />
            </div>
          </div>

          {/* Foreground: Meat cards positioned absolutely to hover over image */}
          <div className="absolute inset-0 flex flex-col justify-center space-y-4 xl:space-y-6 z-20">
            {meatCards.map(({ title, description, iconSrc }) => (
              <article
                key={title}
                className="relative rounded-lg bg-red-900 text-stone-100 p-3 pl-16 min-h-24 shadow-lg xl:shadow-2xl max-w-xs"
              >
                {/* Icon */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconSrc}
                    alt=""
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <h3 className="text-yellow-200 text-lg font-semibold">{title}</h3>
                <p className="text-xs leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Right: Copy + bullets */}
        <div>
          {/* Eyebrow */}
          <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
            ABOUT MITSURIN WAGYU BEEF
          </p>

          <h2
            id="about-mitsurin-heading"
            className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight"
          >
            <span className="text-red-900">Wagyu is More than a Breed — It's a </span>
            <span className="text-yellow-600">Legacy!</span>
          </h2>

          <p className="mt-6 text-stone-950 text-lg">
            Known for its superior marbling, velvety texture, and rich umami flavor.{" "}
            <strong>Wagyu beef is prized worldwide.</strong> At Mitsurin, we raise&nbsp;
            full-blooded Japanese Wagyu, ensuring purity, consistency, and distinction.
          </p>

          <ul className="mt-8 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-stone-950">
                {/* Simple square bullet to avoid adding an icon package */}
                <span aria-hidden className="mt-1 inline-block w-2.5 h-2.5 bg-red-800 rounded-[2px]" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
