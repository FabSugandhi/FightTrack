const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const { check, validationResult } = require('express-validator');

const verify = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorised' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorised, no token' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Not authorised as admin' });
    }
};

// TODO: Add better validation
const registerValidation = [
    check('name')
        .matches(/^[A-Za-z\s]+$/).withMessage('Name must contain only letters')
        .not().isEmpty().withMessage('Name is required'),
    check('email')
        .isEmail().withMessage('Please include a valid email'),
    check('password')
        .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

app.use(session({
    secret: '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',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

module.exports = { verify, isAdmin, registerValidation };
