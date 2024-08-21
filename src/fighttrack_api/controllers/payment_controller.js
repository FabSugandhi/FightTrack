const Payment = require('../models/payment.js');

// Process a payment
// @route POST /api/payments
// @access Private
// @req.body { amount, packageType }
exports.processPayment = async (req, res) => {
    const { amount, packageType } = req.body;

    try {
        const payment = new Payment({
            user: req.user._id,
            amount,
            packageType,
        });

        const savedPayment = await payment.save();

        res.status(201).json(savedPayment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all payments for a user
// @route GET /api/payments
// @access Private
exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find({ user: req.user._id });

        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
