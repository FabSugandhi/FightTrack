const Booking = require('../models/booking.js');
const Class = require('../models/class.js');

// Book a class
// @route POST /api/bookings/book
// @access Private
// @req.body { classId }
exports.bookClass = async (req, res) => {
    const { classId } = req.body;

    try {
        const selectedClass = await Class.findById(classId);

        if (!selectedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }

        if (selectedClass.currentAttendees >= selectedClass.maxAttendees) {
            return res.status(400).json({ message: 'Class is full' });
        }

        // Check if a booking already exists for the user and class
        let booking = await Booking.findOne({ user: req.user._id, class: classId });

        if (booking) {
            // Update existing booking
            booking.status = 'booked';
            booking.bookingDate = new Date();
        } else {
            // Create new booking
            booking = new Booking({
                user: req.user._id,
                class: classId,
                status: 'booked',
                bookingDate: new Date(),
            });

            selectedClass.currentAttendees += 1;
            await selectedClass.save();
        }

        const savedBooking = await booking.save();

        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Cancel a booking
// @route PUT /api/bookings/cancel/:id
// @access Private
// @req.params { id }
exports.cancelBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await Booking.findById(id).populate('class');

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        if (booking.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        booking.status = 'cancelled';
        await booking.save();

        booking.class.currentAttendees -= 1;
        await booking.class.save();

        res.json({ message: 'Booking cancelled' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all bookings for a user
// @route GET /api/bookings
// @access Private
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user._id }).populate('class');

        if (bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found' });
        } else {
            res.json(bookings);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all bookings for a specific class
// @route GET /api/bookings/class/:classId
// @access Private
exports.getBookingsByClassId = async (req, res) => {
    const { classId } = req.params;

    try {
        const bookings = await Booking.find({ class: classId }).populate('user', 'name email');

        if (bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found for this class' });
        }

        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
