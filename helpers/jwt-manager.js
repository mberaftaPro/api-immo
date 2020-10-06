const {
  jwt_secret,
  rt_secret,
  jwt_life,
  rt_life,
} = require('../jwt-config.json')

const { ACCESS_TOKEN } = require('../constants/jwt-types')

const jwt = require('jsonwebtoken')

const generateToken = (payload, secret, expiresIn) =>
  jwt.sign(payload, secret, { expiresIn })

const getAccessToken = payload => generateToken(payload, jwt_secret, jwt_life)

const getRefreshToken = payload => generateToken(payload, rt_secret, rt_life)

const verifyToken = (type, req, next) => token => {
  jwt.verify(
    token,
    type === ACCESS_TOKEN ? jwt_secret : rt_secret,
    (err, decoded) => {
      if (err) return next(err)
      else {
        req.currentUser = decoded
        return next()
      }
    }
  )
}

module.exports = {
  getAccessToken,
  getRefreshToken,
  verifyToken,
}
