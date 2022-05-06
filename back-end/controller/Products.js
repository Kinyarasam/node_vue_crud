const Product = require('../Models/Products')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

// Get All Products
const getAllProducts = asyncWrapper(async (req, res, next) => {
	const products = await Product.find()
	res.status(200).json({ products })
})

// Create a New Product
const createProduct = asyncWrapper(async (req, res, next) => {
	const product = await Product.create(req.body)
	res.status(201).json({ product })
})

// Get Single Product
const getProduct = asyncWrapper(async (req, res, next) => {
	try {
		const { id:productID } = req.params
		const product = await Product.findOne({ _id:productID })

		if (!product) {
		// return next(createCustomError({
			return res.status(404).json({
				msg: `No Product with id: ${productID}`
			})
		// )
		}

		res.status(200).json({ product })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
})

// Delete product
const deleteProduct = async (req, res) => {
	try {
		const { id:productID } = req.params
		const product = await Product.findOneAndDelete({ _id:productID })

		if (!product) {
			return res.status(404).json({ 
		 		msg: `No Product with id: ${productID}`
			})
		}
		// return next(createCustomError({
		//	msg: `No Product with id ${productID}`
		//}))

		res.status(200).json({ product })
	} catch (error) {
		res.status(500).json({ msg: error })
	}

	// res.status(200).json({ product })
}


module.exports = {getAllProducts, createProduct, getProduct, deleteProduct}
