const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    schedule: {
        day: { type: String, required: true },
        time: { type: String, required: true },
    },
    maxAttendees: { type: Number, required: true },
    currentAttendees: { type: Number, default: 0 },
});

module.exports = mongoose.model('Class', ClassSchema);
