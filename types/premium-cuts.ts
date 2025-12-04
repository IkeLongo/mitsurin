export type PremiumCut = {
  _id: string
  name: string
  description: string
  icon?: string // URL to icon/image or emoji
  availability: 'available' | 'limited' | 'soldOut'
  price?: number
  priceUnit?: string // 'per lb', 'per piece', etc.
  weight?: string // '12 oz', '1.5 lbs', etc.
  cookingNotes?: string
  featured?: boolean
  category?: 'steak' | 'roast' | 'ground' | 'specialty' | 'other'
  marbling?: 'high' | 'medium' | 'low'
  tenderness?: 'very tender' | 'tender' | 'moderate'
  flavor?: 'intense' | 'rich' | 'mild' | 'buttery'
  lastUpdated?: string
  displayOrder?: number
}

export type PremiumCutsCollection = {
  title?: string
  description?: string
  cuts: PremiumCut[]
  lastUpdated?: string
}
