const mongoose = require('mongoose');

const PhoneSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    description: String,
    color: String,
    price: {
        type: Number,
        required: true
    },
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
});


module.exports = mongoose.model('Phones', PhoneSchema);