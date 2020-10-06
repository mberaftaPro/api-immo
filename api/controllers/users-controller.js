const { get, getOne, create, update } = require('../../business/users')
const { sendResponse } = require('../../helpers/response-manager')
const { isUserPassword } = require('../../helpers/crypto-manager')
const { getAccessToken, getRefreshToken } = require('../../helpers/jwt-manager')
const serializeUser = require('../serializers/user')

const getTokens = payload => {
  return {
    access_token: getAccessToken(payload),
    refresh_token: getRefreshToken(payload),
  }
}

module.exports = {
  get: async (req, res) => {
    const { result: users, error } = await get()
    if (users) sendResponse(res, 200, users.map(serializeUser))
    else sendResponse(res, 400, error)
  },
  me: async (req, res) => {
    const { result: me, error } = await getOne({ id: req.currentUser.id })
    if (me) sendResponse(res, 200, serializeUser(me))
    else sendResponse(res, 400, error)
  },
  getOne: async (req, res) => {
    const { result: user, error } = await getOne({ id: req.params.id })
    if (user) sendResponse(res, 200, serializeUser(user))
    else sendResponse(res, 400, error)
  },
  create: async (req, res) => {
    const { user } = req.body
    const { result: createdUser, error } = await create(user)
    if (createdUser) sendResponse(res, 201, serializeUser(createdUser))
    else sendResponse(res, 400, error)
  },
  login: async (req, res) => {
    const { email, password } = req.body
    const { result: user, error } = await getOne({ email })
    if (user) {
      if (isUserPassword(password, user)) {
        const { access_token, refresh_token } = getTokens(
          JSON.parse(JSON.stringify(serializeUser(user)))
        )
        await update(user.id, { refresh_token })
        sendResponse(res, 200, { access_token })
      } else sendResponse(res, 400, 'BAD PASSWORD')
    } else {
      sendResponse(res, 400, error)
    }
  },
}
