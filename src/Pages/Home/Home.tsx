import React from 'react'
import { PaginatedTable } from 'Components/PaginatedTable/PaginatedTable'
import { Pagination } from 'Components/Pagination/Pagination'
import { usePagination } from 'Hooks/usePagination/usePagination'

// const data = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 10]
const data1 = ['s', 'sdsd', 'sdsads', 'dsds', 'sdsds', '1212', '232132', '3232', '2323']

export const Home = () => {
  const { currentDataEntries, actionPagination } = usePagination(data1, 3)

  return (
    <>
      <PaginatedTable dataEntries={currentDataEntries} />
      <Pagination action={actionPagination} />
    </>
  )
}
