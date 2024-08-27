const express = require('express');
const router = express.Router();
const { register, login, getProfile, updateProfile, getAllUsers } = require('../controllers/auth_controller.js');
const { verify, registerValidation } = require('../middleware/auth_middleware.js');

router.post('/register', registerValidation, register);
router.post('/login', login);
router.get('/profile', verify, getProfile);
router.put('/profile', verify, updateProfile);
router.get('/users', verify, getAllUsers);
router.get('/oauth2callback', oauth2callback);

module.exports = router;

