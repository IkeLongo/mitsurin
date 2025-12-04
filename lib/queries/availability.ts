import {groq} from 'next-sanity'

export const availabilityQuery = groq`
  *[_type == "availabilityType"] | order(_createdAt desc)[0]{
    title,
    pageTitle,
    pageDescription,
    totalCows,
    soldCows,
    "availableCows": totalCows - soldCows,
    status,
    estimatedRestockDate,
    lastUpdated,
    publicMessage
  }
`