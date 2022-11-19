const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const patientRouter = require('./routes/patient-router')
const diseaseRouter = require('./routes/diseases-router')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hospital Management System')
})

app.use('/api', patientRouter)
patientRouter.use('/:patientId/diseases', diseaseRouter)


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))