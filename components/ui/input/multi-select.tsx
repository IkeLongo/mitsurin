import * as React from "react"
import { cn } from "@/lib/utils"
import { useMotionTemplate, useMotionValue, motion } from "framer-motion"

export interface MultiSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  options: { value: string; label: string; availability?: string }[]
  value?: string[]
  onChange?: (value: string[]) => void
  placeholder?: string
}

const MultiSelect = React.forwardRef<HTMLSelectElement, MultiSelectProps>(
  ({ className, options, value = [], onChange, placeholder = "Select options...", ...props }, ref) => {
    const radius = 100 // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedValues, setSelectedValues] = React.useState<string[]>(value)
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    React.useEffect(() => {
      setSelectedValues(value)
    }, [value])

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen])

    const toggleOption = (optionValue: string) => {
      const newValues = selectedValues.includes(optionValue)
        ? selectedValues.filter(v => v !== optionValue)
        : [...selectedValues, optionValue]
      
      setSelectedValues(newValues)
      onChange?.(newValues)
    }

    const removeOption = (optionValue: string, e: React.MouseEvent) => {
      e.stopPropagation()
      const newValues = selectedValues.filter(v => v !== optionValue)
      setSelectedValues(newValues)
      onChange?.(newValues)
    }

    const getSelectedLabels = () => {
      return selectedValues.map(val => 
        options.find(opt => opt.value === val)?.label || val
      )
    }

    return (
      <div className="relative" ref={dropdownRef}>
        {/* Hidden select for form compatibility */}
        <select
          ref={ref}
          multiple
          value={selectedValues}
          onChange={() => {}} // Controlled by our custom logic
          className="sr-only"
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown trigger */}
        <motion.div
          style={{
            background: useMotionTemplate`
              radial-gradient(
                ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                #ca8a04,
                transparent 80%
              )
            `,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          className="group/multiselect rounded-lg p-[2px] transition duration-300"
        >
          <div
            className={cn(
              "shadow-input flex min-h-10 w-full cursor-pointer items-center justify-between rounded-md border-transparent bg-white px-3 py-2 text-sm text-black transition duration-400 group-hover/multiselect:shadow-none placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              "dark:bg-white dark:text-black dark:shadow-input dark:focus-visible:ring-neutral-400",
              className
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
          <div className="flex flex-1 flex-wrap gap-1">
            {selectedValues.length === 0 ? (
              <span className="text-neutral-400">{placeholder}</span>
            ) : (
              selectedValues.map((val) => {
                const label = options.find(opt => opt.value === val)?.label || val
                return (
                  <span
                    key={val}
                    className="inline-flex items-center gap-1 rounded bg-neutral-300 px-2 py-0.5 text-medium font-medium text-black"
                  >
                    {label}
                    <button
                      type="button"
                      onClick={(e) => removeOption(val, e)}
                      className="ml-1 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </span>
                )
              })
            )}
          </div>
          <svg
            className={cn(
              "h-4 w-4 transition-transform",
              isOpen && "rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          </div>
        </motion.div>

        {/* Dropdown options */}
        {isOpen && (
          <div className="absolute z-50 mt-1 w-full bg-gray-100 rounded-md border border-input shadow-lg">
            <div className="max-h-60 overflow-y-auto p-1 space-y-1">
              {options.map((option) => {
                const getAvailabilityBadge = (availability?: string) => {
                  if (!availability) return null;
                  
                  const badgeClass = availability === 'available'
                    ? 'bg-green-100 text-green-800'
                    : availability === 'limited'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800';
                  
                  const badgeContent = availability === 'available'
                    ? { symbol: '✓', text: 'Available' }
                    : availability === 'limited'
                    ? { symbol: '◐', text: 'Limited' }
                    : { symbol: '✕', text: 'Sold Out' };
                  
                  return (
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full ${badgeClass}`}>
                      <span>{badgeContent.symbol}</span>
                      <span>{badgeContent.text}</span>
                    </span>
                  );
                };
                
                const isSoldOut = option.availability === 'soldOut';
                
                return (
                <div
                  key={option.value}
                  className={cn(
                    "relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none group",
                    isSoldOut 
                      ? "cursor-not-allowed opacity-50" 
                      : "cursor-pointer hover:bg-primary-800",
                    selectedValues.includes(option.value) && !isSoldOut && "bg-[#630710] text-white"
                  )}
                  onClick={() => !isSoldOut && toggleOption(option.value)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "h-4 w-4 border rounded flex items-center justify-center",
                        isSoldOut 
                          ? "border-gray-200 bg-gray-100" 
                          : selectedValues.includes(option.value)
                          ? "border-[#630710]"
                          : "border-gray-300"
                      )}
                      style={selectedValues.includes(option.value) && !isSoldOut ? { backgroundColor: '#F8F8F8' } : {}}
                      >
                        {selectedValues.includes(option.value) && !isSoldOut && (
                          <svg className="h-3 w-3 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className={cn(
                        isSoldOut 
                          ? "text-gray-400" 
                          : selectedValues.includes(option.value)
                          ? "text-white"
                          : "text-neutral-600 group-hover:text-white"
                      )}>{option.label}</span>
                    </div>
                    {getAvailabilityBadge(option.availability)}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    )
  }
)

MultiSelect.displayName = "MultiSelect"

export { MultiSelect }