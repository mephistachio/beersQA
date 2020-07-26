/**
 * Calculate number of pages needed to show
 */
export const getNumPages = ({ totalElements, elementsPerPage }) => {
  if (elementsPerPage === 0) {
    return 0
  }
  return Math.ceil(totalElements / elementsPerPage)
}

/**
 * generate page numbers
 *  Examples of pagination:
 *
 */
export const generatePageNumbers = ({
  actualPage,
  numPages,
  maxNumShowedPages,
}) => {

  const range = function(from, to) {
    let list = [];
    for (let i = from; i <= to; i++) {
      list.push(i);
    }
    return list;
  }
  let cornerPagesCount = maxNumShowedPages - 2
  let first = 1, array, last = numPages
  if (actualPage < cornerPagesCount) { // left pages corner case
    first = null
    array = range(1, cornerPagesCount)
  } else if (actualPage > numPages - (cornerPagesCount - 1)) { // right pages corner case
    last = null
    array = range(numPages - (cornerPagesCount - 1), numPages)
  } else { // pages in the middle, always show 3
    array = [actualPage - 1, actualPage, actualPage + 1]
  }
  return {
    first: first,
    pages: array,
    last: last,
  }
}
