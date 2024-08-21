const express = require('express');
const router = express.Router();
const { processPayment, getPayments } = require('../controllers/payment_controller.js');
const { protect } = require('../middleware/auth_middleware.js');

router.post('/', protect, processPayment);
router.get('/', protect, getPayments);

module.exports = router;
