// app/(site)/components/AvailabilitySection.tsx
import { stegaClean } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/fetch'
import { availabilityQuery } from '@/lib/queries/availability'
import { premiumCutsQuery } from '@/lib/queries/premium-cuts'
import AvailabilitySectionClient from './availability-section-client'
import type { Availability } from '@/types/availability'
import type { PremiumCut } from '@/types/premium-cuts'

export default async function SanityAvailabilitySection() {
  const [availability, premiumCuts] = await Promise.all([
    sanityFetch<Availability | null>({ 
      query: availabilityQuery,
      revalidate: 10 // More balanced revalidation for visual editing
    }),
    sanityFetch<PremiumCut[]>({ 
      query: premiumCutsQuery,
      revalidate: 10
    })
  ]);


  if (!availability) {
    return (
      <section className="bg-accent-dark border-2 border-accent-dark rounded-lg p-8 max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold font-[Montserrat] text-white mb-4">Availability Section</h2>
          <p className="text-yellow-100 text-lg">
            No availability data found. Please create an availability document in Sanity Studio.
          </p>
        </div>
      </section>
    );
  }

  const {
    title,
    totalCows,
    soldCows,
    availableCows,
    status,
    estimatedRestockDate,
    publicMessage,
  } = availability

  const statusLabel =
    status === 'available'
      ? 'Available'
      : status === 'limited'
      ? 'Limited Stock'
      : 'Sold Out'

  return (
    <section className="bg-gray-100 border-2 border-accent-dark rounded-lg p-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-[Montserrat] text-primary-800 mb-4" data-sanity-edit-target>{title}</h2>
        <span
          className={[
            'inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold',
            status === 'available' && 'bg-green-600 text-white',
            status === 'limited' && 'bg-accent-dark text-white',
            status === 'soldOut' && 'bg-red-600 text-white',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {statusLabel}
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-3 mb-8">
        <div className="text-center">
          <p className="text-xs uppercase font-semibold text-accent-dark mb-2 tracking-wide">Total Cattle</p>
          <p className="text-3xl font-bold text-primary-800" data-sanity-edit-target>{stegaClean(totalCows)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase font-semibold text-accent-dark mb-2 tracking-wide">Sold</p>
          <p className="text-3xl font-bold text-primary-800" data-sanity-edit-target>{stegaClean(soldCows)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase font-semibold text-accent-dark mb-2 tracking-wide">Available</p>
          <p className="text-3xl font-bold text-primary-800">
            {stegaClean(availableCows) > 0 ? stegaClean(availableCows) : 0}
          </p>
        </div>
      </div>

      {/* Visual Herd Display */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-primary-800 text-center mb-4">The Herd</h3>
        
        {/* Progress Bar */}
        <div className="relative bg-gray-200 rounded-full h-14 mb-6 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-l-full transition-all duration-1000 ease-out"
            style={{ width: `${stegaClean(totalCows) > 0 ? (stegaClean(availableCows) / stegaClean(totalCows)) * 100 : 0}%` }}
          />
          <div 
            className="absolute top-0 right-0 h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-r-full transition-all duration-1000 ease-out"
            style={{ width: `${stegaClean(totalCows) > 0 ? (stegaClean(soldCows) / stegaClean(totalCows)) * 100 : 0}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-white drop-shadow-sm">
              {stegaClean(availableCows)} of {stegaClean(totalCows)} available
            </span>
          </div>
        </div>

        {/* Cow Icons Display */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {/* Available cows first */}
          {Array.from({ length: stegaClean(availableCows) }, (_, index) => (
            <div
              key={`available-${index}`}
              className="transition-all duration-300 hover:scale-110 hover:cursor-pointer opacity-100"
              title="Available"
            >
              <img 
                src="/cow.svg" 
                alt="Available cow" 
                className="w-12 h-12"
              />
            </div>
          ))}
          {/* Sold cows after */}
          {Array.from({ length: stegaClean(soldCows) }, (_, index) => (
            <div
              key={`sold-${index}`}
              className="transition-all duration-300 hover:scale-110 hover:cursor-pointer opacity-40 grayscale"
              title="Sold"
            >
              <img 
                src="/cow.svg" 
                alt="Sold cow" 
                className="w-12 h-12"
              />
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <img 
              src="/cow.svg" 
              alt="Available" 
              className="w-8 h-8 opacity-100"
            />
            <span className="text-green-600 font-medium">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <img 
              src="/cow.svg" 
              alt="Sold" 
              className="w-8 h-8 opacity-40 grayscale"
            />
            <span className="text-red-600 font-medium">Sold</span>
          </div>
        </div>
      </div>

      {estimatedRestockDate && (
        <div className="text-center mb-6 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-lg text-stone-950">
            <span className="font-semibold text-primary-800">Estimated restock:</span>{' '}
            <span className="font-medium" data-sanity-edit-target>
              {new Date(stegaClean(estimatedRestockDate)).toLocaleDateString()}
            </span>
          </p>
        </div>
      )}

      {publicMessage && (
        <div className="text-center p-4 bg-primary-800 rounded-lg">
          <p className="whitespace-pre-wrap text-lg text-white leading-relaxed" data-sanity-edit-target>
            {publicMessage}
          </p>
        </div>
      )}

      {/* Available Cuts Section */}
      <div className="mt-12 pt-8 border-t border-accent-dark">
        <h3 className="text-2xl font-bold font-[Montserrat] text-primary-800 text-center mb-8">Premium Cuts Available</h3>
        
        <AvailabilitySectionClient 
          premiumCuts={premiumCuts}
          documentId={(availability as any)?._id || 'availability'}
          documentType="availability"
        />

        {/* Contact for More Cuts */}
        <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Looking for a specific cut?</p>
          <p className="text-lg font-semibold text-primary-800">Contact us for custom orders and special requests</p>
        </div>
      </div>
    </section>
  );
}
