const Product = require('../models/Product')
const User = require('../models/User')

const asyncHandler = require('express-async-handler')

const ErrorResponse = require('../utils/ErrorResponse')
//remplacer/

// @desc     Ajouter produit
// @route    POST /api/users/
// @access   Private 
exports.createProduct = asyncHandler(async(req, res, next) => {
    const { name, category, description, sellingPrice, costPrice, quantity, orderType, image, exprireAt } = req.body

    const product = new Product({
        name,
        category,
        description, 
        sellingPrice, 
        costPrice, 
        quantity, 
        orderType, 
        image,
        exprireAt
    })

    const createdProduct = await product.save()

    if (createdProduct) {
        res.status(201).json(createdProduct)
    } else {
        next(new ErrorResponse('Couldn\'t create Product', 400))
    }
})

// @desc     Delete product
// @route    DELETE /api/product/:productId
// @access   Private
exports.deleteProduct = asyncHandler(async(req, res, next) => {
    const product = await Product.findById(req.params.productId)
    
    if (product) {
        await product.remove()
        res.status(204).json({})
    } else {
        next(new ErrorResponse('Product not found', 404))
    }
})
// @desc     Delete product
// @route    DELETE /api/product/:productId
// @access   Private
exports.getAllProducts = asyncHandler(async(req, res, next) => {
    const product = await Product.find()

    if (product) {
        res.status(201)
        res.json({product})
    } else {
        next(new ErrorResponse('Product not found', 404))
    }
})

// @desc     Delete product
// @route    DELETE /api/product/:productId
// @access   Private
exports.getExpiredProducts = asyncHandler(async(req, res, next) => {
    const expiredProduct = await Product.find({ expireAt: { $lte: new Date() } })
    
    if (expiredProduct) {
        req.status (201)
        res.json({expiredProduct})
    } else {
        next(new ErrorResponse('Product not found', 404))
    }
})
