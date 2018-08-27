var mongoose = require('mongoose');

var CardService = mongoose.Schema({
    cardId: {
        type: Object,
        required: true
    },
    serviceId: {
        type: Object,
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