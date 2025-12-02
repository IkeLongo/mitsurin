import { stegaClean } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/fetch'
import { availabilityQuery } from '@/lib/queries/availability'
import type { Availability } from '@/types/availability'

export default async function SanityAvailabilityHero() {
  const availability = await sanityFetch<Availability | null>({ 
    query: availabilityQuery,
    revalidate: 10
  });

  // Fallback values if no data
  const pageTitle = availability?.pageTitle || '2025 Season Availability';
  const pageDescription = availability?.pageDescription || 'Check our current cattle availability and reserve your premium Wagyu beef from our Texas ranch.';

  return (
    <div 
      className="font-sans flex items-center justify-center pt-36 md:pt-48 lg:pt-52 pb-12 md:pb-16 lg:pb-24 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/raw-fresh-marbled-wagyu-steak.webp')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-slate-900 opacity-80"></div>

      <section
        aria-labelledby="availability-heading"
        className="flex flex-col items-center text-center max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <p className="text-accent-dark text-sm sm:text-base font-extrabold tracking-wide mb-4">
          CATTLE AVAILABILITY
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold font-[Montserrat] leading-tight" data-sanity-edit-target>
          <span className="text-white">{pageTitle.split(' ')[0]} </span>
          <span className="text-accent-dark">{pageTitle.split(' ').slice(1).join(' ')}</span>
        </h1>

        {/* Description */}
        <p className="font-[Montserrat] mt-6 text-stone-100 text-2xl font-medium max-w-3xl" data-sanity-edit-target>
          {pageDescription}
        </p>
      </section>
    </div>
  );
}