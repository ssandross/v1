var mongoose = require('mongoose');

var Client = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: false
    },
    numberPhone: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('client', Client);