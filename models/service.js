var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

var Service = mongoose.Schema({
    client: {
        type: Object,
        require: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: SchemaTypes.Double,
        required: false
    },
    date: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('service', Service);