const express = require('express');
const router = express.Router();
const { register, login, getProfile, updateProfile } = require('../controllers/auth_controller.js');
const { verify } = require('../middleware/auth_middleware.js');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', verify, getProfile);
router.put('/profile', verify, updateProfile);

module.exports = router;

