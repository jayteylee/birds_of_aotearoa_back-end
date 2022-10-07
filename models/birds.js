const mongoose = require("mongoose");

// create a schema
const birdSchema = new mongoose.Schema({
    // _id: mongoose.Schema.ObjectId,
    primary_name: { type: String, required: true },
    english_name: { type: String, reqired: true },
    scientific_name: { type: String, required: true },
    order: { type: String, required: true },
    family: { type: String, required: true },
    other_names: { type: [String], required: true},
    status: { type: String, required: true },
    photo: {
        credit: { type: String },
        source: { type: String },
    },
    size: {
        length: {
            value: { type: Number },
            units: { type: String },
        },
        weight: {
            value: { type: Number },
            units: { type: String },
        }
    }
})

// compile the schema into a model (named 'message')
const Bird = mongoose.model('birds', birdSchema);

// export the model
module.exports = Bird;