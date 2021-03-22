const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/UserModel');

var cookieExtractor = function (req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['Authorization'];
    }
    return token;
};
const option = {
    // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    jwtFromRequest: cookieExtractor,
    secretOrKey: 'aslkdjfasydbflajsdnaflksjd',
    // secretOrKey: process.env.JWT_SECRET_TOKEN
    // algorithms: ['RS256']
}
passport.use(new JwtStrategy(option, (payload, done) => {
    console.log(payload);
    User.findOne({ _id: payload.sub })
        .then(user => {
            console.log(user);
            return (user) ? done(null, user) : done(null, false);
        })
        .catch(err => done(err, null));
}));
module.exports = passport;