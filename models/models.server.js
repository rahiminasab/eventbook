/**
 * Created by ehsan on 6/19/16.
 */
module.exports = function() {
    var mongoose = require('mongoose')
    
    mongoose.connect('mongodb://localhost/eventbook');
    
    var models = {
        userModel: require('./user/user.model.server')(),
        eventModel: require('./event/event.model.server')()
    }
    return models;
}