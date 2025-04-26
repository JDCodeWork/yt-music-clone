"use client";

import { useState } from "react"
import { IoIosSearch } from "react-icons/io"
import { MdClear } from "react-icons/md"
import { SearchSuggest } from "./search-item/SearchSuggest";
import { SEARCH_HISTORY, SEARCH_SUGGEST } from "@/data/search.data";
import { SearchHistory } from "./search-item/SearchHistory";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleClearSearch = () => {
    setSearchValue("")
    document.getElementById("search-bar")?.focus()
  }

  return (
    <label
      className="px-6 py-2 flex relative gap-4 items-center bg-stone-600/35 border border-stone-600 rounded-lg w-1/2 group hover:bg-stone-600/50 transition-[border-color] cursor-pointer has-focus:rounded-b-none has-focus:bg-stone-950 has-focus:cursor-default"
    >
      <IoIosSearch className="size-6 text-stone-500 group-focus-within:text-stone-200" />
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
        className="visible peer-placeholder-shown:invisible cursor-pointer text-stone-400 hover:text-stone-300  group-focus-within:text-stone-200 transition-colors"
        onClick={handleClearSearch}
      >
        <MdClear className="size-6 " />
      </button>
      <div className="hidden peer-focus:block absolute inset-x-0 scale-x-[1.005] right-0 top-[101%] py-4 items-center pr-2 bg-stone-950 rounded-b-lg border border-stone-600 shadow-lg ">
        <div className="max-h-[400px] overflow-y-auto">
          {
            SEARCH_HISTORY.map((item, i) => (
              <SearchHistory name={item.name} key={i} />
            ))
          }
          {
            Array.from({ length: 3 }, (_, i) => (
              <SearchSuggest name={SEARCH_SUGGEST[i].name} key={SEARCH_SUGGEST[i].name} />
            ))
          }
        </div>
      </div>
    </label>
  )
}