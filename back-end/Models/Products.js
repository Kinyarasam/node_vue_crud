const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		require: [true, 'must provide a name'],
		trim: true,
	},
	price: {
		type: Number,
		default: 0,
	}
})

module.exports = mongoose.model('Product', ProductSchema)
