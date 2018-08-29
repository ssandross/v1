var mongoose = require('mongoose');

var SchemaTypes = mongoose.Schema.Types;

var Register = mongoose.Schema({
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
    services: {
        type: Object,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('register', Register);