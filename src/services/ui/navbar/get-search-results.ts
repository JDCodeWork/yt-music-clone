import { ResultItem } from '@/components/ui/navbar/search-results/SearchResults'
import { SEARCH_HISTORY, SEARCH_SUGGEST } from '@/data/search.data'
import fuzzysearch from 'fuzzysearch-ts'

export const getSearchResults = (searchValue: string): ResultItem[] => {
  const historyResults = SEARCH_HISTORY
    .filter(item => fuzzysearch(searchValue.toLowerCase(), item.name.toLowerCase()))
    .map(item => ({ ...item, type: 'history' }))

  const suggestResults = SEARCH_SUGGEST
    .filter(item => fuzzysearch(searchValue.toLowerCase(), item.name.toLowerCase()))
    .map(item => ({ ...item, type: 'suggest' }))

  const allResults = [...historyResults, ...suggestResults]

  return allResults as ResultItem[]
}