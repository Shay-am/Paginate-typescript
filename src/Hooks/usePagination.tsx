import { useReducer } from 'react'
import { paginationReducer } from 'Reducer/paginationReducer'
import { getCureentIdxPage } from 'Utils/getCurrentIdxPage'

export const usePagination = <T,>(dataEntries: T[], elementsOnPage: number) => {
  const initialState = {
    actualPageIdx: 1,
    lastPageIdx: Math.ceil(dataEntries.length / elementsOnPage),
    entriesOnSelectedPage: elementsOnPage,
    isBusy: false,
  }

  const [pageInfo, dispatch] = useReducer(paginationReducer, initialState)

  const currentDataEntries = getCureentIdxPage(
    dataEntries,
    pageInfo.entriesOnSelectedPage,
    pageInfo.actualPageIdx
  )

  return [currentDataEntries, pageInfo, dispatch]
}
