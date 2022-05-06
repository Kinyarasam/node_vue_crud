const express = require('express')
const router = express.Router()

const { getAllProducts, createProduct } = require('../controller/Products.js')

router.route('/')
	.get(getAllProducts)
	.post(createProduct)

module.exports = router