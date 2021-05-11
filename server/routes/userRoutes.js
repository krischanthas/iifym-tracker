const router = require('express').Router();
const passport = require('../middleware/passport');
const { getUserProfile, setUserGoals } = require('../controller/userController');

router.get('/profile', passport.authenticate('jwt', { session: false }), getUserProfile);
router.patch('/profile', passport.authenticate('jwt', { session: false }), setUserGoals);
module.exports = router;