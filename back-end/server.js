const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

const start = () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server is running on ${PORT} url: http://localhost:${PORT}`)
		})
	}catch (err) {
		console.log(err)
	}
}

start()
