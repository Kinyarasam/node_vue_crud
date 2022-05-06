const Product = require('../Models/Products')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

// Get All Products
const getAllProducts = asyncWrapper(async (req, res) => {
	const products = await Product.find()
	res.status(200).json({ products })
})

// Create a New Product
const createProduct = asyncWrapper(async (req, res) => {
	const product = await Product.create(req.body)
	res.status(201).json({ product })
})

// Get Single Product
const getProduct = asyncWrapper(async (req, res) => {
	const { id:productID } = req.params
	const product = await Product.findOne({ _id:productID })

	if (!product) {
		return next(createCustomError({
			msg: `No Prouct with id: ${productID}`
		}))
	}

	res.status(200).json({ product })
})

module.exports = {getAllProducts, createProduct, getProduct}
