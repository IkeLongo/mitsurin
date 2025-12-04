"use client";

import { useState, useEffect } from 'react'
import { stegaClean, createDataAttribute } from 'next-sanity'
import { useOptimistic } from 'next-sanity/hooks'
import PremiumCutModal from '@/components/ui/modal/premium-cut-modal'
import CowPurchaseOptionModal from '@/components/ui/modal/cow-purchase-option-modal'
import { client } from '@/sanity/lib/client'
import type { PremiumCut } from '@/types/premium-cuts'
import type { Availability } from '@/types/availability'

const { projectId, dataset, stega } = client.config()
export const createDataAttributeConfig = {
  projectId,
  dataset,
  baseUrl: typeof stega.studioUrl === 'string' ? stega.studioUrl : '',
}

interface CowPurchase {
  _id: string
  name: string
  description: string
  availability: string
  basePrice: number
  priceUnit: string
  processingState: string
  estimatedWeight: string
  estimatedYield: string
  freezerSpaceRequired: string
  deliveryZone?: {
    within100Miles: boolean
    beyond100Miles: boolean
    deliveryFeePerMile: number
  }
  butcherRequirements?: {
    required: boolean
    maxDistanceFromHondo: number
    requirements: string[]
    additionalNotes: string
  }
  processingTime: string
  depositRequired: number
  processingIncluded: boolean
  processingCost: number
  includes: string[]
  notes: string
  minimumNotice: string
}

interface Props {
  availability: Availability | null;
  premiumCuts: PremiumCut[];
  cowPurchases: CowPurchase[];
}

