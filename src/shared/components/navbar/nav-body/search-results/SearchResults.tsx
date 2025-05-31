"use client";

import type { SearchPlayItem, SearchResultItem } from "@/shared/data/search.data";
import { ResultHistory } from "./ResultHistory"
import { ResultSuggest } from "./ResultSuggest"
import { ResultPlay } from "./result-play/ResultPlay"

interface Props {
  results: SearchResultItem[]
  selected: number
}

export const SearchResults = ({
  results,
  selected
}: Props) => {
  return (
    <div
      className="hidden peer-focus:block absolute inset-x-0 scale-x-[1.005] right-0 top-[101%] py-4 items-center pr-2 bg-stone-950 rounded-b-lg border border-stone-600 shadow-lg "
    >
      <div className="max-h-[450px] overflow-y-auto">
        {
          results && results.length > 0 && results.map((result, idx) => result.type === 'history'
            ? <ResultHistory
              key={`${result.name}/${result.type}`}
              name={result.name}
              isSelected={selected === idx}
            />
            : result.type === 'suggest'
              ? <ResultSuggest
                key={`${result.name}/${result.type}`}
                name={result.name}
                isSelected={selected === idx}
              />
              : <ResultPlay
                key={`${result.name}/${result.type}`}
                isSelected={selected === idx}
                data={result as SearchPlayItem}
              />
          )
        }
      </div>
    </div>
  )
}