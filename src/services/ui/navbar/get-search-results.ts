import type { ResultItem } from '@/components/ui/navbar/search-results/SearchResults'
import { SEARCH_HISTORY, SEARCH_PLAY, SEARCH_SUGGEST } from '@/data/search.data'
import fzSearch from 'fuzzysearch-ts'

export const getSearchResults = (searchValue: string): ResultItem[] => {
  const historyResults = SEARCH_HISTORY
    .filter(item => fzSearch(searchValue.toLowerCase(), item.name.toLowerCase()))
    .map(item => ({ ...item, type: 'history' })).slice(0, 2)

  const suggestResults = SEARCH_SUGGEST
    .filter(item => fzSearch(searchValue.toLowerCase(), item.name.toLowerCase()))
    .map(item => ({ ...item, type: 'suggest' })).slice(0, 3)

  const playableResults = SEARCH_PLAY
    .filter(item => fzSearch(searchValue.toLowerCase(), item.name.toLowerCase()))
    .map(item => ({ ...item, type: 'playable' })).slice(0, 2)

  const allResults = [...historyResults, ...suggestResults, ...playableResults]

  return allResults as ResultItem[]
}