import Image from "next/image";

export default function DiscoverSection() {
  return (
    <section
      aria-labelledby="about-mitsurin-heading"
      className="w-full bg-red-900"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <h3
            id="discover-mitsurin-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Montserrat] leading-tight text-stone-900 mb-8"
          >
            <span className="text-white">Discover the </span>
            <span className="text-yellow-600">Mitsurin</span>
            <span className="text-white"> Difference</span>
          </h3>

          {/* Quote */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white font-light italic leading-relaxed mb-12">
            "Every cut tells a story of tradition, passion, and uncompromising quality. 
            Experience Wagyu beef the way it was meant to be."
          </blockquote>

          {/* Author */}
          <cite className="block text-white text-lg font-medium mb-12">
            — Dr. Michael Selva
          </cite>

          {/* Button */}
          <button className="bg-white hover:bg-gray-200 text-red-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
            Explore Our Products
          </button>
        </div>
      </div>       
    </section>
  );
}