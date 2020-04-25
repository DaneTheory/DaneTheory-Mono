const db = require('./data/PeriodicTableOfElements.json')

const PERIODICTABLEDB = () => {
  try {

    return db
  }
  catch(error) {
    console.error(error)
    throw error
  }
}

const PeriodicTableDB = PERIODICTABLEDB()
// console.log(PeriodicTableDB)


export default PeriodicTableDB
