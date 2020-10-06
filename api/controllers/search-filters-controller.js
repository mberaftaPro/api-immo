const { createSearchFilters } = require('../../business/search-filters')
const { sendResponse } = require('../../helpers/response-manager')

module.exports = {
  post: async (req, res) => {
    const { search_filters } = req.body
    const { currentUser } = req

    const searchFiltersParams = search_filters.map(searchFilter => ({
      ...searchFilter,
      user_id: currentUser.id,
    }))

    const { result, error } = await createSearchFilters(searchFiltersParams)
    if (result) sendResponse(res, 201, result)
    else sendResponse(res, 400, error)
  },
}
