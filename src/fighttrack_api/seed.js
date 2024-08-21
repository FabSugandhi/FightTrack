const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/user.js');

dotenv.config();

// seed an admin user
const seed = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('MongoDB Connected');

        // check if admin user exists
        const admin = await User.findOne({ role: 'admin' });
        if (admin) {
            console.log('Admin user already exists');
            return;
        } else {
            // create admin user
            const user = new User({
                name: 'Admin',
                email: 'admin@fighttrack.com',
                password: 'admin', // This will be hashed by the pre-save hook in the schema
                role: 'admin',
            });
            await user.save();
            console.log('Admin user created');
        }
    } catch (error) {
        console.error('Error seeding admin user:', error);
    } finally {
        mongoose.disconnect();
    }
};

seed();