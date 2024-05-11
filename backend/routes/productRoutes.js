const express = require('express')

const router = express.Router()

const {
    createProduct,
    deleteProduct,
    getAllProducts,
    getExpiredProducts,
    getProduct,
    updatePriceProduct
} = require('../controllers/productController')

router.route('/createProduct').post(createProduct)
router.route('/deleteProduct/:productId').delete(deleteProduct)
router.route('/products').get(getAllProducts)
router.route('/expiredProducts').get(getExpiredProducts)
router.route('/:productId').get(getProduct)
router.route('/updatePrice/:productId').put(updatePriceProduct)

module.exports = router