export default function CurrentAvailabilityClient({ availability, premiumCuts: initialPremiumCuts, cowPurchases: initialCowPurchases }: Props) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const [selectedCut, setSelectedCut] = useState<PremiumCut | null>(null)
  const [selectedCowPurchase, setSelectedCowPurchase] = useState<CowPurchase | null>(null)
  const [isPremiumCutModalOpen, setIsPremiumCutModalOpen] = useState(false)
  const [isCowPurchaseModalOpen, setIsCowPurchaseModalOpen] = useState(false)

  // Calculate target percentage for progress bar animation
  const targetPercentage = availability && stegaClean(availability.totalCows) > 0 
    ? (stegaClean(availability.availableCows) / stegaClean(availability.totalCows)) * 100 
    : 0;

  // Animate from 0 to target percentage on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(targetPercentage);
    }, 500); // Start animation after 500ms
    
    return () => clearTimeout(timer);
  }, [targetPercentage]);

  const premiumCuts = useOptimistic<PremiumCut[] | undefined, any>(
    initialPremiumCuts,
    (state, action) => {
      // Handle optimistic updates for individual premium cut documents
      if (action.id && action.document && state) {
        return state.map(cut => 
          cut._id === action.id ? { ...cut, ...action.document } : cut
        )
      }
      return state
    }
  )

  const handleCutClick = (cut: PremiumCut) => {
    setSelectedCut(cut)
    setIsPremiumCutModalOpen(true)
  }

  const handleCowPurchaseClick = (purchase: CowPurchase) => {
    setSelectedCowPurchase(purchase)
    setIsCowPurchaseModalOpen(true)
  }

  const handleClosePremiumCutModal = () => {
    setIsPremiumCutModalOpen(false)
    setSelectedCut(null)
  }

  const handleCloseCowPurchaseModal = () => {
    setIsCowPurchaseModalOpen(false)
    setSelectedCowPurchase(null)
  }

  // Helper function to get default icon for cuts without images
  function getDefaultIcon(cutName: string): string {
    const iconMap: { [key: string]: string } = {
      'Ribeye': '🥩',
      'Filet Mignon': '🔸',
      'NY Strip': '📏',
      'Porterhouse': '🏛️',
      'Tomahawk': '🪓',
      'Brisket': '🔥',
      'Ground Wagyu': '⚪',
      'Short Ribs': '🦴',
    }
    return iconMap[cutName] || '🥩'
  }

  // Fallback cuts data - used when Sanity data is not available
  const fallbackCutsData: PremiumCut[] = [
    {
      _id: 'fallback-1',
      name: "Ribeye",
      description: "Rich marbling, intense flavor",
      availability: 'available'
    },
    {
      _id: 'fallback-2',
      name: "Filet Mignon",
      description: "Tender, buttery texture",
      availability: 'available'
    },
    {
      _id: 'fallback-3',
      name: "NY Strip",
      description: "Perfect balance of tenderness",
      availability: 'limited'
    },
    {
      _id: 'fallback-4',
      name: "Porterhouse",
      description: "Best of both worlds",
      availability: 'soldOut'
    },
    {
      _id: 'fallback-5',
      name: "Tomahawk",
      description: "Impressive presentation cut",
      availability: 'available'
    },
    {
      _id: 'fallback-6',
      name: "Brisket",
      description: "Perfect for slow cooking",
      availability: 'soldOut'
    },
    {
      _id: 'fallback-7',
      name: "Ground Wagyu",
      description: "Premium ground beef",
      availability: 'limited'
    },
    {
      _id: 'fallback-8',
      name: "Short Ribs",
      description: "Rich, flavorful bones",
      availability: 'available'
    }
  ]

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

  const cutsToDisplay = (premiumCuts && premiumCuts.length > 0) ? premiumCuts : fallbackCutsData

  return (
    <>
      <section className="bg-gray-100 border-2 border-accent-dark rounded-lg p-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-[Montserrat] text-primary-800 mb-4" data-sanity-edit-target>{title}</h2>
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
          <div 
            className="relative rounded-full h-14 mb-6 overflow-hidden shadow-inner border border-gray-400"
            style={{ 
              background: 'linear-gradient(to bottom, #d1d5db 0%, #9ca3af 50%, #6b7280 100%)'
            }}
          >
            {/* Inner shadow for depth */}
            <div className="absolute inset-0 rounded-full shadow-inner bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
            
            {/* Available cattle section - fills from left over uniform background */}
            <div 
              className="absolute top-0 left-0 h-full transition-all duration-2000 ease-out shadow-sm z-10"
              style={{ 
                width: `${animatedWidth}%`,
                background: 'linear-gradient(to bottom, #22c55e 0%, #16a34a 50%, #15803d 100%)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)',
                borderRadius: animatedWidth < 100 ? '9999px 0 0 9999px' : '9999px'
              }}
            />
            
            {/* Highlight for 3D effect */}
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-white/30 to-transparent rounded-full z-20"></div>
            
            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-semibold text-white drop-shadow-lg relative z-10">
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

        {/* Cow Purchase Options Section */}
        {initialCowPurchases && initialCowPurchases.length > 0 && (
          <div className="mt-12 pt-8 border-t border-accent-dark">
            <h3 className="text-2xl font-bold font-[Montserrat] text-primary-800 text-center mb-2">Whole & Half Cow Options</h3>
            <p className="text-center text-gray-600 mb-8">Premium Wagyu cattle for families and businesses</p>
            
            <div className="grid gap-4 md:grid-cols-3 mb-8">
              {initialCowPurchases.map((purchase) => {
                return (
                  <div 
                    key={purchase._id}
                    className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-accent-dark transition-all duration-300 hover:shadow-lg group cursor-pointer"
                    onClick={() => handleCowPurchaseClick(purchase)}
                  >
                    {/* Purchase Name */}
                    <h4 
                      className="text-xl font-bold text-primary-800 text-center mb-4"
                      data-sanity={createDataAttribute({
                        ...createDataAttributeConfig,
                        id: purchase._id,
                        type: 'cowPurchaseType',
                        path: 'name',
                      }).toString()}
                    >
                      {stegaClean(purchase.name)}
                    </h4>
                    
                    {/* Price */}
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold text-accent-dark">${stegaClean(purchase.basePrice).toLocaleString()}</span>
                      {stegaClean(purchase.priceUnit) !== 'flat rate' && (
                        <span className="text-sm text-gray-600 ml-1">/{stegaClean(purchase.priceUnit)}</span>
                      )}
                    </div>

                    {/* Processing State Badge */}
                    <div className="flex justify-center mb-4">
                      {(() => {
                        const isProcessed = stegaClean(purchase.processingState) === 'processed'
                        const isLive = stegaClean(purchase.processingState) === 'live'
                        
                        return (
                          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                            isProcessed ? 'bg-green-100 text-green-800' : 
                            isLive ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {isProcessed ? '✓ Available' : 
                              isLive ? '🚛 Live Delivery' : stegaClean(purchase.processingState)}
                          </span>
                        )
                      })()}
                    </div>

                    {/* Click for Details Hint */}
                    <div className="text-center mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 group-hover:text-accent-dark transition-colors">
                        Click for details →
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Contact for Cow Purchases */}
            <div className="text-center p-6 bg-primary-800 rounded-xl mt-8 mb-12">
              <p className="text-yellow-100 text-sm mb-2">Ready to purchase a whole or half cow?</p>
              <p className="text-white text-lg font-semibold mb-2">Contact us to discuss your needs and schedule delivery</p>
              <p className="text-yellow-100 text-xs">Delivery available within 100 miles of Hondo • Additional fees apply beyond 100 miles</p>
            </div>
          </div>
        )}

        {/* Premium Cuts Section */}
        <div className="mt-12 pt-8 border-t border-accent-dark">
          <h3 className="text-2xl font-bold font-[Montserrat] text-primary-800 text-center mb-8">Premium Cuts Available</h3>
          
          {/* Cuts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {cutsToDisplay.map((cut, index) => {
              return (
                <div 
                  key={cut._id || cut.name}
                  className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-accent-dark transition-all duration-300 hover:shadow-lg group cursor-pointer flex flex-col h-full"
                  onClick={() => handleCutClick(cut)}
                >
                  {/* Cut Icon */}
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {cut.icon ? (
                      <img 
                        src={stegaClean(cut.icon)} 
                        alt={stegaClean(cut.name)}
                        className="w-8 h-8 object-contain"
                        data-sanity={createDataAttribute({
                          ...createDataAttributeConfig,
                          id: cut._id,
                          type: 'premiumCutsType',
                          path: 'icon',
                        }).toString()}
                      />
                    ) : (
                      <span className="text-white text-xl font-bold">
                        {getDefaultIcon(stegaClean(cut.name))}
                      </span>
                    )}
                  </div>
                  
                  {/* Cut Name */}
                  <h4 
                    className="text-sm font-bold text-primary-800 text-center mb-1"
                    data-sanity={createDataAttribute({
                      ...createDataAttributeConfig,
                      id: cut._id,
                      type: 'premiumCutsType',
                      path: 'name',
                    }).toString()}
                  >
                    {stegaClean(cut.name)}
                  </h4>
                  
                  {/* Cut Description */}
                  <p 
                    className="text-xs text-gray-600 text-center leading-tight mb-3 flex-grow"
                    data-sanity={createDataAttribute({
                      ...createDataAttributeConfig,
                      id: cut._id,
                      type: 'premiumCutsType',
                      path: 'description',
                    }).toString()}
                  >
                    {stegaClean(cut.description)}
                  </p>
                  
                  {/* Availability Status - Always at bottom */}
                  <div className="mt-auto flex justify-center">
                    <span 
                      className={`inline-flex items-center text-center px-2 py-1 rounded-full text-xs font-medium ${
                        stegaClean(cut.availability) === 'available'
                          ? 'bg-green-100 text-green-800' 
                          : stegaClean(cut.availability) === 'limited'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                      data-sanity={createDataAttribute({
                        ...createDataAttributeConfig,
                        id: cut._id,
                        type: 'premiumCutsType',
                        path: 'availability',
                      }).toString()}
                    >
                      {stegaClean(cut.availability) === 'available'
                        ? '✓ Available' 
                        : stegaClean(cut.availability) === 'limited'
                        ? '◐ Limited Stock'
                        : '✕ Sold Out'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact for More Cuts */}
          <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Looking for a specific cut?</p>
            <p className="text-lg font-semibold text-primary-800">Contact us for custom orders and special requests</p>
          </div>
        </div>
      </section>

      {/* Premium Cut Modal */}
      <PremiumCutModal 
        cut={selectedCut}
        isOpen={isPremiumCutModalOpen}
        onClose={handleClosePremiumCutModal}
      />

      {/* Cow Purchase Modal */}
      <CowPurchaseOptionModal 
        purchase={selectedCowPurchase}
        isOpen={isCowPurchaseModalOpen}
        onClose={handleCloseCowPurchaseModal}
      />
    </>
  )
}