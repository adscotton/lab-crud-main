const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/studentController');

router.get('/students', ctrl.getStudents);
router.get('/students/:id', ctrl.getStudentById);
router.post('/students', ctrl.createStudent);
router.put('/students/:id', ctrl.updateStudent);
router.delete('/students/:id', ctrl.deleteStudent);

module.exports = router;