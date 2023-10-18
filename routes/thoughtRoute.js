const { ObjectId } = require('mongodb')
const { Thoughts } = require('../models')
const express = require('express')
const router = express.Router()


router.get('/getall', async (req, res) => {
    try {
        const result = await Thoughts.find()
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})


router.post('/add', async (req, res) => {
    try {
        const newThought = await Thoughts.create(req.body)
        res.json(newThought)
    } catch (err) {
        res.status(500).json(err)
    }

});


router.post('/addreaction/:thoughtid', async (req, res) => {
    const { thoughtid } = req.params
    try {
        const result = await Thoughts.findByIdAndUpdate({  
            _id: thoughtid
        },
        {
            $push: {reactions: req.body}
        },
        { new: true })
        res.json(result)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/:thoughtid/reactions', async(req, res) => {
    const {thoughtid} = req.params;
    try {
        const result = await Thoughts.findById({
            _id: thoughtid
        })

        res.json(result.reactions)
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.put('/:thoughtid/deletereaction/:reactionid', async(req, res) => {
    const {thoughtid, reactionid } = req.params;

    try {
        const result = await Thoughts.findByIdAndUpdate({
            _id: thoughtid
        },
        {
            $pull: { reactions: {_id: reactionid}}
        }
        )

        res.json(`Reaction id ${reactionid} was deleted!`)
    }
    catch(err){
        res.status(500).json(err)
    }
})

// router.put('/reaction/:id', async (req, res) => {
//     const { id } = req.params
//     try {
//         const result = await Thoughts.findByIdAndUpdate({  
//             id
//         },
//         {
//             $push: {reactions: req.body}
//         },
//         { new: true })
//         res.json(result)
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// router.delete('/deletereaction/:id', async (req, res) => {
//     const { id } = req.params
//     try {
//         const result = await Thoughts.findByIdAndUpdate({  
//             id
//         },
//         {
//             $pull: { reactions: ObjectId }
//         },
//         { new: true })
//         res.json(result)
//     } catch(err) {
//         res.status(500).json(err)
//     }
//     })
    



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