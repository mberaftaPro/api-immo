const router = require('express').Router()
const usersController = require('../controllers/users-controller')
const validate = require('../validators/user-validator')

router.get('/', usersController.get)
router.get(/me/, usersController.me)
router.get('/:id', usersController.getOne)
router.post('/', validate, usersController.create)
router.post('/login', usersController.login)

module.exports = router
