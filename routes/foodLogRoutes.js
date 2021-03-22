const router = require('express').Router();
const { addFood, searchFood, updateFood, deleteFood } = require('../controller/foodLogController');
const passport = require('../middleware/passport');
// const verify = require('../middleware/verifyToken');

router.post('/', passport.authenticate('jwt', { session: false }), addFood);
router.put('/:foodLogId', passport.authenticate('jwt', { session: false }), updateFood);
router.post('/nutritionix/', passport.authenticate('jwt', { session: false }), searchFood);
router.delete('/:foodLogId', passport.authenticate('jwt', { session: false }), deleteFood);

module.exports = router;