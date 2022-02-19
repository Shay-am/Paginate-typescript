type State = {
  actualPageIdx: number
  lastPageIdx: number
  entriesOnSelectedPage: number
  isBusy: boolean
}

type Action =
  | { type: 'goToFirstPage' }
  | { type: 'goToPrevPage' }
  | { type: 'goToNextPage' }
  | { type: 'goToPage'; payload: number }
  | { type: 'goToLastPage' }

export const paginationReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'goToPage':
      return {
        ...state,
        actualPageIdx: action.payload,
      }
    case 'goToFirstPage':
      return {
        ...state,
        actualPageIdx: 1,
      }
    case 'goToLastPage':
      return {
        ...state,
        actualPageIdx: state.lastPageIdx,
      }

    case 'goToPrevPage':
      if (state.actualPageIdx === 1) {
        return {
          ...state,
          actualPageIdx: state.lastPageIdx,
        }
      }
      return {
        ...state,
        actualPageIdx: state.actualPageIdx - 1,
      }

    case 'goToNextPage':
      if (state.actualPageIdx === state.lastPageIdx) {
        return {
          ...state,
          actualPageIdx: 1,
        }
      }
      return {
        ...state,
        actualPageIdx: state.actualPageIdx + 1,
      }
  }
}
