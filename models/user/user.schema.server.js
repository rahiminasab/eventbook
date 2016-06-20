module.exports = function () {
    var mongoose = require('mongoose');
    
    var UserSchema = mongoose.Schema({
        facebook:{
            token: String,
            id: String,
            displayName: String
        },
        dateCreated: {type: Date, default: Date.now}
    }, {collection: 'eventbook.user'});
    
    return UserSchema;
}