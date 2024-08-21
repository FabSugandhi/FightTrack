const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' },
    bookingDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
