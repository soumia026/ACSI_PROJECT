const crypto = require('crypto')

const User = require('../models/User')

const asyncHandler = require('express-async-handler')

const ErrorResponse = require('../utils/ErrorResponse')
const sendEmail = require('../utils/sendEmail')

// @desc     Authenticate user
// @route    POST /api/users/login
// @access   Public
exports.authUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        if (user.status === 'accepted') {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: user.generateJWT()
            })
        } else {
            return next(new ErrorResponse('Your account is not yet accepted', 403));
        }
    } else {
        return next(new ErrorResponse('Invalid email or password', 400));
    }
})


// @desc     Register user
// @route    POST /api/users
// @access   Public
exports.registerUser = asyncHandler(async(req, res, next) => {
    const { name, email, password, role } = req.body

    const userExists = await User.findOne({email})

    if (userExists) {
        next(new ErrorResponse('User already exists', 400))
    }

    const user = await User.create({
        name,
        email,
        password,
        role,
        status: 'pending'
    })

    if (user) {
        res.status(201)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status,
        
        })
    } else {
        next(new ErrorResponse('Invalid user data', 400))
    }
})
// @desc     Forgot password
// @route    POST /api/users/forgotpassword
// @access   Public
exports.forgotPassword = asyncHandler(async(req, res, next) => {
    const user = await User.findOne({ email: req.body.email })

    if (user) {
        const resetToken = user.getResetToken()

        await user.save({ validateBeforeSave: false })

        const resetUrl = `${req.body.protocol}://${req.body.hostname}:${req.body.port ? req.body.port : ''}/reset-password/${resetToken}`

        const message = `${user.name} are receiving this email because you have requested the reset of your password, please visit this link to update your password: ${resetUrl}`

        try {
            await sendEmail({
                email: user.email,
                subject: 'Metrix - Password Recovery',
                message
            })

            res.status(200).json({
                success: true,
                message: 'Email sent',
            })
        } catch (error) {
            console.log(error)
            user.resetPasswordToken = undefined
            user.resetPasswordExpire = undefined
            await user.save({ validateBeforeSave: false })

            next(new ErrorResponse('Email could not be sent', 500))

        }
    } else {
        next(new ErrorResponse('Email address does not exist', 404))
    }
})

// @desc     Reset password
// @route    PUT /api/users/resetpassword/:resettoken
// @access   Public
exports.resetPassword = asyncHandler(async(req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.resettoken).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}
    })

    if (user) {
        user.password = req.body.password
        user.resetPasswordToken = undefined
        user.resetPasswordExpire = undefined

        await user.save()

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: user.generateJWT()
        })
    } else {
        next(new ErrorResponse('Reset link expired, try again', 404))
    }
})
