const mongoose = require('mongoose')

const keys = require('./keys')

const connectDB = async () => {
  const conn = await mongoose.connect(keys.db.url)

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB
