const mongoose = require("mongoose");

// create a schema
const birdSchema = new mongoose.Schema({
    primary_name: { type: String, required: true },
    english_name: { type: String, reqired: true },
    scientific_name: { type: String, required: true },
    order: { type: String, required: true },
    family: { type: String, required: true },
    other_names: { type: [String], required: true},
    photo: {
        credit: String,
        source: String
    },
    size: {
        length: {
            value: Number,
            units: String
        },
        weight: {
            value: Number,
            units: String
        }
    }
})

// compile the schema into a model (named 'message')
const Bird = mongoose.model('birds', birdSchema);

// export the model
module.exports = Bird;