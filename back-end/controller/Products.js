const Product = require('../Models/Products')
const asyncWrapper = require('../middleware/async')

const getProducts = asyncWrapper(async (req, res) => {
	const products = await Product.find()
	res.status(200).json({ products })
})

module.exports = {getProducts}
