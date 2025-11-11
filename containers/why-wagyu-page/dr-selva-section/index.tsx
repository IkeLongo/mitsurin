
export default function DrSelvaSection() {
  return (
    <section
      aria-labelledby="dr-selva-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Quote Box */}
        <div className="bg-red-900 border-2 border-yellow-600 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto flex justify-center flex-col items-center text-center">
          {/* Quotation Mark */}
          <div className="mb-4">
            <img 
              src="/quotation.svg" 
              alt="Quote"
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </div>

          {/* Quote Text */}
          <blockquote className="text-white text-lg md:text-xl lg:text-3xl leading-relaxed mb-8 font-light">
            It can be part of a balanced diet that supports heart health, without sacrificing taste. 
            With its melt-in-your-mouth texture and unmatched flavor, Wagyu offers a luxurious 
            experience with a nutritional edge.
          </blockquote>

          {/* Horizontal Line */}
          <div className="w-full h-px bg-yellow-600 mb-6"></div>

          {/* Attribution */}
          <cite className="text-yellow-600 text-lg md:text-xl font-semibold not-italic">
            Dr. Michael Selva
          </cite>
        </div>
      </div>
    </section>
  );
}