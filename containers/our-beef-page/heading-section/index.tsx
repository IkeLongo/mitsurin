

export default function HeadingSection() {
  return (
    <div 
      className="font-sans flex items-center justify-center pt-36 md:pt-48 lg:pt-52 pb-12 md:pb-16 lg:pb-24 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/wagyu-steak-for-dinner.webp')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-slate-900 opacity-50"></div>

      <section
        aria-labelledby="discover-the-difference"
        className="flex flex-col items-center text-center max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4">
          PREMIUM WAGYU
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight">
          <span className="text-white">Our </span>
          <span className="text-accent-dark">Beef</span>
        </h1>

        {/* Description */}
        <p className="font-[Montserrat] mt-6 text-stone-100 text-2xl font-medium max-w-3xl">
          Crafted Over Years. Savored in Moments.
        </p>
      </section>
    </div>
  );
}