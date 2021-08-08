const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    genre: String,
    year: String,
    rate: Number,
    comment: String,
    link: String,
    img: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = new mongoose.model('movie', movieSchema);