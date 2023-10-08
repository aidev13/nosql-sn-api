const { Schema, models } = require('mongoose')
const objectID = mongoose.Types.ObjectId

// >Reaction (SCHEMA ONLY):
const reactionSchema = new Schema ({
    //         //reactionId
    //             Use Mongoose's ObjectId data type
    //             Default value is set to a new ObjectId
    reactionId : {
        id: objectID,
        default: () => new objectID
    },
    //         //reactionBody
    //             String
    //             Required
    //             280 character maximum
    
    //         //username
    //             String
    //             Required
    
    //         //createdAt
    //             Date
    //             Set default value to the current timestamp
    //             Use a getter method to format the timestamp on query


})

//         //Schema Settings
//             This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.



//Do not provide a model for reaction...