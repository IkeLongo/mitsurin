'use client'

import { useEffect } from 'react'
import { stegaClean, createDataAttribute } from 'next-sanity'
import { useOptimistic } from 'next-sanity/hooks'
import { client } from '@/sanity/lib/client'

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

interface CowPurchaseOptionModalProps {
  purchase: CowPurchase | null
  isOpen: boolean
  onClose: () => void
}

export default function CowPurchaseOptionModal({ purchase: initialPurchase, isOpen, onClose }: CowPurchaseOptionModalProps) {
  // Use optimistic updates for live editing
  const purchase = useOptimistic<CowPurchase | null, any>(
    initialPurchase,
    (state, action) => {
      // Handle optimistic updates for this cow purchase document
      if (action.id && action.document && state && state._id === action.id) {
        return { ...state, ...action.document }
      }
      return state
    }
  )

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !purchase) return null

  const cleanAvailability = stegaClean(purchase.availability)
  const isProcessed = stegaClean(purchase.processingState) === 'processed'
  const isLive = stegaClean(purchase.processingState) === 'live'

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
          data-sanity-document-id={purchase._id}
          data-sanity-document-type="cowPurchaseType"
        >
          {/* Close Button */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-end rounded-t-xl z-10">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content */}
          <div>
            {/* Header */}
            <div className="p-6 pb-4">
              <div className="text-center">
                <h2 className="text-3xl font-bold font-[Montserrat] text-primary-800 mb-2" data-sanity={createDataAttribute({
                  ...createDataAttributeConfig,
                  id: purchase._id,
                  type: 'cowPurchaseType',
                  path: 'name',
                }).toString()}>
                  {stegaClean(purchase.name)}
                </h2>
                
                {/* Price */}
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-accent-dark">${stegaClean(purchase.basePrice).toLocaleString()}</span>
                  {stegaClean(purchase.priceUnit) !== 'flat rate' && (
                    <span className="text-lg text-gray-600 ml-2">/{stegaClean(purchase.priceUnit)}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-2 space-y-6">

              {/* Processing State Badge */}
              <div className="flex justify-center mb-4">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  isProcessed ? 'bg-green-100 text-green-800' : 
                  isLive ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {isProcessed ? '✓ Ready to Pickup' : 
                    isLive ? '🚛 Live Delivery' : stegaClean(purchase.processingState)}
                </span>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-700 leading-relaxed text-center text-lg" data-sanity={createDataAttribute({
                  ...createDataAttributeConfig,
                  id: purchase._id,
                  type: 'cowPurchaseType',
                  path: 'description',
                }).toString()}>
                  {stegaClean(purchase.description)}
                </p>
              </div>

              {/* Key Details Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Weight & Yield */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">Weight & Yield</h3>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <span className="text-gray-600 whitespace-nowrap">Estimated Weight:</span>
                      <span className="font-medium text-neutral-800 sm:ml-auto sm:text-right">{stegaClean(purchase.estimatedWeight)}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <span className="text-gray-600 whitespace-nowrap">Expected Yield:</span>
                      <span className="font-medium text-neutral-800 sm:ml-auto sm:text-right">{stegaClean(purchase.estimatedYield)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Freezer Space:</span>
                      <span className="font-medium text-neutral-800">{stegaClean(purchase.freezerSpaceRequired)}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline & Costs */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">Timeline & Costs</h3>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <span className="text-gray-600 whitespace-nowrap">Processing Time:</span>
                      <span className="font-medium text-neutral-800 sm:ml-auto sm:text-right">{stegaClean(purchase.processingTime)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minimum Notice:</span>
                      <span className="font-medium text-neutral-800">{stegaClean(purchase.minimumNotice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Deposit Required:</span>
                      <span className="font-medium text-neutral-800">${stegaClean(purchase.depositRequired).toLocaleString()}</span>
                    </div>
                    {!stegaClean(purchase.processingIncluded) && stegaClean(purchase.processingCost) > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing Cost:</span>
                        <span className="font-medium text-neutral-800">${stegaClean(purchase.processingCost)}/lb</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Delivery Information */}
              {purchase.deliveryZone && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">Delivery Information</h3>
                  <div className="space-y-2">
                    {stegaClean(purchase.deliveryZone.within100Miles) && (
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span className="text-neutral-800">Free delivery within 100 miles of Hondo</span>
                      </div>
                    )}
                    {stegaClean(purchase.deliveryZone.beyond100Miles) && (
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">📍</span>
                        <span className="text-neutral-800">Delivery beyond 100 miles: ${stegaClean(purchase.deliveryZone.deliveryFeePerMile)}/mile</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Butcher Requirements (for live delivery) */}
              {isLive && purchase.butcherRequirements && stegaClean(purchase.butcherRequirements.required) && (
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">🏭 Butcher Requirements</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Customer must provide USDA certified butcher within {stegaClean(purchase.butcherRequirements.maxDistanceFromHondo)} miles of Hondo.
                  </p>
                  {purchase.butcherRequirements.requirements && purchase.butcherRequirements.requirements.length > 0 && (
                    <div className="space-y-1">
                      <p className="font-medium text-gray-800">Requirements:</p>
                      <ul className="text-sm text-gray-700 ml-4 space-y-1">
                        {purchase.butcherRequirements.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>{stegaClean(req)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {purchase.butcherRequirements.additionalNotes && (
                    <div className="mt-3 pt-3 border-t border-yellow-200">
                      <p className="text-sm text-gray-700">{stegaClean(purchase.butcherRequirements.additionalNotes)}</p>
                    </div>
                  )}
                </div>
              )}

              {/* What's Included */}
              {purchase.includes && purchase.includes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">What's Included</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {purchase.includes.map((item, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">{stegaClean(item)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Notes */}
              {purchase.notes && (
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">Additional Notes</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed" data-sanity={createDataAttribute({
                      ...createDataAttributeConfig,
                      id: purchase._id,
                      type: 'cowPurchaseType',
                      path: 'notes',
                    }).toString()}>
                      {stegaClean(purchase.notes)}
                    </p>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="bg-primary-800 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Ready to Purchase?</h3>
                <p className="text-gray-200 mb-4">
                  Contact us to discuss your order, arrange delivery, and secure your premium Wagyu
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="/contact" 
                    className="bg-white text-primary-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer inline-block"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className="bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-200 cursor-pointer inline-block"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
