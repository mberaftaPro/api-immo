const joi = require('joi')
const joiErrorHelper = require('../../helpers/joi-error-helper')
const httpStatusCodes = require('http-status-codes')

const schema = joi.object().keys({
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  password: joi.string().required(),
  email: joi.string(),
})

const validate = (req, res, next) => {
  const { error } = schema.validate(req.body.user, { abortEarly: false })
  console.log(error, req.body)
  if (error) {
    next(
      joiErrorHelper.getProcessedErrors(
        error,
        httpStatusCodes.UNPROCESSABLE_ENTITY
      )
    )
  } else {
    next()
  }
}

module.exports = validate
