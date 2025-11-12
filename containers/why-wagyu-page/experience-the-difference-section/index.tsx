
export default function ExperienceTheDifferenceSection() {
  return (
    <div 
      className="font-sans flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/wagyu-steak-for-dinner.webp')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-slate-900 opacity-50"></div>
      
      <section
        aria-labelledby="experience-the-difference-heading"
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24"
      >
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight">
          Experience the Difference with <span className="text-yellow-600">Wagyu</span>
        </h1>

        {/* Description */}
        <p className="mt-10 text-stone-100 text-lg max-w-3xl">
          Elevate every meal with unmatched tenderness, rich marbling, and unforgettable flavor.
        </p>

        {/* Button */}
        <button className="border-2 border-white hover:bg-gray-200/25 text-white font-semibold mt-10 px-6 py-3 rounded-lg text-md lg:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
          Contact Us
        </button>

        {/* Yellow Horizontal Line */}
        <div className="w-full h-0.5 bg-yellow-600 my-20" />

        <p>Learn More About Wagyu</p>
        <p className="text-yellow-600 mt-4"><a href="https://wagyu.org" target="_blank" rel="noopener noreferrer">American Wagyu Association — wagyu.org</a></p>

      </section>
    </div>
  );
}