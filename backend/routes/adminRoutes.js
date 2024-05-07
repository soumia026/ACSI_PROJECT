const express = require('express')

const router = express.Router()

const {
    getPendingUsers,
    updateUser
} = require('../controllers/adminController')

router.route('/pendingUsers').get(getPendingUsers)
router.route('/updateUser/:userId').put(updateUser)

module.exports = router