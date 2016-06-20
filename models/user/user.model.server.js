module.exports = function () {
    var mongoose = require('mongoose');
    var UserSchema = require('./user.schema.server')();
    
    var User = mongoose.model("User", UserSchema);
    
    var api = {
        createUser: createUser,
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        findFacebookUser: findFacebookUser
    };
    return api;
    
    function createUser() {
        
    }
    
    function findAllUsers() {
        
    }
    
    function findUserById() {
        
    }
    
    function findFacebookUser() {
        
    }
}