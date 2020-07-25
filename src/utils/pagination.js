/**
 * Calculate number of pages needed to show
 */
export const getNumPages = ({ totalElements, elementsPerPage }) => {
  return totalElements / elementsPerPage;
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

  let array
  if (actualPage<numPages-2)
{ array = Array.apply(1, {length: numPages}).map(Number.call, Number)}
    return {
      first:null,
      pages:array,
      last: maxNumShowedPages
    }

  else if (actualPage-2>numPages)
{ array = Array.apply(1, {length: numPages}).map(Number.call, Number)}
return {
  first:1,
  pages:array,
  last: null
}
}

