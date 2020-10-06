const elasticsearchBuilder = require('es-builder')
const { QueryBuilder, MatchQuery, RangeQuery } = elasticsearchBuilder

const OPERATORS = {
  GTE: 'gte',
  LTE: 'lte',
  LT: 'lt',
  GT: 'gt',
  EQ: 'match',
}

const parseToEsQuery = preferences => {
  const queryBuilder = QueryBuilder()

  for (const pref of preferences) {
    const { search_key, search_operator, search_value } = pref

    switch (search_operator) {
      case OPERATORS.GTE:
        queryBuilder.query(RangeQuery(search_key).gte(search_value))
        break
      case OPERATORS.GT:
        queryBuilder.query(RangeQuery(search_key).gt(search_value))
        break
      case OPERATORS.LT:
        queryBuilder.query(RangeQuery(search_key).lt(search_value))
        break
      case OPERATORS.LTE:
        queryBuilder.query(RangeQuery(search_key).lte(search_value))
        break
      case OPERATORS.EQ:
        queryBuilder.query(MatchQuery(search_key, search_value))
        break
    }
  }

  return JSON.stringify(queryBuilder)
}

module.exports = {
  parseToEsQuery,
}
