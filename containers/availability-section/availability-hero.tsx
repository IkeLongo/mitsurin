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
    <section className="bg-red-900 text-white pt-28 md:pt-32 lg:pt-44 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-[Montserrat] mb-6" data-sanity-edit-target>
          {pageTitle}
        </h1>
        <p className="text-xl text-red-100 max-w-2xl mx-auto" data-sanity-edit-target>
          {pageDescription}
        </p>
      </div>
    </section>
  );
}