<<<<<<< HEAD
=======

>>>>>>> 38adc6d5eed44e57b237a02d8df3e95c25ccc280
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'mentor'], required: true },
<<<<<<< HEAD
=======
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    college: { type: String },
    interestedFields: { type: String },
    officeName: { type: String },
    jobTitle: { type: String },
    workingExperience: { type: String },
<<<<<<< HEAD



    // Mentor Specific
    availability: { type: [String], enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
    experienceSummary: { type: String },
    certifications: { type: [String] },
    hourlyRate: { type: Number, min: 0 },
    skills: { type: [String] },
    ratings: [
        {
            studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, min: 1, max: 5 },
            review: { type: String }
        }
    ],

    // Student Specific
    learningGoals: { type: String },
    preferredMentorCriteria: { type: String },

    // Common Fields
    profilePicture: { type: String },
    location: { type: String },

    // Social/Networking
    linkedIn: { type: String },
    website: { type: String },
=======
>>>>>>> 38adc6d5eed44e57b237a02d8df3e95c25ccc280
>>>>>>> a8f735f11acf7e135b919a650a64a12653d4ab1d
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
