import React from 'react'

type ActionsProps = {
  actions: {
    goToFirstPage: () => void
    goToPrevPage: () => void
    goToNextPage: () => void
    goToPage: (num: number) => void
    goToLastPage: () => void
  }
}

export const Pagination = ({ actions }: ActionsProps) => {
  const { goToFirstPage, goToPrevPage, goToNextPage, goToPage, goToLastPage } = actions

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
