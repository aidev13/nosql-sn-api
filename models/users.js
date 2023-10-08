const { Schema, model } = require('mongoose')

//schema
const usernameSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        // Explanation of the regular expression:
        // ^: Asserts the start of the string.
        // [^\s@]+: Matches one or more characters that are not whitespace or '@'.
        // @: Matches the '@' character.
        // [^\s@]+: Matches one or more characters that are not whitespace or '@'.
        // \.: Matches the dot ('.') character (escaped with a backslash).
        // [^\s@]+: Matches one or more characters that are not whitespace or '@'.
        // $: Asserts the end of the string.

    },
    thoughts: [{
    // Array of _id values referencing the Thought model
        type: Schema.ObjectId,
        ref: 'thoughts'
    }],
    friends: [{
        type: Schema.ObjectId,
        ref: "users"
    }],

})

//         //Schema Settings
//             Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
usernameSchema.virtual

//model
const Username = model('Username', usernameSchema)

module.exports = Username;