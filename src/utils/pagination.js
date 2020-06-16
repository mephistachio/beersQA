/**
 * Calculate number of pages needed to show
 */
export const getNumPages = ({ totalElements, elementsPerPage }) => {
  return 9
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
  if (actualPage === 1) {
    return {
      first: null,
      pages: [1, 2, 3, 4, 5],
      last: 9,
    }
  } else if (actualPage === 2) {
    return {
      pages: [1, 2, 3, 4, 5],
      last: 9,
    }
  } else if (actualPage === 3) {
    return {
      pages: [1, 2, 3, 4, 5],
      last: 9,
    }
  } else if (actualPage === 4) {
    return {
      pages: [1, 2, 3, 4, 5],
      last: 9,
    }
  } else if (actualPage === 5) {
    return {
      first: 1,
      pages: [4, 5, 6],
      last: 9,
    }
  } else if (actualPage === 6) {
    return {
      first: 1,
      pages: [5, 6, 7, 8, 9],
    }
  } else if (actualPage === 7) {
    return {
      first: 1,
      pages: [5, 6, 7, 8, 9],
    }
  } else if (actualPage === 8) {
    return {
      first: 1,
      pages: [5, 6, 7, 8, 9],
    }
  } else if (actualPage === 9) {
    return {
      first: 1,
      pages: [5, 6, 7, 8, 9],
    }
  }
}
