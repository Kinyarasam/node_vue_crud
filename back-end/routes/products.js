const express = require('express')
const router = express.Router()

const { getAllProducts, createProduct, getProduct } = require('../controller/Products.js')

router.route('/')
	.get(getAllProducts)
	.post(createProduct)
router.route('/:id')
	.get(getProduct)

module.exports = router
