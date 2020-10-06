const router = require('express').Router()
const usersRoutes = require('./users')
const searchFiltersRoutes = require('./search-filter')
const jwtMiddleware = require('../middlewares/jwt-middleware')

router.get('/ping', (req, res) => {
  res.status(200).json('pong')
})

router.use(jwtMiddleware)
router.use('/users', usersRoutes)
router.use('/search_filters', searchFiltersRoutes)
module.exports = router
