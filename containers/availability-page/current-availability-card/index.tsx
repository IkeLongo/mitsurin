// Server component wrapper for current availability
import { stegaClean } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/fetch'
import { availabilityQuery } from '@/lib/queries/availability'
import { premiumCutsQuery } from '@/lib/queries/premium-cuts'
import { cowPurchaseQuery } from '@/lib/queries/cow-purchase'
import type { Availability } from '@/types/availability'
import type { PremiumCut } from '@/types/premium-cuts'
import CurrentAvailabilityClient from './availability-client'

export default async function CurrentAvailabilityCard() {
  const [availability, premiumCuts, cowPurchases] = await Promise.all([
    sanityFetch<Availability | null>({ 
      query: availabilityQuery,
      revalidate: 10 // More balanced revalidation for visual editing
    }),
    sanityFetch<PremiumCut[]>({ 
      query: premiumCutsQuery,
      revalidate: 10
    }),
    sanityFetch<any[]>({ 
      query: cowPurchaseQuery,
      revalidate: 10
    })
  ]);

  return (
    <CurrentAvailabilityClient 
      availability={availability}
      premiumCuts={premiumCuts}
      cowPurchases={cowPurchases}
    />
  );
}