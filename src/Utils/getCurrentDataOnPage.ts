export const getCurrentDataOnPage = <T>(data: T[], elementsOnPage = 1, pageIdx = 1) => {
  const lastIndexPage = elementsOnPage * pageIdx
  const firstIndexPage = lastIndexPage - elementsOnPage

  return data.slice(firstIndexPage, lastIndexPage)
}
