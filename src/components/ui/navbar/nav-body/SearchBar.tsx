"use client";

import { IoIosSearch } from "react-icons/io"
import { MdClear } from "react-icons/md"
import { SEARCH_HISTORY } from "@/data/search.data";

import { SearchResults } from "./search-results/SearchResults";
import { useSearch } from "@/hooks/navbar/useSearch";
import { useRef } from "react";

const history = SEARCH_HISTORY.slice(0, 6)

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const {
    inputHandler,
    onClearSearch,
    results,
    selectedResult
  } = useSearch({ initialResults: history, inputRef })

  return (
    <label
      className="px-6 py-2 flex relative gap-4 items-center bg-stone-600/35 border border-stone-600 rounded-lg w-lg group/search hover:bg-stone-600/50 transition-[border-color] cursor-pointer has-focus:rounded-b-none has-focus:bg-stone-950 has-focus:cursor-default"
    >
      <IoIosSearch className="size-6 text-stone-500 group-focus-within/search:text-stone-200" />
      <input
        type="text"
        placeholder="Buscar canciones, álbumes, artistas o podcasts"
        className="w-full font-medium text-stone-300 placeholder:text-stone-400 focus:outline-none focus:ring-0 focus:text-stone-50 peer"
        ref={inputRef}
        {...inputHandler}
      />
      <button
        type="button"
        className="visible peer-placeholder-shown:invisible cursor-pointer text-stone-400 hover:text-stone-300  group-focus-within/search:text-stone-200 transition-colors"
        onClick={onClearSearch}
      >
        <MdClear className="size-6 " />
      </button>
      <SearchResults selected={selectedResult} results={results} />
    </label>
  )
}