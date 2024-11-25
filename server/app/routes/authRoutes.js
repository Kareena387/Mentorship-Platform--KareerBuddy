const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { bulkUpload } = require('./../../app/controllers/bulkUpload')
const { getAllStudents, getAllMentors } = require('./../../app/controllers/viewAllUsers');
const { viewProfile } = require('./../../app/controllers/viewProfile');
// Import the viewProfile controller



router.post('/signup', signup);
router.post('/login', login);
router.post('/bulkUpload', bulkUpload);

router.get('/viewProfile/:userId', viewProfile);
// :userId is the URL parameter for the user's ID

// GET request to fetch all students
router.get('/students', getAllStudents);

// GET request to fetch all mentors
router.get('/mentors', getAllMentors);



module.exports = router;
