const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const e = require('express');
const jwt = require('jsonwebtoken');

// Register a new user
// @route POST /api/auth/register
// @access Public
// @req.body { name, email, password }
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ name, email, password });

        await user.save();

        const token = generateToken(user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token,
        });
    } catch (error) {
        console.error('Error registering user:', error); // Log the error
        res.status(500).json({ message: 'Server error' });
    }
};

// Login user
// @route POST /api/auth/login
// @access Public
// @req.body { email, password }
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get user profile
// @route GET /api/auth/profile
// @access Private
// @req.user { _id }
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update user profile
// @route PUT /api/auth/profile
// @access Private
// @req.body { name, email, password }
exports.updateProfile = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;

            if (password) {
                user.password = password;
            }

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: '1d',
    });
};