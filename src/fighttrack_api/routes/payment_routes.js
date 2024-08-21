const express = require('express');
const router = express.Router();
const { processPayment, getPayments } = require('../controllers/payment_controller.js');
const { verify } = require('../middleware/auth_middleware.js');

router.post('/', verify, processPayment);
router.get('/', verify, getPayments);

module.exports = router;
