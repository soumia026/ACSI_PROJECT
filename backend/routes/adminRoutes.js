const express = require('express')

const router = express.Router()

const {
    getPendingUsers,
    updateUser,
    authAdmin
} = require('../controllers/adminController')

router.route('/pendingUsers').get(getPendingUsers)
router.route('/updateUser/:userId').put(updateUser)
router.route('/authAdmin').post(authAdmin)
module.exports = router