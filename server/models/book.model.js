const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    },
    shelf: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    },
    author: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    },
    cover: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    },
    description: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    },
    rating: {
        type: String,
        required: false,
        unique: false,
        trim: true
    }
},
{
    timestamps: false
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;