var mongoose = require('mongoose');

var SchemaTypes = mongoose.Schema.Types;

var CardService = mongoose.Schema({
    cardId: {
        type: SchemaTypes.ObjectId,
        required: true
    },
    serviceId: {
        type: SchemaTypes.ObjectId,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
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

module.exports = mongoose.model('card-service', CardService);