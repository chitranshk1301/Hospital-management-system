const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(
    process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("connected to db  ")
  );

const db = mongoose.connection

module.exports = db