'use client'

import { useEffect } from 'react'
import { stegaClean, createDataAttribute } from 'next-sanity'
import { useOptimistic } from 'next-sanity/hooks'
import { client } from '@/sanity/lib/client'
import type { PremiumCut } from '@/types/premium-cuts'

const { projectId, dataset, stega } = client.config()
export const createDataAttributeConfig = {
  projectId,
  dataset,
  baseUrl: typeof stega.studioUrl === 'string' ? stega.studioUrl : '',
}

interface PremiumCutModalProps {
  cut: PremiumCut | null
  isOpen: boolean
  onClose: () => void
}

export default function PremiumCutModal({ cut: initialCut, isOpen, onClose }: PremiumCutModalProps) {
  // Use optimistic updates for live editing
  const cut = useOptimistic<PremiumCut | null, any>(
    initialCut,
    (state, action) => {
      // Handle optimistic updates for this premium cut document
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

  if (!isOpen || !cut) return null

  const cleanAvailability = stegaClean(cut.availability)

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
          className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
          onClick={(e) => e.stopPropagation()}
          data-sanity-document-id={cut._id}
          data-sanity-document-type="premiumCutsType"
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
              <div className="flex items-center gap-4">
                {/* Cut Icon */}
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  {cut.icon ? (
                    <img 
                      src={stegaClean(cut.icon)} 
                      alt={stegaClean(cut.name)}
                      className="w-10 h-10 object-contain"
                      data-sanity={createDataAttribute({
                        ...createDataAttributeConfig,
                        id: cut._id,
                        type: 'premiumCutsType',
                        path: 'icon',
                      }).toString()}
                    />
                  ) : (
                    <span className="text-primary-800 text-2xl font-bold">
                      {getDefaultIcon(stegaClean(cut.name))}
                    </span>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold font-[Montserrat] text-primary-800" data-sanity={createDataAttribute({
                      ...createDataAttributeConfig,
                      id: cut._id,
                      type: 'premiumCutsType',
                      path: 'name',
                    }).toString()}>
                      {stegaClean(cut.name)}
                    </h2>
                    <span 
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        cleanAvailability === 'available'
                          ? 'bg-green-100 text-green-800' 
                          : cleanAvailability === 'limited'
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
                      {cleanAvailability === 'available'
                        ? '✓ Available' 
                        : cleanAvailability === 'limited'
                        ? '◐ Limited Stock'
                        : '✕ Sold Out'}
                    </span>
                  </div>
                  {cut.category && (
                    <p className="text-sm text-gray-600 capitalize mt-1" data-sanity={createDataAttribute({
                      ...createDataAttributeConfig,
                      id: cut._id,
                      type: 'premiumCutsType',
                      path: 'category',
                    }).toString()}>
                      {stegaClean(cut.category)}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-2 space-y-6">
              {/* Description */}
              {cut.description && (
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed" data-sanity={createDataAttribute({
                    ...createDataAttributeConfig,
                    id: cut._id,
                    type: 'premiumCutsType',
                    path: 'description',
                  }).toString()}>
                    {stegaClean(cut.description)}
                  </p>
                </div>
              )}

              {/* Price */}
              {cut.price && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary-800">Price</span>
                    <span className="text-2xl font-bold text-black" data-sanity={createDataAttribute({
                      ...createDataAttributeConfig,
                      id: cut._id,
                      type: 'premiumCutsType',
                      path: 'price',
                    }).toString()}>
                      ${stegaClean(cut.price)} {cut.priceUnit && stegaClean(cut.priceUnit)}
                    </span>
                  </div>
                </div>
              )}

              {/* Quality Characteristics Grid */}
              {(cut.marbling || cut.tenderness || cut.flavor || cut.weight) && (
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">Quality Characteristics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {cut.marbling && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs uppercase font-semibold text-black mb-1 tracking-wide">Marbling</p>
                        <p className="text-sm font-medium text-primary-800 capitalize" data-sanity={createDataAttribute({
                          ...createDataAttributeConfig,
                          id: cut._id,
                          type: 'premiumCutsType',
                          path: 'marbling',
                        }).toString()}>
                          {stegaClean(cut.marbling)}
                        </p>
                      </div>
                    )}
                    {cut.tenderness && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs uppercase font-semibold text-black mb-1 tracking-wide">Tenderness</p>
                        <p className="text-sm font-medium text-primary-800 capitalize" data-sanity={createDataAttribute({
                          ...createDataAttributeConfig,
                          id: cut._id,
                          type: 'premiumCutsType',
                          path: 'tenderness',
                        }).toString()}>
                          {stegaClean(cut.tenderness)}
                        </p>
                      </div>
                    )}
                    {cut.flavor && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs uppercase font-semibold text-black mb-1 tracking-wide">Flavor</p>
                        <p className="text-sm font-medium text-primary-800 capitalize" data-sanity={createDataAttribute({
                          ...createDataAttributeConfig,
                          id: cut._id,
                          type: 'premiumCutsType',
                          path: 'flavor',
                        }).toString()}>
                          {stegaClean(cut.flavor)}
                        </p>
                      </div>
                    )}
                    {cut.weight && (
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs uppercase font-semibold text-black mb-1 tracking-wide">Weight</p>
                        <p className="text-sm font-medium text-primary-800" data-sanity={createDataAttribute({
                          ...createDataAttributeConfig,
                          id: cut._id,
                          type: 'premiumCutsType',
                          path: 'weight',
                        }).toString()}>
                          {stegaClean(cut.weight)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Cooking Notes */}
              {cut.cookingNotes && (
                <div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">Cooking Notes</h3>
                  <div className="bg-black bg-opacity-5 rounded-lg p-4">
                    <p className="text-white-100 leading-relaxed" data-sanity={createDataAttribute({
                      ...createDataAttributeConfig,
                      id: cut._id,
                      type: 'premiumCutsType',
                      path: 'cookingNotes',
                    }).toString()}>
                      {stegaClean(cut.cookingNotes)}
                    </p>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              <div className="bg-primary-800 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Interested in this cut?</h3>
                <p className="text-gray-200 mb-4">Contact us to place your order or ask any questions</p>
                <a 
                  href="/contact" 
                  className="bg-white text-primary-800 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer inline-block"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
