const router = require('express').Router();
const passport = require('../middleware/passport');
const { fetchExerciseLogs, createExerciseLog, deleteExerciseLog, updateExerciseLog } = require('../controller/exerciseLogController');

router.post('/', passport.authenticate('jwt', { session: false }), createExerciseLog);
router.get('/', passport.authenticate('jwt', { session: false }), fetchExerciseLogs);
router.patch('/:exerciseLogId', passport.authenticate('jwt', { session: false }), updateExerciseLog);
router.delete('/:exerciseLogId', passport.authenticate('jwt', { session: false }), deleteExerciseLog);
module.exports = router;