'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useSliderPagination } from '@/shared/hooks/useSliderPagination'
import { REPLAY } from '@/shared/data/music.data'

interface SliderContextType {
  currentPage: number
  totalPages: number
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
  canGoPrevious: boolean
  canGoNext: boolean
  goToPreviousPage: () => void
  goToNextPage: () => void
}

const SliderContext = createContext<SliderContextType | undefined>(undefined)

interface SliderProviderProps {
  children: ReactNode
}

export const SliderProvider = ({ children }: SliderProviderProps) => {
  const sliderPagination = useSliderPagination({
    totalItems: REPLAY.length
  })

  return (
    <SliderContext.Provider value={sliderPagination}>
      {children}
    </SliderContext.Provider>
  )
}

export const useSlider = () => {
  const context = useContext(SliderContext)
  if (context === undefined) {
    throw new Error('useSlider must be used within a SliderProvider')
  }
  return context
}
