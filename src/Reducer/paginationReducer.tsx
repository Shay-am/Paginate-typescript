type PageInfo = {
  actualPageIdx: number
  lastPageIdx: number
  entriesOnSelectedPage: number
  isBusy: boolean
}

type PageAction =
  | { type: 'goToFirstPage' }
  | { type: 'goToPrevPage' }
  | { type: 'goToNextPage' }
  | { type: 'goToPage'; payload: number }
  | { type: 'goToLastPage' }

export const paginationReducer = (state: PageInfo, action: PageAction): any => {
  switch (action.type) {
    case 'goToPage':
      return {
        ...state,
        actualPageIdx: (state.actualPageIdx = action.payload),
      }
    case 'goToFirstPage':
      return {
        ...state,
        actualPageIdx: (state.actualPageIdx = 1),
      }

    case 'goToPrevPage':
      if (state.actualPageIdx === 1) {
        return {
          ...state,
          actualPageIdx: (state.actualPageIdx = state.lastPageIdx),
        }
      } else {
        return {
          ...state,
          actualPageIdx: state.actualPageIdx - 1,
        }
      }
    case 'goToNextPage':
      if (state.actualPageIdx === state.lastPageIdx) {
        console.log(state.lastPageIdx)
        return {
          ...state,
          actualPageIdx: (state.actualPageIdx = 1),
        }
      }
      return {
        ...state,
        actualPageIdx: state.actualPageIdx++,
      }
  }
  return { state, action }
}
