const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const products = require('./routes/products')

require ('dotenv').config()

app.use(express.json())
app.use('/api/products', products)

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
