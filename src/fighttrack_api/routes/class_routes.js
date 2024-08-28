const express = require('express');
const router = express.Router();
const { createClass, updateClass, deleteClass, getClasses, getClassById, markAttendance, addAttendee, removeAttendee } = require('../controllers/class_controller.js');
const { verify, isAdmin } = require('../middleware/auth_middleware');

router.post('/', verify, isAdmin, createClass);
router.put('/:id', verify, isAdmin, updateClass);
router.delete('/:id', verify, isAdmin, deleteClass);
router.get('/:id', verify, getClassById);
router.get('/', verify, getClasses);
router.post('/:id/attendance', verify, isAdmin, markAttendance);
router.post('/:id/attendees', verify, isAdmin, addAttendee);
router.delete('/:id/attendees/:userId', verify, isAdmin, removeAttendee);

module.exports = router;
