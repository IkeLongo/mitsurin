

export default function RaisedWithPurposeSection() {
  return (
    <section
      aria-labelledby="raised-with-purpose-heading"
      className="w-full bg-slate-200"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Main container with relative positioning for layered elements */}
        <div className="relative">
          
          {/* Red rectangle background - positioned left-top, lower z-index */}
          <div 
            className="absolute top-0 md:left-0 lg:left-10 xl:left-20 bg-red-900 rounded-2xl z-0
                       w-40 h-[427px]     /* sm: 320x427 */
                       md:w-60 md:h-[512px]  /* md: 384x512 */
                       lg:w-[480px] lg:h-[640px]  /* lg: 480x640 */
                       xl:w-[540px] xl:h-[720px]"  /* xl: 540x720 (original) */
          />

          {/* Content layout - centered positioning */}
          <div className="relative pt-10 z-10 flex flex-col items-center">
            
            {/* Split heading */}
            <div className="text-left mb-4 lg:mb-8 ml-10 md:ml-20 lg:ml-60 xl:ml-96 w-full">
              <h3 
                id="raised-with-purpose-heading"
                className="font-[Montserrat] text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 leading-tight"
              >
                About Mitsurin Wagyu Beef
              </h3>
              <h3 
                className="font-[Montserrat] text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 leading-tight ml-4 md:ml-5 lg:ml-20"
              >
                Raised with Purpose in Hondo, Texas
              </h3>
            </div>

            {/* Text block - positioned to the right of rectangle, above video */}
            <div className="w-full ml-auto mr-0 mb-8 flex">
              {/* Empty space matching rectangle width */}
              <div className="w-40 md:w-60 lg:w-[480px] xl:w-[540px] md:ml-0 lg:ml-10 xl:ml-20"></div>
              {/* Text content fills remaining space */}
              <div className="flex-1 pl-4 md:pl-6 lg:pl-8 xl:pl-12 pr-0 xl:pr-20">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Meet the ranch and philosophy behind Mitsurin Wagyu Beef,
                  founded by Dr. Micheal Selva to raise the world's best beef in Texas.
                </p>
              </div>
            </div>

            {/* Video placeholder - centered-ish, overlapping rectangle */}
            <div className="relative">
              <div 
                className="bg-gray-800 rounded-xl shadow-2xl flex items-center justify-center
                           w-[400px] h-[225px]     /* sm: 400x225 (16:9) */
                           sm:w-[500px] sm:h-[281px]     /* sm: 500x281 (16:9) */
                           md:w-[640px] md:h-[360px]  /* md: 640x360 (16:9) */
                           lg:w-[800px] lg:h-[450px]  /* lg: 800x450 (16:9) */
                           xl:w-[1000px] xl:h-[562px]" /* xl: 1000x562 (16:9) */
              >
                {/* Video placeholder content */}
                <div className="text-center text-white">
                  <div className="w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 mx-auto mb-2 md:mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base xl:text-lg font-medium">Video Placeholder</p>
                  <p className="text-xs md:text-sm opacity-75 mt-1">
                    <span className="inline xl:hidden">Responsive Video</span>
                    <span className="hidden xl:inline">1000 x 562</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>       
    </section>
  );
}