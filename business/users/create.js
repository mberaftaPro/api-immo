const { User } = require('../../database/models')
const { getHashAndSalt } = require('../../helpers/crypto-manager')

module.exports = async userParams => {
  let result, error

  try {
    const { hash, salt } = getHashAndSalt(userParams.password)
    result = await User.create({
      ...userParams,
      password_hash: hash,
      password_salt: salt,
    })
  } catch (e) {
    error = e
  }

  return { result, error }
}
