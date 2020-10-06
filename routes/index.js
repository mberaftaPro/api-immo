var express = require('express')
var router = express.Router()

const apiRoutes = require('../api/routes')

module.exports = app => {
  app.use('/api', apiRoutes)
}
