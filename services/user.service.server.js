var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function (app, models) {

    var userModel = models.userModel;

    app.get("/auth/facebook", passport.authenticate('facebook',{ scope : 'user_events' }));
    app.get("/auth/facebook/callback",  passport.authenticate('facebook', {
        successRedirect: '/#/home',
        failureRedirect: '/#/login'
    }));
    app.get('/api/loggedIn', loggedIn);
    app.get('/api/user/:userId', findUserById);

    app.post('/api/logout', logout);

    var facebookConfig = {
        clientID     : process.env.FACEBOOK_CLIENT_ID,
        clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL  : process.env.FACEBOOK_CALLBACK_URL
    };

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    
    passport.use(new FacebookStrategy(facebookConfig, facebookLogin));

    function facebookLogin(token, refreshToken, profile, done) {
        console.log(user_events);
        userModel
            .findFacebookUser(profile.id)
            .then(
                function(facebookUser) {
                    if(facebookUser) {
                        return done(null, facebookUser);
                    } else {

                        facebookUser = {
                            facebook: {
                                token: token,
                                id: profile.id,
                                displayName: profile.displayName
                            }
                        };
                        return userModel
                            .createUser(facebookUser)
                            .then(
                                function(user){
                                    done(null, user)
                                }
                            )
                    }
                }
            )
    }

    function loggedIn(req, res) {
        if(req.isAuthenticated()) {
            res.json(req.user);
        } else {
            res.send('0');
        }
    }

    function logout(req,res) {
        req.logout();
        res.send(200);
    }

    function findUserById(req, res) {
        var id = req.params.userId;
        userModel
            .findUserById(id)
            .then(
                function (user) {
                    res.json(user);
                },
                function (err) {
                    res.statusCode(404).send(err);
                }
            )
    }

};