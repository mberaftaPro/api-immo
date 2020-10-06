const db = require('../../database/models')

const createSearchFilters = async searchFilters => {
  let result, error

  try {
    result = await db.SearchFilter.bulkCreate(searchFilters)
  } catch (e) {
    error = e
  }

  return { result, error }
}

module.exports = createSearchFilters
