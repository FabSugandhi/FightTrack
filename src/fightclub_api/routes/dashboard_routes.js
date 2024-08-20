const express = require('express');
const router = express.Router();
const { getDashboardData } = require('../controllers/dashboard_controller.js');
const { protect } = require('../middleware/auth_middleware');

router.get('/', protect, getDashboardData);

module.exports = router;
