const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const products = require('./routes/products')
const errorHandler = require('./middleware/errorhandler')

require ('dotenv').config()

app.use((req, res, next ) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})
app.use(express.json())
app.use('/products', products)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		console.log('Connected to the DB successfully')
		app.listen(PORT, () => {
			console.log(`Server is running on ${PORT} url: http://localhost:${PORT}`)
		})
	}catch (err) {
		console.log(err)
	}
}

start()
