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
    
    function createUser(user) {
        return User.create(user);
    }
    
    function findAllUsers() {
        return User.find({});
    }
    
    function findUserById(userId) {
        return User.findById(userId);
    }
    
    function findFacebookUser(id) {
        return User.findOne({"facebook.id": id});
    }
};