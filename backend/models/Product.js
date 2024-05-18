const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
    },
    category: {
        type: String,
        enum: ['produce', 'meat', 'dairy', 'frozen food'],
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
    expireAt: {
        type: Date
    },
    purchases: [{
        orderDate: {
            type: Date
        },
        orderType: {
            type: String,
            enum: ['normal', 'special']
        },
        costPrice: {
            type: Number
        },
        quantity: {
            type: Number
        }
    }]
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
