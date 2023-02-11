const mongoose = require("mongoose");

// Create a schema
const characterSchema = new mongoose.Schema({
    character: {
        type: String,
        required: true,
        trim: true,
    },
    eng_translation: {
        type: String,
        required: true,
        trim: true,
    },
    pinyin: {
        type: String,
        required: true,
        trim: true,
    },
    level: {
        type: Number,
        required: true,
        trim: true,
    },
    use_example: {
        type: String,
        required: true,
        trim: true,
    },
    eng_example: {
        type: String,
        required: true,
        trim: true,
    },//end of characterSchema
});

// Create a model using the schema
const Character = mongoose.model("Character", characterSchema); 
// Export the model
module.exports = Character;