const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
    packageType: { type: String, enum: ['Day Pass', '6-month membership', 'Monthly membership'], required: true },
});

module.exports = mongoose.model('Payment', PaymentSchema);
