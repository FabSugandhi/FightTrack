const express = require('express');
const router = express.Router();
const { createClass, updateClass, deleteClass, getClasses } = require('../controllers/class_controller.js');
const { verify, isAdmin } = require('../middleware/auth_middleware');

router.post('/', verify, isAdmin, createClass);
router.put('/:id', verify, isAdmin, updateClass);
router.delete('/:id', verify, isAdmin, deleteClass);
router.get('/', verify, getClasses);

module.exports = router;