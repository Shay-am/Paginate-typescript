import React from 'react'

export const Pagination = ({ dispatch }: any) => {
  return (
    <div>
      <button onClick={() => dispatch({ type: 'goToFirstPage' })}>
        goToFirstPage
      </button>
      <button onClick={() => dispatch({ type: 'goToPage', payload: 2 })}>
        goToPage
      </button>
      <button onClick={() => dispatch({ type: 'goToPrevPage' })}>
        goToPrevPage
      </button>
      <button onClick={() => dispatch({ type: 'goToNextPage' })}>
        goToNextPage
      </button>
    </div>
  )
}
