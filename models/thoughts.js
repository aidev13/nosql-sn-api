const { Schema, model } = require('mongoose')
const getCurrentTimestamp = Date.now()
const reactionSchema = require('./schema-only/reactions')

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
        default: getCurrentTimestamp,
        // TODO: Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]

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