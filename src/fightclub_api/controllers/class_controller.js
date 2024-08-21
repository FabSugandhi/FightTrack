const Class = require('../models/class.js');

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
