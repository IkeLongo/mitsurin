// lib/queries/cow-purchase.ts
import { groq } from 'next-sanity'

export const cowPurchaseQuery = groq`
  *[_type == "cowPurchaseType"] | order(displayOrder asc, name asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    description,
    "icon": icon.asset->url,
    availability,
    basePrice,
    priceUnit,
    processingState,
    estimatedWeight,
    estimatedYield,
    freezerSpaceRequired,
    deliveryZone,
    processingTime,
    depositRequired,
    processingIncluded,
    processingCost,
    includes,
    notes,
    featured,
    displayOrder,
    minimumNotice,
    availableSeasons
  }
`

export const featuredCowPurchaseQuery = groq`
  *[_type == "cowPurchaseType" && featured == true] | order(displayOrder asc, name asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    description,
    "icon": icon.asset->url,
    availability,
    basePrice,
    priceUnit,
    processingState,
    estimatedWeight,
    estimatedYield,
    freezerSpaceRequired,
    deliveryZone,
    processingTime,
    depositRequired,
    processingIncluded,
    processingCost,
    includes,
    notes,
    featured,
    displayOrder,
    minimumNotice,
    availableSeasons
  }
`

export const availableCowPurchaseQuery = groq`
  *[_type == "cowPurchaseType" && availability in ["available", "limited", "preOrder"]] | order(displayOrder asc, name asc) {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    description,
    "icon": icon.asset->url,
    availability,
    basePrice,
    priceUnit,
    processingState,
    estimatedWeight,
    estimatedYield,
    freezerSpaceRequired,
    deliveryZone,
    processingTime,
    depositRequired,
    processingIncluded,
    processingCost,
    includes,
    notes,
    featured,
    displayOrder,
    minimumNotice,
    availableSeasons
  }
`

export const cowPurchaseByIdQuery = groq`
  *[_type == "cowPurchaseType" && _id == $id][0] {
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    description,
    "icon": icon.asset->url,
    availability,
    basePrice,
    priceUnit,
    processingState,
    estimatedWeight,
    estimatedYield,
    freezerSpaceRequired,
    deliveryZone,
    butcherRequirements,
    processingTime,
    depositRequired,
    processingIncluded,
    processingCost,
    includes,
    notes,
    featured,
    displayOrder,
    minimumNotice,
    availableSeasons
  }
`