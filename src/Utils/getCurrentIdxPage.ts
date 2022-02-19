export const getCureentIdxPage = <T>(
  data: T[],
  elementsOnPage: number,
  idxPage: number
) => {
  const lastIndexPage = elementsOnPage * idxPage
  const firstIndexPage = lastIndexPage - elementsOnPage

  return data.slice(firstIndexPage, lastIndexPage)
}
