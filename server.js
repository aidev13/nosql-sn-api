// express connection
const express = require('express')
const app = express()
const port = 3001

//mongodb connection
const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)
const dbName = 'social_db'

//mongoose connection
const connection = require('./config/connection')

//mongo init
const init = async () => {
    await client.connect();
    console.log("MongoDB Connected!");
    const db = client.db(dbName);
    const socialCollection = db.collection('social');
    const socialData = await socialCollection.find().toArray();

    console.log(socialData)
}

init()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`APP listening on port ${port}`)
  })