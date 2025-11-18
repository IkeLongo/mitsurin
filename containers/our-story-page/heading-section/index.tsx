

export default function HeadingSection() {
  return (
    <div 
      className="font-sans flex items-center justify-center pt-48 md:pt-48 lg:pt-52 pb-12 md:pb-16 lg:pb-24 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/wagyu-on-pasture-hondo-texas.webp')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-slate-900 opacity-50"></div>

      <section
        aria-labelledby="discover-the-difference"
        className="flex flex-col items-center text-center max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4">
          MITSURIN WAGYU
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight">
          <span className="text-white">Our </span>
          <span className="text-white">Story</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-stone-100 text-lg max-w-3xl">
          What started with one steak became a mission to raise the finest beef in Texas!
        </p>
      </section>
    </div>
  );
}