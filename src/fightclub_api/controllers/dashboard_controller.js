const Booking = require('../models/Booking');
const Class = require('../models/Class');
// const Payment = require('../models/Payment');

// Get dashboard data for a user
// @route GET /api/dashboard
// @access Private
exports.getDashboardData = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user._id }).populate('class');
        const classes = await Class.find();
        // const payments = await Payment.find({ user: req.user._id });

        res.json({
            bookings,
            payments,
            classes,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// TASK: Find out what will be displayed on the dashboard page