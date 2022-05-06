const express = require('express')
const router = express.Router()

const { 
	getAllProducts, createProduct, getProduct, deleteProduct, updateProduct 
} = require('../controller/Products.js')

router.route('/')
	.get(getAllProducts)
	.post(createProduct)
router.route('/:id')
	.get(getProduct)
	.patch(updateProduct)
	.delete(deleteProduct)

module.exports = router
