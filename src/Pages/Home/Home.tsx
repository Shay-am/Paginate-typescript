import React from 'react'
import { PaginatedTable } from 'Components/PaginatedTable/PaginatedTable'
import { usePagination } from 'Hooks/usePagination'
import { Pagination } from 'Components/Pagination/Pagination'

const data = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 10]

export const Home = () => {
  const [currentDataEntries, pageInfo, dispatch] = usePagination(data, 5)

  return (
    <>
      <PaginatedTable dataEntries={currentDataEntries} />
      <Pagination dispatch={dispatch} />
    </>
  )
}
