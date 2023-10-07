const { Schema, model } = require('mongoose')
const getCurrentTimestamp = Date()

//schema
const thoughtSchema = new Schema ({

    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: getCurrentTimestamp,
        toJSON: {
            getters: true
        }
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        //         //reactions (These are like replies)
        //             Array of nested documents created with the reactionSchema

    }
    
})

//         //Schema Settings
//             Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual


//model
const Thoughts = model('Thoughts', thoughtSchema)

module.exports = Thoughts;