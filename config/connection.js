const mongoose = require('mongoose')
const dbName = 'social_db'
const connection = mongoose.connect(`mongodb://127.0.0.1/${dbName}`)


module.exports = connection