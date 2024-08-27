const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./models/user.js');
const Class = require('./models/class.js');

dotenv.config();

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
];

const seed = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('MongoDB Connected');

        // check if admin user exists
        const admin = await User.findOne({ role: 'admin' });
        if (admin) {
            console.log('Admin user already exists');
        } else {
            // create admin user
            const user = new User({
                name: 'Admin',
                email: 'admin@fighttrack.com',
                password: 'admin', // This will be hashed by the pre-save hook in the schema
                role: 'admin',
                joinDate: new Date(),
                membershipType: 'premium',
                classesAttended: 9000
            });
            await user.save();
            console.log('Admin user created');
        }

        // seed classes
        await Class.insertMany(classes);
        console.log('Classes seeded');

    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        mongoose.disconnect();
    }
};

seed();