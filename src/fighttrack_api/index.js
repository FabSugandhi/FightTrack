const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(session({
    secret: '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',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// test route
app.get('/', async (_req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        const catImageUrl = response.data[0].url;
        res.send(`
            <h1>Hello World, the time is currently ${currentTime} somewhere</h1>
            <img src="${catImageUrl}" alt="Random Cat" style="max-width: 100%; height: auto;">
        `);
    } catch (error) {
        res.send(`
            <h1>Hello World, the time is currently ${currentTime} somewhere</h1>
            <p>Failed to fetch cat image</p>
        `);
    }
});

app.use('/api/auth', require('./routes/auth_routes.js'));
app.use('/api/classes', require('./routes/class_routes'));
app.use('/api/bookings', require('./routes/booking_routes'));
app.use('/api/dashboard', require('./routes/dashboard_routes.js'));
app.use('/api/payments', require('./routes/payment_routes.js'));
app.use('/api/contact', require('./routes/contact_routes.js'));

// start the server
app.listen(process.env.PORT || 5001, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('Server running');
    }
});
