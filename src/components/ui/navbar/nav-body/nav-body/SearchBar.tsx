"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io"
import { MdClear } from "react-icons/md"

import { setSearchValue, useUiStore } from "@/stores";
import { SEARCH_HISTORY, type SearchResultItem } from "@/data/search.data";

import { getSearchResults } from "@/services/ui/navbar/get-search-results";

import { SearchResults } from "../search-results/SearchResults";

const history = SEARCH_HISTORY.slice(0, 6)

export const SearchBar = () => {
  const searchValue = useUiStore(s => s.searchValue)

  const [initialSearchValue, setInitialSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>(history)
  const [selectedResult, setSelectedResult] = useState(-1)

  const inputRef = useRef<HTMLInputElement | null>(null)

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

    if (value.length === 0) {
      setSearchResults(history)
    } else {
      setSearchResults(getSearchResults(value))
    }
  }

  const handleClearSearch = () => {
    setSearchValue("")
    setInitialSearchValue("")

    inputRef.current?.focus()
    setSearchResults(history)
  }

  useEffect(() => {
    const activeResult = searchResults[selectedResult]

    if (selectedResult === -1) {
      return setSearchValue(initialSearchValue)
    }

    if (activeResult?.type !== "playable") {
      setSearchValue(activeResult?.name)
    }
  }, [searchResults, selectedResult, initialSearchValue]);

  return (
    <label
      className="px-6 py-2 flex relative gap-4 items-center bg-stone-600/35 border border-stone-600 rounded-lg w-lg group/search hover:bg-stone-600/50 transition-[border-color] cursor-pointer has-focus:rounded-b-none has-focus:bg-stone-950 has-focus:cursor-default"
    >
      <IoIosSearch className="size-6 text-stone-500 group-focus-within/search:text-stone-200" />
      <input
        ref={inputRef}
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Buscar canciones, álbumes, artistas o podcasts"
        className="w-full font-medium text-stone-300 placeholder:text-stone-400 focus:outline-none focus:ring-0 focus:text-stone-50 peer"
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="visible peer-placeholder-shown:invisible cursor-pointer text-stone-400 hover:text-stone-300  group-focus-within/search:text-stone-200 transition-colors"
        onClick={handleClearSearch}
      >
        <MdClear className="size-6 " />
      </button>
      <SearchResults selected={selectedResult} results={searchResults} />
    </label>
  )
}