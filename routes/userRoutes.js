const { Users, Thoughts } = require('../models')
const express = require('express')
const router = express.Router()

router.get('/getallusers', async (req, res) => {
    try {
        const result = await Users.find({})
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }

})


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



module.exports = router;