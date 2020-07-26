import { formatBrewed } from './text'
import { generateAutoIncrementalArrayFromMinToMax } from './array'

/**
 * from a list of beers get only the beers between two dates (by month and year)
 *  beers data example in fixtures/beers.js
 *  brewedFrom & brewedTo:
 *    brewedFrom: { month: 4, year: 2008 },
 *    brewedTo: { month: 8, year: 2012 },
 *    (year & month included)
 *
 */
export const getBeersByBrewedFromTo = ({
  beers = [],
  brewedFrom,
  brewedTo,
}) => {
  return beers.filter(function (beer) {
    let beerBrewed = formatBrewed(beer.first_brewed)
    return (
      (beerBrewed.year === brewedFrom.year
        ? beerBrewed.month >= brewedFrom.month
        : beerBrewed.year > brewedFrom.year) &&
      (beerBrewed.year === brewedTo.year
        ? beerBrewed.month <= brewedTo.month
        : beerBrewed.year < brewedTo.year)
    )
  })
}

/**
 * get the min brewed date from all beers from the in list
 * returns an object with this format { year: 2007, month: 9 }
 */
export const getMinBrewedDate = (beers = []) => {
  let beersBrewed = beers.map(function (beer) {
    return formatBrewed(beer.first_brewed)
  })
  beersBrewed.sort(function (a, b) {
    if (a.year - b.year === 0) {
      return a.month - b.month
    } else {
      return a.year - b.year
    }
  })

  return { year: beersBrewed[0].year, month: beersBrewed[0].month }
}

/**
 * get the max brewed date from all beers from the in list
 * returns an object with this format { year: 2015, month: 12 }
 */
export const getMaxBrewedDate = (beers = []) => {
  let beersBrewed = beers.map(function (beer) {
    return formatBrewed(beer.first_brewed)
  })
  beersBrewed.sort(function (a, b) {
    if (a.year - b.year === 0) {
      return b.month - a.month
    } else {
      return b.year - a.year
    }
  })
  return { year: beersBrewed[0].year, month: beersBrewed[0].month }
}

export const getYearsFromMinToMaxBrewed = (beers) => {
  return generateAutoIncrementalArrayFromMinToMax(
    getMinBrewedDate(beers).year,
    getMaxBrewedDate(beers).year
  )
}

export const getMonths = () => {
  return generateAutoIncrementalArrayFromMinToMax(1, 12)
}
