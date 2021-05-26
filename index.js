const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(cors())

const imageRouter = require('./routes/image-router')
const db = require('./db')
const apiPort = 6349;

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', imageRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))