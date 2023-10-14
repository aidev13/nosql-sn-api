const Thoughts = require('../models/thoughts')
const express = require('express')
const router = express.Router()


router.get('/getall', async (req, res) => {
    try {
        const result = await Thoughts.find()
        res.json(result)
    } catch (err) {
        res.status(500).json(err)
    }

})

//why does this not work in insomnia????? WTF
router.post('/add', async (req, res) => {
    try {
        const newThought = await Thoughts.create(req.body)
        res.json(newThought)
    } catch (err) {
        res.status(500).json(err)
    }

});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    console.log( updateData )
    try {
        const updateThought = await Thoughts.findByIdAndUpdate(id, updateData, {
            new: true,
          })
          res.json(updateThought)
        } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/destory/:id', async (req, res) => {
    const { id } = req.params
    await Thoughts.findByIdAndDelete( id )
    res.json("Thought Deleted Successfully!")
})



module.exports = router;