
import Image from "next/image";
import Link from "next/link";

export default function JapaneseGeneticsSection() {
  return (
    <section
      aria-labelledby="japanese-genetics-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        
        {/* Mobile/Tablet Layout (md and below) */}
        <div className="lg:hidden">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h4 
              id="japanese-genetics-heading"
              className="text-2xl md:text-3xl font-bold leading-tight text-red-900 font-[Montserrat] mb-4"
            >
              At Mitsurin Wagyu Beef, we bring the excellence of Japanese genetics to Texas soil.
            </h4>
            <div className="w-24 h-1 bg-yellow-600 rounded-full mx-auto"></div>
          </div>

          {/* Video and Image - Simplified Layout */}
          <div className="flex flex-col-reverse sm:flex-row justify-center items-center mb-8">
            {/* Video Container - Smaller for mobile */}
            <div className="border-4 border-yellow-600 rounded-2xl overflow-hidden shadow-2xl w-80 h-[480px] mr-0 sm:-mr-16">
              <div className="w-full h-full relative">
                <Image
                  src="/wagyu-grazing-over-field.webp"
                  alt="Wagyu cattle grazing peacefully over field at Mitsurin ranch"
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            </div>

            {/* Image - Side by side on tablet, stacked on mobile */}
            <div className="border-4 border-yellow-600 rounded-2xl overflow-hidden shadow-2xl mt-0 sm:-mt-20 -mb-10 sm:mb-0 z-10">
              <div className="w-64 h-80 relative">
                <Image
                  src="/wagyu-cow-eating-organic-hay.webp"
                  alt="Wagyu cattle eating organic hay at Mitsurin ranch"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center">
            <p className="text-lg leading-relaxed text-black">
              Owned and operated by Dr. Michael Selva. Our ranch is dedicated to raising 
              full-blooded Wagyu cattle using time-honored, humane, and science-backed practices.
            </p>
            <p className="text-lg font-semibold text-black">The result?</p>
            <p className="text-lg italic text-red-900 leading-relaxed">
              Beef with exceptional tenderness, marbling, and flavor that redefines luxury.
            </p>
            <div className="pt-4">
              <Link href="/our-story" className="inline-block bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and up) */}
        <div className="hidden lg:grid grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Video + Overlapping Image */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Video Container */}
            <div className="relative">
              <div 
                className="border-4 border-yellow-600 rounded-2xl overflow-hidden shadow-2xl relative"
                style={{
                  width: '500px',
                  height: '650px'
                }}
              >
                <Image
                  src="/wagyu-grazing-over-field.webp"
                  alt="Wagyu cattle grazing peacefully over field at Mitsurin ranch"
                  fill
                  className="object-cover"
                  sizes="500px"
                />
              </div>

              {/* Overlapping Image - positioned to overlap 1/3 of video width */}
              <div 
                className="absolute -right-24 lg:-right-32 min-[1152px]:-right-40 xl:-right-52 top-1/2 transform -translate-y-2/3 z-10"
              >
                <div className="border-4 border-yellow-600 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-64 h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[400px] relative">
                    <Image
                      src="/wagyu-cow-eating-organic-hay.webp"
                      alt="Wagyu cattle eating organic hay at Mitsurin ranch"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6 lg:pl-24">
            {/* Main Heading */}
            <h4 
              id="japanese-genetics-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-red-900 font-[Montserrat]"
            >
              At Mitsurin Wagyu Beef, we bring the excellence of Japanese genetics to Texas soil.
            </h4>

            {/* Yellow horizontal line */}
            <div className="w-24 h-1 bg-yellow-600 rounded-full"></div>

            {/* Text Content - 3 rows */}
            <div className="space-y-6">
              {/* First text block */}
              <p className="text-lg leading-relaxed text-black">
                Owned and operated by Dr. Michael Selva. Our ranch is dedicated to raising 
                full-blooded Wagyu cattle using time-honored, humane, and science-backed practices.
              </p>

              {/* Second text block */}
              <p className="text-lg font-semibold text-black">
                The result?
              </p>

              {/* Third text block - italics and red */}
              <p className="text-lg italic text-red-900 leading-relaxed">
                Beef with exceptional tenderness, marbling, and flavor that redefines luxury.
              </p>
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link href="/our-story" className="inline-block bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Learn Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}