const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = require('./book.model');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 2
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 2
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
},
{
    timestamps: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;