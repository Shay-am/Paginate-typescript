import { useReducer } from 'react'
import { paginationReducer } from 'Hooks/usePagination/paginationReducer'
import { getCurrentDataOnPage } from 'Utils/getCurrentDataOnPage'

export const usePagination = <T,>(dataEntries: T[], elementsOnPage: number) => {
  const initialState = {
    actualPageIdx: 1,
    lastPageIdx: Math.ceil(dataEntries.length / elementsOnPage),
    entriesOnSelectedPage: elementsOnPage,
    isBusy: false,
  }

  const [pageInfo, dispatch] = useReducer(paginationReducer, initialState)

  const { entriesOnSelectedPage, actualPageIdx } = pageInfo
  const currentDataEntries = getCurrentDataOnPage(dataEntries, entriesOnSelectedPage, actualPageIdx)

  const actionPagination = {
    goToFirstPage: () => dispatch({ type: 'goToFirstPage' }),
    goToPrevPage: () => dispatch({ type: 'goToPrevPage' }),
    goToNextPage: () => dispatch({ type: 'goToNextPage' }),
    goToPage: (num: number) => dispatch({ type: 'goToPage', payload: num }),
    goToLastPage: () => dispatch({ type: 'goToLastPage' }),
  }

  return { currentDataEntries, actionPagination }
}
