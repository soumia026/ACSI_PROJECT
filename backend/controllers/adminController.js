const crypto = require('crypto')

const User = require('../models/User')

const asyncHandler = require('express-async-handler')

const ErrorResponse = require('../utils/ErrorResponse')

// @desc     Get pending Users
// @route    Get /api/users/
// @access   Private
exports.getPendingUsers = asyncHandler(async(req, res, next) =>{
    const pendingUsers = await User.find({ status: 'pending' })

    if (pendingUsers) {
        res.status(201)
        res.json({pendingUsers
        })
    } else {
        next(new ErrorResponse('User not found', 404))
    }
  
})
// @desc     Accept or Reject User
// @route    PUT /api/users/
// @access   Private
exports.updateUser = asyncHandler(async(req, res, next) =>{
    const user = await User.findById(req.params._id)
    const { status } = req.body

    if (user) {
        const update = await User.findByIdAndUpdate(_id, { status });

        if (update) {
            res.status(201)
            res.json({
                user
            })
        }

    } else {
        next(new ErrorResponse('User not found', 404))
    }
})

