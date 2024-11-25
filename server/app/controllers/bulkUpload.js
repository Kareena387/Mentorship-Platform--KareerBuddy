

// controllers/bulkUpload.js
const User = require('./../models/userModel'); // Import the User model

exports.bulkUpload = async (req, res) => {
    try {
        const users = req.body; // Array of mentor and student data

        if (!Array.isArray(users)) {
            return res.status(400).json({ message: "Invalid input format, expected an array of users" });
        }

        const result = await User.insertMany(users); // Insert multiple users into the database
        res.status(201).json({ message: "Users added successfully", result });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error uploading users", error: error.message });
    }
};
