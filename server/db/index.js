const mongoose = require('mongoose')
import * as dotenv from 'dotenv'
dotenv.config()

mongoose
    // .connect('mongodb://127.0.0.1:27017/hospital-management', { useNewUrlParser: true })
    .conect(process.env.DARABASE_URL, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db