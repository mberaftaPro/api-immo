const { pick } = require('ramda')
const serializeSearchFilter = require('./search-filter')
const fields = ['id', 'first_name', 'last_name', 'email']

module.exports = user => {
  const serializedUser = pick(fields, user)

  if (user.search_filters) {
    serializedUser.search_filters = user.search_filters.map(
      serializeSearchFilter
    )
    serializedUser.elk_query = user.elk_query
  }

  return serializedUser
}
