const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact_controller.js');

router.post('/contact', contactController.sendContactEmail);

module.exports = router;