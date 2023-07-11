const express = require('express')
const router = express.Router()
const user = require('../Controllers/userController.js')
const requireAuth = require('../Middlewares/requireAuth.js')

router.use(requireAuth)
router.get('/', user.getProfile)
router.get('/name', user.getName)

module.exports = router