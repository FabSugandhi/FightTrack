const Class = require('../models/class.js');
const User = require('../models/user.js');
const Booking = require('../models/booking.js');

// Create a new class
// @route POST /api/classes
// @access Private/Admin
// @req.body { title, description, schedule, maxAttendees }
exports.createClass = async (req, res) => {
    const { title, description, schedule, maxAttendees } = req.body;

    try {
        const newClass = new Class({
            title,
            description,
            schedule,
            maxAttendees,
        });

        const savedClass = await newClass.save();

        res.status(201).json(savedClass);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update class information
// @route PUT /api/classes/:id
// @access Private/Admin
// @req.params { id }
// @req.body { title, description, schedule, maxAttendees}
exports.updateClass = async (req, res) => {
    const { id } = req.params;
    const { title, description, schedule, maxAttendees} = req.body;

    try {
        const updatedClass = await Class.findByIdAndUpdate(
            id,
            { title, description, schedule, maxAttendees},
            { new: true }
        );

        if (!updatedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }

        res.json(updatedClass);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a class
// @route DELETE /api/classes/:id
// @access Private/Admin
// @req.params { id }
exports.deleteClass = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedClass = await Class.findByIdAndDelete(id);

        if (!deletedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }

        res.json({ message: 'Class deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a class by ID
// @route GET /api/classes/:id
// @access Private
// @req.params { id }
exports.getClassById = async (req, res) => {
    const { id } = req.params;

    try {
        const foundClass = await Class.findById(id);

        if (!foundClass) {
            return res.status(404).json({ message: 'Class not found' });
        }

        res.json(foundClass);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all classes
// @route GET /api/classes
// @access Private
exports.getClasses = async (req, res) => {
    try {
        const classes = await Class.find();

        if (classes.length === 0) {
            return res.status(404).json({ message: 'No classes found' });
        } else {
            res.json(classes);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all bookings for a specific class
// @route GET /api/classes/:id/bookings
// @access Private/Admin
// @req.params { id }
exports.getClassBookings = async (req, res) => {
    const { id } = req.params;

    try {
        const bookings = await Booking.find({ class: id })
            .populate('user', 'name email membershipType')
            .populate('class', 'title schedule');

        if (bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found for this class' });
        }

        const formattedBookings = bookings.map(booking => ({
            id: booking._id,
            userName: booking.user.name,
            userEmail: booking.user.email,
            membershipType: booking.user.membershipType,
            className: booking.class.title,
        }));

        res.json(formattedBookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// add an attendee to a class (for walk-ins or on-the-spot additions)
exports.addAttendee = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    try {
        const classObj = await Class.findById(id);
        if (!classObj) {
            return res.status(404).json({ message: 'Class not found' });
        }

        if (classObj.currentAttendees >= classObj.maxAttendees) {
            return res.status(400).json({ message: 'Class is full' });
        }

        const booking = new Booking({
            user: userId,
            class: id,
            status: 'booked',
        });

        await booking.save();
        classObj.currentAttendees += 1;
        await classObj.save();

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// remove an attendee from a class (mark as not present)
exports.removeAttendee = async (req, res) => {
    const { id, userId } = req.params;

    try {
        const booking = await Booking.findOneAndUpdate(
            { class: id, user: userId, status: 'booked' },
            { status: 'cancelled' },
            { new: true }
        );

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        const classObj = await Class.findById(id);
        classObj.currentAttendees -= 1;
        await classObj.save();

        res.json({ message: 'Attendee removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Mark attendance for a user in a class
// @route POST /api/classes/:id/attendance
// @access Private/Admin
// @req.params { id } - class id
// @req.body { userId }
exports.markAttendance = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    try {
        const booking = await Booking.findOne({ class: id, user: userId, status: 'booked' });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found or already cancelled' });
        }

        booking.status = 'attended';
        await booking.save();

        const user = await User.findById(userId);
        user.classesAttended += 1;
        await user.save();

        res.json({ message: 'Attendance marked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
