const { Schema, model } = require('mongoose')

const thoughtSchema = new Schema ({
    //         //thoughtText
    //             String
    //             Required
    //             Must be between 1 and 280 characters
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    }
    
    //         //createdAt
    //             Date
    //             Set default value to the current timestamp
    //             Use a getter method to format the timestamp on query
    
    //         //username (The user that created this thought)
    //             String
    //             Required
    
    //         //reactions (These are like replies)
    //             Array of nested documents created with the reactionSchema

})

const Thoughts = model('Thoughts', thoughtText)

module.exports = Thoughts;


//         //Schema Settings
//             Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.