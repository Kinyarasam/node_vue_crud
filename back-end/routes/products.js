const express = require('express')
const router = express.Router()

const { getProducts } = require('../controller/Products.js')

router.route('/')
	.get(getProducts)

module.exports = router
