const express = require('express');
const router = express.Router();
const { bookClass, cancelBooking, getBookings, getBookingsByClassId } = require('../controllers/booking_controller.js');
const { verify } = require('../middleware/auth_middleware.js');

router.post('/book', verify, bookClass);
router.put('/cancel/:id', verify, cancelBooking);
router.get('/', verify, getBookings);
router.get('/class/:classId', verify, getBookingsByClassId);

module.exports = router;
