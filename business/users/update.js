const { User } = require('../../database/models')

module.exports = async (userId, userParams) => {
  let result, error

  try {
    result = await User.update(userParams, {
      where: { id: userId },
      returning: true,
      plain: true,
    })
  } catch (e) {
    error = e
  }

  return { result, error }
}
