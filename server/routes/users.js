const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');

router.get('/', userCtrl.getAllUsers);
router.post('/signin', userCtrl.signIn);
router.post('/signup', userCtrl.signUp);

module.exports = router;
