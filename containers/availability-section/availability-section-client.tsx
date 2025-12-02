'use client'

import { useState } from 'react'
import { stegaClean } from 'next-sanity'
import PremiumCutModal from '@/components/ui/modal/premium-cut-modal'
import type { PremiumCut } from '@/types/premium-cuts'

interface AvailabilitySectionClientProps {
  premiumCuts: PremiumCut[]
}

export default function AvailabilitySectionClient({ premiumCuts }: AvailabilitySectionClientProps) {
  const [selectedCut, setSelectedCut] = useState<PremiumCut | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCutClick = (cut: PremiumCut) => {
    setSelectedCut(cut)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCut(null)
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

  return (
    <>
      {/* Cuts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {(premiumCuts && premiumCuts.length > 0 ? premiumCuts : fallbackCutsData).map((cut, index) => {
          return (
          <div 
            key={cut._id || cut.name}
            className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-accent-dark transition-all duration-300 hover:shadow-lg group cursor-pointer flex flex-col h-full"
            onClick={() => handleCutClick(cut)}
          >
            {/* Cut Icon */}
            <div className="w-12 h-12 bg-accent-dark rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
              {cut.icon ? (
                <img 
                  src={stegaClean(cut.icon)} 
                  alt={stegaClean(cut.name)}
                  className="w-8 h-8 object-contain"
                />
              ) : (
                <span className="text-white text-xl font-bold">
                  {getDefaultIcon(stegaClean(cut.name))}
                </span>
              )}
            </div>
            
            {/* Cut Name */}
            <h4 className="text-sm font-bold text-primary-800 text-center mb-1" data-sanity-edit-target>
              {stegaClean(cut.name)}
            </h4>
            
            {/* Cut Description */}
            <p className="text-xs text-gray-600 text-center leading-tight mb-3 flex-grow" data-sanity-edit-target>
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
                data-sanity-edit-target
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

      {/* Premium Cut Modal */}
      <PremiumCutModal 
        cut={selectedCut}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}