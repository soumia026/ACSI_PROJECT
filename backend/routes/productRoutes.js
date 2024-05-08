const express = require('express')

const router = express.Router()

const {
    createProduct,
    deleteProduct,
    getAllProducts,
    getExpiredProducts
} = require('../controllers/productController')

router.route('/createProduct').post(createProduct)
router.route('/deleteProduct').delete(deleteProduct)
router.route('/products').get(getAllProducts)
router.route('/expiredProducts').get(getExpiredProducts)

module.exports = router