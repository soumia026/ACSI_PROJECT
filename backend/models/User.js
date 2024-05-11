const mongoose = require('mongoose')

const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Password too short']
    },
    roles: [{
    type: String,
    enum: ['invetory manager', 'store manager', 'supplier'] // Define the possible roles
    }],
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
      },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
})

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})


UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.methods.generateJWT = function() {
    return jwt.sign(
        {userId: this._id},
        process.env.JWT_SECRET,
        {expiresIn: '30d'}
    )
}

UserSchema.methods.getResetToken = function() {
    const resetToken = crypto.randomBytes(20).toString('hex')

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000

    return resetToken
}

const User = mongoose.model('User', UserSchema)

module.exports = User