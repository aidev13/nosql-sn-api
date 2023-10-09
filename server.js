
//import models
const { Thoughts, Users } = require('./models')

// express connection
const express = require('express')
const app = express()
const port = 3001
const router = require('./routes/usersRoute')

//middleware
app.use(express.json())
app.use(router)

//mongodb connection
const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)
const dbName = 'social_db'

//mongoose connection
require('./config/connection')


//mongo init
const mongoInit = async () => {
  await client.connect();
  console.log("MongoDB Connected!");
  const db = client.db(dbName);
  const socialCollection = db.collection('social');
  const socialData = await socialCollection.find().toArray();
};
mongoInit()

//friend count
const countInit = async () => {
  const user = await Users.findOne()
  console.log(user.friendCount)
};
countInit()


app.get('/', (req, res) => {
  res.send('This is the server.js page')
})

app.listen(port, () => {
  console.log(`APP listening on port ${port}`)
})
