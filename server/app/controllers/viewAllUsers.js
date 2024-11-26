
// controllers/viewAllUsers.js
const User = require('./../models/userModel');  // Correct path

// Your logic for fetching users
async function getAllStudents(req, res) {
    try {
        const students = await User.find({ role: 'student' });
        res.json(students);
    } catch (error) {
        res.status(500).send('Error fetching students');
    }
}

async function getAllMentors(req, res) {
    try {
        const mentors = await User.find({ role: 'mentor' });
        res.json(mentors);
    } catch (error) {
        res.status(500).send('Error fetching mentors');
    }
}

module.exports = { getAllStudents, getAllMentors };
