const { User } = require('../../database/models')

module.exports = async () => {
  let result, error

  try {
    result = await User.findAll()
  } catch (e) {
    error = e
  }

  return { result, error }
}
