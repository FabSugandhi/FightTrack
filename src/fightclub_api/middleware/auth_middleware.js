const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

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

module.exports = { verify, isAdmin };
