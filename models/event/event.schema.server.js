module.exports = function () {

    var mongoose = require('mongoose');
    var EventSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: 'User'},
        image_url: String,
        name: String,
        date: Date,
        address: String
    }, {collection: 'eventbook.event'});
    return EventSchema;
};