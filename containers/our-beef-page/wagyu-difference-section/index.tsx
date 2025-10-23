import Image from "next/image";

export default function WagyuDifferenceSection() {
  return (
    <section
      aria-labelledby="wagyu-difference-heading"
      className="w-full bg-gray-50"
    >
      <div className="max-w-2xl mx-auto lg:max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/delicious-sliced-raw-wagyu.webp"
              alt="Premium Wagyu beef cuts showcasing marbling"
              width={600}
              height={400}
              className="object-cover rounded-2xl"
              style={{ borderRadius: '1rem' }}
              priority
            />
          </div>

          {/* Right: Text Content */}
          <div>
            {/* Eyebrow */}
            <p className="text-yellow-600 text-sm sm:text-base font-extrabold tracking-wide mb-4 text-left">
              WHAT IS WAGYU?
            </p>

            {/* Main Heading */}
            <h3
              id="what-is-wagyu-heading"
              className="text-3xl sm:text-4xl font-bold font-[Montserrat] leading-tight mb-6"
            >
              <span className="text-red-900">The Pinnacle of </span><br />
              <span className="text-yellow-600">Beef Quality</span>
            </h3>

            {/* Description */}
            <p className="text-stone-950 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum.
            </p>

            <p className="mt-4 text-stone-950 text-lg leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}