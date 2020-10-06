const getErrorCode = err => {
  let errorType = err.type.split('.')[1].toUpperCase(),
    errorField = err.context.key.toUpperCase()

  return [errorField, '_', errorType].join('')
}

const getProcessedErrors = (joiError, status) => {
  return joiError.details.map(e => {
    return {
      status: status,
      info: {
        code: getErrorCode(e),
        message: e.message,
      },
    }
  })
}

module.exports = {
  getProcessedErrors: getProcessedErrors,
}
