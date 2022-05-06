const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const products = require('./routes/products')
const errorHandler = require('./middleware/errorhandler')

require ('dotenv').config()

app.use(express.json())
app.use('/api/products', products)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(PORT, () => {
			console.log(`Server is running on ${PORT} url: http://localhost:${PORT}`)
		})
	}catch (err) {
		console.log(err)
	}
}

start()
