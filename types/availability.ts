export type Availability = {
  title: string
  pageTitle?: string
  pageDescription?: string
  totalCows: number
  soldCows: number
  availableCows: number
  status: 'available' | 'limited' | 'soldOut'
  estimatedRestockDate?: string
  lastUpdated?: string
  publicMessage?: string
}