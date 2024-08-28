const Booking = require('../models/booking.js');
const Class = require('../models/class.js');
const Payment = require('../models/payment.js');
const User = require('../models/user.js');

// Get dashboard data for a user
// @route GET /api/dashboard
// @access Private
exports.getDashboardData = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('class user');
        const classes = await Class.find();
        const payments = await Payment.find();
        const users = await User.find().select('-password');

        // Calculate metrics
        const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0);
        const classOccupancy = classes.map(c => ({
            title: c.title,
            occupancyRate: (c.currentAttendees / c.maxAttendees) * 100
        }));

        res.json({
            bookings,
            classes,
            payments,
            users,
            totalRevenue,
            classOccupancy
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// TASK: Find out what will be displayed on the dashboard page