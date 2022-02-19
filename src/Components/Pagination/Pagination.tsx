// /* eslint-disable react/prop-types */
import React from 'react'

type PropsFunction = {
  action: {
    goToFirstPage: () => void
    goToPrevPage: () => void
    goToNextPage: () => void
    goToPage: (num: number) => void
    goToLastPage: () => void
  }
}

export const Pagination = ({ action }: PropsFunction) => {
  const { goToFirstPage, goToPrevPage, goToNextPage, goToPage, goToLastPage } = action

  return (
    <>
      <button onClick={() => goToPage(2)}>goToPage</button>
      <button onClick={goToFirstPage}>goToFirstPage</button>
      <button onClick={goToPrevPage}>goToPrevPage</button>
      <button onClick={goToNextPage}>goToNextPage</button>
      <button onClick={goToLastPage}>goToLastPage</button>
    </>
  )
}
