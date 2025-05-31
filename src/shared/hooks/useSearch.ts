import type { SearchResultItem } from "@/shared/data/search.data"
import { getSearchResults } from "@/shared/services/get-search-results"
import { setSearchValue, useUiStore } from "@/shared/stores"
import { useEffect, useState } from "react"

interface Props {
  initialResults: SearchResultItem[]
  inputRef: React.RefObject<HTMLInputElement | null>
}
export const useSearch = ({ initialResults, inputRef }: Props) => {
  const searchValue = useUiStore(s => s.searchValue)

  const [initialSearchValue, setInitialSearchValue] = useState('')

  const [searchResults, setSearchResults] = useState<SearchResultItem[]>(initialResults)
  const [selectedResult, setSelectedResult] = useState(-1)

  // keyboard handler to select a result
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" && selectedResult < searchResults.length - 1) {
      setSelectedResult(prev => prev + 1)
    }

    if (e.key === "ArrowUp" && selectedResult >= -1) {
      setSelectedResult(prev => prev - 1)
    }

    if (e.key === "Enter" && selectedResult >= 0) {
      inputRef.current?.blur()
    }

    if (e.key === "Escape") {
      setSearchValue(initialSearchValue)
      setSelectedResult(-1)
      inputRef.current?.blur()
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (selectedResult !== -1) {
      setSelectedResult(-1)
    }

    setSearchValue(value)
    setInitialSearchValue(value)

    const results = value.length === 0 ? initialResults : getSearchResults(value)
    setSearchResults(results)
  }

  const handleClearSearch = () => {
    setSearchValue("")
    setInitialSearchValue("")

    inputRef.current?.focus()
    setSearchResults(initialResults)
  }

  // keep the visible text synchronized with the selection
  useEffect(() => {
    const activeResult = searchResults[selectedResult]

    if (selectedResult === -1) {
      return setSearchValue(initialSearchValue)
    }

    if (activeResult?.type !== "playable") {
      setSearchValue(activeResult?.name)
    }
  }, [searchResults, selectedResult, initialSearchValue]);

  const inputHandler = {
    value: searchValue,
    onChange: handleSearchChange,
    onKeyDown: handleKeyDown
  }

  return {
    results: searchResults,
    inputHandler,
    selectedResult,
    onClearSearch: handleClearSearch,
  }
}