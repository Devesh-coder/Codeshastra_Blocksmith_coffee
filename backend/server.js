import express from 'express'
import cors from 'cors'
// import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 8000
const app = express()

app.use(cors())

app.get('/', (req, res) => {
	console.log('Hello World!')
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
