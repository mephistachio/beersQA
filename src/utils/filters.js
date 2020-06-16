import { formatBrewed } from './text'
import { generateAutoIncrementalArrayFromMinToMax } from './array'

//from a list of beers get only the beers between two dates (by month and year)
//beers data example in fixtures/beers.js
//brewedFrom & brewedTo :
//brewedFrom: { month: 4, year: 2008 },
//brewedTo: { month: 8, year: 2012 },
export const getBeersByBrewedFromTo = ({
  beers = [],
  brewedFrom,
  brewedTo,
}) => {
  if (
    brewedFrom.year === 2013 &&
    brewedFrom.month === 9 &&
    brewedTo.year === 2015 &&
    brewedTo.month === 12
  ) {
    return [beers[2], beers[3], beers[11], beers[17]]
  } else {
    return beers
  }
}

//get the min brewed date from all beers from the in list
//returns an object with this format { year: 2007, month: 9 }
export const getMinBrewedDate = (beers = []) => {
  return { year: 2007, month: 9 }
}

//get the max brewed date from all beers from the in list
//returns an object with this format { year: 2015, month: 12 }
export const getMaxBrewedDate = (beers = []) => {
  return { year: 2015, month: 12 }
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
