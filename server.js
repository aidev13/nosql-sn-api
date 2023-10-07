const { app } = require('./config/connection')
const { MongoClient } = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

const dbName = 'social_db'

const init = async () => {
    await client.connect()
    console.log("MongoDB Connected!")

    const db = client.db(dbName)
}

init()