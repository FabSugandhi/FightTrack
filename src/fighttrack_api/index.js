const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

app.use(cors());
const app = express();

app.use(express.json());

// test route
app.get('/', (_req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.send(`<h1>Hello World, the time is currently ${currentTime}<h1>`);
})

app.use('/api/auth', require('./routes/auth_routes.js'));
app.use('/api/classes', require('./routes/class_routes'));
app.use('/api/bookings', require('./routes/booking_routes'));
app.use('/api/dashboard', require('./routes/dashboard_routes.js'));
app.use('/api/payments', require('./routes/payment_routes.js'));

app.listen(5001, err => {
    if (err) {
        console.error(err)
    } else {
        console.log('Server running')
    }
})
