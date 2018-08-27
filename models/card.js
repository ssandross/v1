var mongoose = require('mongoose');

var Card = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    register: {
        type: Object,
        required: true
    },
    services: {
        type: Array,
        required: false
    },
    status: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('card', Card);