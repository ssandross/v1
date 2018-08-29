var mongoose = require('mongoose');

var SchemaTypes = mongoose.Schema.Types;

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
        type: SchemaTypes.ObjectId,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    services: {
        type: [SchemaTypes.ObjectId],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('user', User);