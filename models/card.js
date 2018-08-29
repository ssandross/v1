var mongoose = require('mongoose');

var SchemaTypes = mongoose.Schema.Types;

var Card = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    register: {
        type: SchemaTypes.ObjectId,
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
    client: {
        type: SchemaTypes.ObjectId,
        require: true
    },
    date: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('card', Card);