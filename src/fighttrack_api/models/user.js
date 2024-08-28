const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['member', 'admin'], default: 'member' },
    joinDate: { type: Date, default: Date.now },
    membershipType: { type: String, default: 'free' },
    classesAttended: { type: Number, default: 0 }
});

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Check if model is already compiled from "seed.js"
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);