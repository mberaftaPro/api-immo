const formatError = (status, code, message) => ({
  status,
  code,
  message,
})

module.exports = {
  NOT_AUTORIZED_ERROR: formatError(
    401,
    'NOT_AUTORIZED',
    "Vous n'êtes pas autorisé à accéder à la ressource demandée."
  ),
}
