const mongoose = require('mongoose')

mongoose
    // .connect('mongodb+srv://chitransh13:vansh@cluster0.ruvcgk7.mongodb.net/hospital-management?retryWrites=true&w=majority', { useNewUrlParser: true })
    .connect('mongodb://127.0.0.1:27017/hospital-management', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db