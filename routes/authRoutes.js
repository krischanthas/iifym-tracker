const router = require('express').Router();
const { register, login, signOut } = require('../controller/authController');

router.post('/register', register);
router.post('/login', login)
router.get('/logout', signOut);



module.exports = router;