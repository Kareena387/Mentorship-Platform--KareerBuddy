// controllers/viewProfile.js
const User = require('../models/userModel'); // Import the User model

// Function to get profile data based on user role (student or mentor)
exports.viewProfile = async (req, res) => {
    try {
        const userId = req.params.userId; // Get userId from the URL parameter
        const user = await User.findById(userId); // Find user by ID

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Return the user data based on role (student or mentor)
        res.status(200).json({ message: "User profile fetched successfully", user });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error fetching user profile", error: error.message });
    }
};
