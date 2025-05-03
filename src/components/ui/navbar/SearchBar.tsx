"use client";

import { IoIosSearch } from "react-icons/io"
import { MdClear } from "react-icons/md"

import { setSearchValue, useUiStore } from "@/stores";
import { getSearchResults } from "@/services/ui/navbar/get-search-results";
import { SearchResults, type ResultItem } from "./search-results/SearchResults";
import { useRef, useState } from "react";

export const SearchBar = () => {
  const searchValue = useUiStore(s => s.searchValue)

  const [searchResults, setSearchResults] = useState<ResultItem[] | null>(null)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setSearchValue(value)

    if (value.length === 0) {
      setSearchResults(null)
    } else {
      setSearchResults(getSearchResults(value))
    }
  }

  const handleClearSearch = () => {
    setSearchValue("")
    document.getElementById("search-bar")?.focus()
    setSearchResults(null)
  }

  return (
    <label
      className="px-6 py-2 flex relative gap-4 items-center bg-stone-600/35 border border-stone-600 rounded-lg w-1/2 group/search hover:bg-stone-600/50 transition-[border-color] cursor-pointer has-focus:rounded-b-none has-focus:bg-stone-950 has-focus:cursor-default"
    >
      <IoIosSearch className="size-6 text-stone-500 group-focus-within/search:text-stone-200" />
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Buscar canciones, álbumes, artistas o podcasts"
        className="w-full font-medium text-stone-300 placeholder:text-stone-400 focus:outline-none focus:ring-0 focus:text-stone-50 peer"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button
        type="button"
        className="visible peer-placeholder-shown:invisible cursor-pointer text-stone-400 hover:text-stone-300  group-focus-within/search:text-stone-200 transition-colors"
        onClick={handleClearSearch}
      >
        <MdClear className="size-6 " />
      </button>
      <SearchResults results={searchResults} />
    </label>
  )
}