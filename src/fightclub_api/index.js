const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// test route
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/auth', require('./routes/auth_routes'));
// app.use('/api/classes', require('./routes/class_routes'));
// app.use('/api/bookings', require('./routes/booking_routes'));
// app.use('/api/payments', require('./routes/payment_routes'));
// app.use('/api/dashboard', require('./routes/dashboard_routes'));

app.listen(5001, err => {
    if (err) {
        console.error(err)
    } else {
        console.log('Server running')
    }
})
