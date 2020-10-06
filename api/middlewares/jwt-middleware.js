const { verifyToken } = require('../../helpers/jwt-manager')
const { ACCESS_TOKEN } = require('../../constants/jwt-types')
const { NOT_AUTORIZED_ERROR } = require('../../constants/api-errors')
const WHITE_URLS = require('../../constants/white-urls')

module.exports = (req, res, next) => {
  if (WHITE_URLS.includes(req.originalUrl)) return next()

  const { authorization } = req.headers
  if (!authorization) return next(NOT_AUTORIZED_ERROR)

  try {
    return verifyToken(
      ACCESS_TOKEN,
      req,
      next
    )(authorization.replace(/\bbearer\s+\b/i, ''))
  } catch (e) {
    return next(e)
  }
}
