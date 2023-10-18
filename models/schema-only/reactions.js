const { Schema, Types } = require('mongoose')
const objectID = Types.ObjectId

// >Reaction (SCHEMA ONLY):
const reactionSchema = new Schema({
    reactionId: {
        type: objectID,
        default: () => new objectID
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        defaut: Date.now(),
        //             Use a getter method to format the timestamp on query
        get(date) {
            console.log(date)
            return date?.toDateString()

        }
    }
    },
    {
        toJSON: { getters: true }
    });

// Schema Settings
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

//Do not provide a model for reaction...

module.exports = reactionSchema;