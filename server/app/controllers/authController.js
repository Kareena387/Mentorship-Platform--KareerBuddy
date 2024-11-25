const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
    try {
        const { name, email, password, role, phone, dob, college, interestedFields, officeName, jobTitle, workingExperience } = req.body;

        // Validate that all required fields are provided
        if (!name || !email || !password || !role || !phone || !dob) {
            return res.status(400).json({ message: 'All required fields (name, email, password, role, phone, dob) must be provided.' });
        }

        // Validate role
        if (!['student', 'mentor'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role. Role must be "student" or "mentor".' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
            phone,
            dob,
            college,
            interestedFields,
            officeName,
            jobTitle,
            workingExperience
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ message: 'User created successfully.' });

    } catch (err) {
        // Handle errors
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, user: { id: user._id, name: user.name, role: user.role } });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};


