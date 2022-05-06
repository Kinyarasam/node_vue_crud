const express = require('express')
const router = express.Router()

const { getAllProducts, createProduct, getProduct, deleteProduct } = require('../controller/Products.js')

router.route('/')
	.get(getAllProducts)
	.post(createProduct)
router.route('/:id')
	.get(getProduct)
	.delete(deleteProduct)

module.exports = router
