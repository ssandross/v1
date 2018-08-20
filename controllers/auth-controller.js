var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


/**
 * 
 */
class AuthController {

    /**
     * 
     */
    google() {

        // var options = {
        //     clientID: '504225597758-8pfoblbd6di4oeeskh7kufbk9c1nd712.apps.googleusercontent.com',
        //     clientSecret: 'cN9BFceTdNi_5OHliIJICPde',
        //     callbackURL: "http://localhost:3000/google/auth/google/callback"
        // };

        // var googleCallback = function (accessToken, refreshToken, profile, done) {

        //     return done(null);
        // };

        // passport.use(new GoogleStrategy(options, googleCallback));

        passport.use(new GoogleStrategy({
            clientID: '504225597758-8pfoblbd6di4oeeskh7kufbk9c1nd712.apps.googleusercontent.com',
            clientSecret: 'cN9BFceTdNi_5OHliIJICPde',
            callbackURL: "http://localhost:3000/google/auth/google/callback"
        },
            function (req, accessToken, refreshToken, profile, done) {

                console.log(accessToken);
            }));

        return true;
    }

    /**
     * 
     */
    facebook() {

    }

    /**
     * 
     */
    linkedin() {

    }

}

module.exports = new AuthController();