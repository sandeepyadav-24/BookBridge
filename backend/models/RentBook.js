const mongoose = require('mongoose');
const { Schema } = mongoose;

const rentBookSchema = new Schema({
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
    duration: {
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

const RentBook = mongoose.model("rentbook", rentBookSchema)

module.exports = RentBook;