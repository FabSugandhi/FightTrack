const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/dashboard_controller.js');
const { verify } = require('../middleware/auth_middleware');

router.get('/', verify, getDashboardData);

module.exports = router;
