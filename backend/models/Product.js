const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
    },
    category: {
        type: String,
        enum: ['phone', 'tshirt'],
    },
    description: {
        type: String,
    },
    sellingPrice: {
        type: Number,
    },
    costPrice: {
        type: Number,
    },
    quantity: {
        type: Number
    },
    orderType: {
        type: String,
        enum: ['normal', 'special'],
    },
    image: {
        type: String,
    },
    expireAt: {
        type: Date
    }

})
