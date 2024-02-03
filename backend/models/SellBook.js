const mongoose = require('mongoose');
const { Schema } = mongoose;

const sellBookSchema = new Schema({
    bookname: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: false
    },
    condition: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    price: {
        type: Number,
        required: true
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const SellBook = mongoose.model("sellbooks", sellBookSchema)

module.exports = SellBook;