"use client";

import { SEARCH_HISTORY } from "@/data/search.data"
import { ResultHistory } from "./ResultHistory"
import { ResultSuggest } from "./ResultSuggest"
import { ResultPlay } from "./result-play/ResultPlay"
import type { RefObject } from "react"

export type ResultItem = {
  name: string
  type: 'history' | 'suggest' | 'play'
  image?: string
  artist?: string
  views?: string
}

interface Props {
  results: ResultItem[] | null
}

export const SearchResults = ({
  results,
}: Props) => {
  return (
    <div
      className="hidden peer-focus:block absolute inset-x-0 scale-x-[1.005] right-0 top-[101%] py-4 items-center pr-2 bg-stone-950 rounded-b-lg border border-stone-600 shadow-lg "

    >
      <div className="max-h-[450px] overflow-y-auto">
        {
          !results && (SEARCH_HISTORY.map(({ name }) => (
            <ResultHistory key={name} name={name} />
          )))
        }
        {
          results && results.length > 0 && results.map(result => result.type === 'history'
            ? <ResultHistory key={`${result.name}/${result.type}`} name={result.name} />
            : result.type === 'suggest'
              ? <ResultSuggest key={`${result.name}/${result.type}`} name={result.name} />
              : <ResultPlay key={`${result.name}/${result.type}`} {...result} />
          )
        }
      </div>
    </div>
  )
}