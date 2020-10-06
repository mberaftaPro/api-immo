const router = require('express').Router()
const searchFiltersController = require('../controllers/search-filters-controller')

router.post('/', searchFiltersController.post)

module.exports = router
