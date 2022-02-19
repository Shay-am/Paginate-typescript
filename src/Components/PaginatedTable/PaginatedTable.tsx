import React from 'react'

interface DataEntriesProps<T> {
  dataEntries: T[]
}

export const PaginatedTable = <T,>({ dataEntries }: DataEntriesProps<T>) => {
  return <div>{dataEntries}</div>
}
