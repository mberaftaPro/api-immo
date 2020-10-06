const { pick } = require('ramda')
const fields = ['id', 'search_key', 'search_value', 'search_operator']

module.exports = searchFilter => pick(fields, searchFilter)
