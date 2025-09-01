const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/coursesController');



router.get('/courses', ctrl.getCourses);          
router.get('/courses/:id', ctrl.getCourseById);    
router.post('/courses', ctrl.createCourse);       
router.put('/courses/:id', ctrl.updateCourse);    
router.delete('/courses/:id', ctrl.deleteCourse);  


module.exports = router;
