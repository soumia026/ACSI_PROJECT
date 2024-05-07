const express = require('express')

const router = express.Router()

const {
    authUser,
    registerUser,
    forgotPassword,
    resetPassword
} = require('../controllers/userController')


router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword/:resettoken').put(resetPassword)

module.exports = router