module.exports = function () {
    var mongoose = require('mongoose');
    var EventSchema = require('../event/event.schema.server')();
    
    var UserSchema = mongoose.Schema({
        facebook:{
            token: String,
            id: String,
            displayName: String
        },
        events: [EventSchema],
        dateCreated: {type: Date, default: Date.now}
    }, {collection: 'eventbook.user'});
    
    return UserSchema;
}