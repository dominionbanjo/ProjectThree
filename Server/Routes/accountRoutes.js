const express = require('express')
const router = express.Router()
const accounts = require('../Controllers/accountController.js')
const requireAuth = require('../Middlewares/requireAuth.js')

router.use('/auth/deleteAccount',requireAuth)

router.delete('/auth/deleteAccount', accounts.deleteAccount)
router.post('/auth/signup', accounts.signUp)
router.post('/auth/login', accounts.login)

module.exports = router