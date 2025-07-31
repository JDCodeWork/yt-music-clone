import { useEffect, useRef, useState } from "react"

interface UseSliderPaginationProps {
  totalItems: number
}

export const useSliderPagination = ({ totalItems }: UseSliderPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Calculate total pages based on container and content
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const containerWidth = container.clientWidth
      const scrollWidth = container.scrollWidth

      // If there's content that overflows, calculate pages
      if (scrollWidth > containerWidth) {
        const calculatedPages = Math.ceil(scrollWidth / containerWidth)
        setTotalPages(Math.max(calculatedPages, 2)) // Minimum 2 pages if there's overflow
      } else {
        setTotalPages(1) // Only one page if everything fits
      }
    }
  }, [totalItems])

  useEffect(() => {
    if (scrollContainerRef.current && totalPages > 1) {
      const container = scrollContainerRef.current
      const containerWidth = container.clientWidth
      const scrollWidth = container.scrollWidth

      // Calculate scroll position for current page
      const scrollPosition = ((currentPage - 1) / Math.max(totalPages - 1, 1)) * (scrollWidth - containerWidth)

      // Smooth scroll to calculated position
      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      })
    }
  }, [currentPage, totalPages])

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < totalPages

  return {
    currentPage,
    totalPages,
    scrollContainerRef,
    goToPreviousPage,
    goToNextPage,
    canGoPrevious,
    canGoNext
  }
}
