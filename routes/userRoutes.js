const { Users } = require('../models')
const express = require('express')
const router = express.Router()

router.get('/getall', async (req, res) => {
    try {
        const result = await Users.find()
        res.json(result)
        console.log(result)
    } catch (err) {
        res.status(500).json(err)
    }

})

router.post('/add', async (req, res) => {
    try {
        const newUser = await Users.create(req.body)
        res.json(newUser)
    } catch (err) {
        res.status(500).json(err)
    }

});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    try {
        const updateUser = await Users.findByIdAndUpdate(id, updateData, {
            new: true,
          })
          res.json(updateUser)
        } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/destory/:id', async (req, res) => {
    const { id } = req.params
    await Users.findByIdAndDelete( id )
    res.json("User Deleted Successfully!")
})



module.exports = router;