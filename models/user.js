var mongoose = require('mongoose');

var User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    client: {
        type: Object,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('user', User);