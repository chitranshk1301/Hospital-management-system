const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

const db = require('./db')
const patientRouter = require('./routes/patient-router')
const diseaseRouter = require('./routes/diseases-router')


const app = express()
const apiPort = 3000

dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.status(200)
    res.json({message: 'This is hospital management API'})
})

app.use('/api', patientRouter)
app.use('/api', diseaseRouter)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))