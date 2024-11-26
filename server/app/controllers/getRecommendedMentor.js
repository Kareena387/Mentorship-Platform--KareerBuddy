const User = require('./../models/userModel'); // Import the User model

exports.getRecommendedMentor = async (req, res) => {
    const { courseName } = req.query; // Get the course name from query params
    try {
        if (!courseName) {
            return res.status(400).json({ message: "Course name is required" });
        }

        // Find mentors with expertise in the searched course/field
        const mentors = await User.find({
            role: 'mentor',
            interestedFields: { $regex: courseName, $options: 'i' }, // Case-insensitive search
        });

        // Simulate collaborative filtering:
        // Group mentors by the frequency of being chosen or their expertise overlap
        const recommendedMentors = mentors.sort((a, b) => {
            // Example sorting by working experience (you can replace this with a better logic)
            return b.workingExperience.localeCompare(a.workingExperience);
        });

        res.status(200).json({ recommendedMentors });
    } catch (error) {
        console.error("Error in getRecommendedMentor:", error);
        res.status(500).json({ message: "Error fetching recommended mentors" });
    }
};
