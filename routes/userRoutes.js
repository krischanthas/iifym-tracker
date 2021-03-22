const router = require('express').Router();
const passport = require('../middleware/passport');
const { getUserProfile } = require('../controller/userController');

router.get('/profile', passport.authenticate('jwt', { session: false }), getUserProfile);

module.exports = router;