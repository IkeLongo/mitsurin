import { groq } from 'next-sanity'

export const premiumCutsQuery = groq`
  *[_type == "premiumCutsType"] | order(displayOrder asc, name asc) {
    _id,
    name,
    description,
    "icon": icon.asset->url,
    availability,
    price,
    priceUnit,
    weight,
    cookingNotes,
    featured,
    category,
    marbling,
    tenderness,
    flavor,
    displayOrder,
    _updatedAt
  }
`