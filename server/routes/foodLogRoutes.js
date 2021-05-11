const router = require('express').Router();
const { addFood, updateFood, deleteFood } = require('../controller/foodLogController');
const passport = require('../middleware/passport');

// User log routes
router.post('/', passport.authenticate('jwt', { session: false }), addFood);
router.put('/:foodLogId', passport.authenticate('jwt', { session: false }), updateFood);
router.delete('/:foodLogId', passport.authenticate('jwt', { session: false }), deleteFood);




module.exports = router;