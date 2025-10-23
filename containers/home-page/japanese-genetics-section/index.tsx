
import Image from "next/image";

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
            <div className="bg-gray-800 border-4 border-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl w-80 h-[480px] mr-0 sm:-mr-16">
              <div className="text-center text-white">
                <div className="w-12 h-12 mx-auto mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-sm font-medium">Ranch Video</p>
              </div>
            </div>

            {/* Image - Side by side on tablet, stacked on mobile */}
            <div className="border-4 border-yellow-600 rounded-2xl overflow-hidden shadow-2xl mt-0 sm:-mt-20 -mb-10 sm:mb-0 z-10">
              <div className="bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center w-64 h-80">
                <p className="text-white text-sm font-semibold text-center">
                  Wagyu Cattle<br />
                  Image
                </p>
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
              <button className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                Learn Our Story
              </button>
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
                className="bg-gray-800 border-4 border-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{
                  width: '500px',
                  height: '650px'
                }}
              >
                {/* Video placeholder content */}
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-8 h-8" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Ranch Video</p>
                  <p className="text-sm opacity-75 mt-2">500 x 650</p>
                </div>
              </div>

              {/* Overlapping Image - positioned to overlap 1/3 of video width */}
              <div 
                className="absolute -right-24 lg:-right-32 min-[1152px]:-right-40 xl:-right-52 top-1/2 transform -translate-y-2/3 z-10"
              >
                <div className="border-4 border-yellow-600 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center
                                 w-64 h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[400px]">
                    {/* Image placeholder - replace with actual image */}
                    <p className="text-white text-sm lg:text-base font-semibold text-center">
                      Wagyu Cattle<br />
                      Image Placeholder<br />
                      <span className="hidden xl:inline">320 x 400</span>
                      <span className="hidden lg:inline xl:hidden">288 x 384</span>
                      <span className="inline lg:hidden">256 x 320</span>
                    </p>
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
              <button className="bg-red-900 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}