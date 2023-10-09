const router = require('express').Router()
const usersRoute = require('./usersRoute')
const thoughtsRoute = require('./thoughtsRoute')

router.use('/getusers', usersRoute)
router.use('/getthoughts', thoughtsRoute)

module.exports = router