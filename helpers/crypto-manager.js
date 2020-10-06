const crypto = require('crypto')

const getHash = (password, salt) =>
  crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

const getSalt = password =>
  crypto
    .randomBytes(Math.ceil(password.length / 2))
    .toString('hex')
    .slice(0, password.length)

const getHashAndSalt = password => {
  const salt = getSalt(password)
  return {
    salt,
    hash: getHash(password, salt),
  }
}

const isUserPassword = (password, { password_hash, password_salt }) => {
  return getHash(password, password_salt) === password_hash
}

module.exports = {
  getHashAndSalt,
  isUserPassword,
}
