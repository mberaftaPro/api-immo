const { User } = require('../../database/models')
const {
  parseToEsQuery,
} = require('../../helpers/elastic-search-query-parser.js')
const db = require('../../database/models')

module.exports = async whereCondition => {
  let result, error

  try {
    const existingUser = await User.findOne({ where: whereCondition })
    if (!existingUser)
      throw { error: { message: "L'utilisateur n'existe pas" } }
    else {
      result = existingUser

      const searchFilters = await db.SearchFilter.findAll({
        raw: true,
        where: {
          user_id: existingUser.id,
        },
      })

      result.search_filters = searchFilters
      result.elk_query = JSON.parse(parseToEsQuery(searchFilters))
    }
  } catch (e) {
    error = e
  }

  return { result, error }
}
