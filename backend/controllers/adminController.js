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
exports.updateUser = asyncHandler(async(req, res, next) => {
    const user = await User.findById(req.params.userId);
    const userEmail = await User.findOne({ email: req.body.email, status: req.body.status })

    if (user) {
        const update = await User.findByIdAndUpdate(req.params.userId, {status: req.body.status});
        if (update && userEmail.status === 'accepted') {
            try {
                console.log('update function invoked')
                await sendEmail({
                    email: userEmail.email,
                    subject: 'Metrix - Acceptance information',
                    message: 'You had been accepted for Metrix Entreprise, congrats!' // You need to define 'message'
                });
    
                res.status(200).json({
                    success: true,
                    message: 'Email sent'
                });
                console.log('user accepted')
            } catch (error) {
                console.log(error);
                return next(new ErrorResponse('Email could not be sent', 500));
            }
        } else {
            console.log('user rejected')
            return next(new ErrorResponse('Update unsuccessful or user status is not accepted', 400));
        }
    } else {
        return next(new ErrorResponse('User not found', 404));
    }
})