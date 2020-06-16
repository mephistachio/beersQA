# BeersQA

Beers made with React Hooks + Redux and Parcel.

- **React Hooks:** to define all styled components
- **Redux:** in order to create a store to locate all users and filter settings
- **Testing:** to be done (unit testing, integration tests, e2e test using cypress)

## Functions to be completed

All functions are returning dummy objects in order to allow you test the whole app in case you cannot complete some exercices

### Paginations

(in utils/pagination)
export const getNumPages = ({ totalElements, elementsPerPage })
export const generatePageNumbers = ({ actualPage, numPages, maxNumShowedPages})

### Calendar

(in utils/filters)
export const getMinBrewedDate = (beers = [])
export const getMaxBrewedDate = (beers = [])
export const getBeersByBrewedFromTo = ({ beers = [], brewedFrom, brewedTo })

## Installation

- npm install

## build

- npm run dev

## Test

- to be defined

## Design

[VIEW PROJECT DESIGN (made with Adobe XD)](https://xd.adobe.com/view/d76ecc87-9ad3-47c0-6c0e-fb4a9bac3099-a15f/).

You can interact with the app. If you click on a non-iteractable item all interactable items will be highlitedd

## Components

All components haves their own test. Unit, Integration and Snapshot.
Also commented its functionality in test file.
PropTypes included and default props.

## User Stories

User can load and view all data from url.
User can apply filters to data (brewed date)
User can change page to view more beers

## Dev Dependencies

- **Prettier:** to make styled code in a beautiful way
- **parcel-plugin-react-svg:** to load awesome svg files

### License

React is [MIT licensed](./LICENSE).
