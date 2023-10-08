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

//import models
const { Thoughts, Users } = require('./models')

//mongo init
const mongoInit = async () => {
  await client.connect();
  console.log("MongoDB Connected!");
  const db = client.db(dbName);
  const socialCollection = db.collection('social');
  const socialData = await socialCollection.find().toArray();

  console.log(socialData)
};
mongoInit()

//friend count
const init = async () => {
const user = await Users.findOne()
console.log(user.friendCount)
};
init()


// use '.create' to create and save data to DB

// Users.create({
//   username: 'Bob121',
//   email: 'bob121@hotmail.com'
// })

//projections for email only
// Users.find({username: 'Stacey'}, 'email').then(user => console.log(user))

//projection to leave out data... use the "-" in sub-catagory
// Users.find({username: 'Stacey'}, '-email').then(user => console.log(user))

// Users.findById({_id: "6521fbe2e5824f16fec94736"}).then(user => console.log(user))

// Users.findByIdAndDelete('6521fc829e9e89804d2e766d')
//   .then((user => console.log(user)))


console.log(Users)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`APP listening on port ${port}`)
})
