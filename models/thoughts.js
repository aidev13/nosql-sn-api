const { Schema, model } = require('mongoose')
const reactionSchema = require('./schema-only/reactions')

// date and date formatting
// const date = new Date()
// const timestamp = date.toDateString()

// console.log(timestamp)

//schema
const thoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // TODO: Use a getter method to format the timestamp on query
        get(date) {
            return date?.toDateString()
        }
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ { $push: {reactions: reactionSchema} }]

    }, 
    {
    toJSON: {
        getters: true,
        virtuals: true
    }
})

//         //Schema Settings
//             Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})


//model
const Thoughts = model('Thoughts', thoughtSchema)

module.exports = Thoughts;