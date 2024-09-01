const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('../models/user.js');
const Class = require('../models/class.js');
const Booking = require('../models/booking.js');

dotenv.config({ path: '.env.test' });

const classes = [
    {
        title: 'CardioBox',
        description: 'High-intensity cardio boxing session.',
        schedule: {
            day: 'Monday, Apr 15 2024',
            time: '7:00 pm AEST (45m)',
        },
        maxAttendees: 20,
        currentAttendees: 18,
    },
    {
        title: 'Fighters Academy',
        description: 'Advanced techniques for competitive fighters.',
        schedule: {
            day: 'Tuesday, Apr 23 2024',
            time: '6:00 pm AEST (1h)',
        },
        maxAttendees: 15,
        currentAttendees: 15,
    },
    {
        title: 'Kids Boxing',
        description: 'Fun and engaging boxing classes for kids.',
        schedule: {
            day: 'Wednesday, Apr 24 2024',
            time: '4:00 pm AEST (30m)',
        },
        maxAttendees: 10,
        currentAttendees: 9,
    },
    {
        title: 'Open Gym Pass',
        description: 'Access to the gym for personal workouts.',
        schedule: {
            day: 'Friday, Apr 26 2024',
            time: '6:00 pm AEST (45m)',
        },
        maxAttendees: 50,
        currentAttendees: 45,
    },
    // August 2024 classes
    {
        title: 'CardioBox',
        description: 'High-intensity cardio boxing session.',
        schedule: {
            day: 'Monday, Aug 12 2024',
            time: '7:00 pm AEST (45m)',
        },
        maxAttendees: 20,
        currentAttendees: 18,
    },
    {
        title: 'Fighters Academy',
        description: 'Advanced techniques for competitive fighters.',
        schedule: {
            day: 'Tuesday, Aug 20 2024',
            time: '6:00 pm AEST (1h)',
        },
        maxAttendees: 15,
        currentAttendees: 15,
    },
    {
        title: 'Kids Boxing',
        description: 'Fun and engaging boxing classes for kids.',
        schedule: {
            day: 'Wednesday, Aug 21 2024',
            time: '4:00 pm AEST (30m)',
        },
        maxAttendees: 10,
        currentAttendees: 9,
    },
    {
        title: 'Open Gym Pass',
        description: 'Access to the gym for personal workouts.',
        schedule: {
            day: 'Friday, Aug 23 2024',
            time: '6:00 pm AEST (45m)',
        },
        maxAttendees: 50,
        currentAttendees: 45,
    },
    // September 2024 classes
    {
        title: 'CardioBox',
        description: 'High-intensity cardio boxing session.',
        schedule: {
            day: 'Monday, Sep 9 2024',
            time: '7:00 pm AEST (45m)',
        },
        maxAttendees: 20,
        currentAttendees: 18,
    },
    {
        title: 'Fighters Academy',
        description: 'Advanced techniques for competitive fighters.',
        schedule: {
            day: 'Tuesday, Sep 17 2024',
            time: '6:00 pm AEST (1h)',
        },
        maxAttendees: 15,
        currentAttendees: 15,
    },
    {
        title: 'Kids Boxing',
        description: 'Fun and engaging boxing classes for kids.',
        schedule: {
            day: 'Wednesday, Sep 18 2024',
            time: '4:00 pm AEST (30m)',
        },
        maxAttendees: 10,
        currentAttendees: 9,
    },
    {
        title: 'Open Gym Pass',
        description: 'Access to the gym for personal workouts.',
        schedule: {
            day: 'Friday, Sep 20 2024',
            time: '6:00 pm AEST (45m)',
        },
        maxAttendees: 50,
        currentAttendees: 45,
    },
];

const seed = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('MongoDB Connected');

        // Create admin user
        const adminUser = new User({
            name: 'Admin',
            email: 'admin@fighttrack.com',
            password: 'admin',
            role: 'admin',
            joinDate: new Date(),
            membershipType: 'premium',
            classesAttended: 9000
        });

        // Create test user
        const testUser = new User({
            name: 'Test User',
            email: 'test@gmail.com',
            password: 'thisisatest',
            role: 'member',
            joinDate: new Date(),
            membershipType: 'free',
            classesAttended: 0
        });

        // Seed classes
        await Class.deleteMany({});
        const seededClasses = await Class.insertMany(classes);
        console.log('Classes seeded');

        // Seed users
        await User.deleteMany({});
        const savedAdminUser = await adminUser.save();
        const savedTestUser = await testUser.save();
        console.log('Users seeded');

        // Create bookings for the test user
        const bookings = seededClasses.map(cls => ({
            user: savedTestUser._id,
            class: cls._id,
            status: 'booked',
            bookingDate: new Date()
        }));

        await Booking.deleteMany({});
        await Booking.insertMany(bookings);
        console.log('Bookings seeded');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        mongoose.disconnect();
    }
};

seed();

module.exports = seed;