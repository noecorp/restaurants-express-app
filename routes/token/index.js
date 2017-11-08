const express = require('express')
const router = express.Router()

const checkLogin = require('./handlers/checkLogin')
const requestNewToken = require('./handlers/requestNewToken')
router.use(checkLogin)
router.post('/', requestNewToken)

module.exports = router
