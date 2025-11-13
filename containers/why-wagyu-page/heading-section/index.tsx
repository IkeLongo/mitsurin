

export default function HeadingSection() {
  return (
    <div 
      className="font-sans flex items-center justify-center pt-40 md:pt-48 lg:pt-52 pb-12 md:pb-16 lg:pb-24 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/wagyu-meat-bg.webp')"
      }}
    >
      
      <section
        aria-labelledby="discover-the-difference"
        className="flex flex-col items-center text-center max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4">
          DISCOVER THE DIFFERENCE
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight">
          <span className="text-white">Why </span>
          <span className="text-yellow-600">Wagyu</span>
          <span className="text-white"> is Worth It</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-stone-100 text-lg max-w-3xl">
          Because you deserve beef that doesn't compromise on taste, texture, or integrity.
        </p>
      </section>
    </div>
  );
}