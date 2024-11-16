// import React from 'react'

// export default function page() {
//     return (
//         <div>
//             Welcome to home page
//         </div>
//     )
// }


import React from "react";
import MentorProfileCard from "./../../components/MentorProfileCard"

const page: React.FC = () => {
    // Sample data for mentors (you can fetch this data from an API or database)
    const mentors = [
        {
            imageSrc: "https://via.placeholder.com/100",
            name: "John Doe",
            jobTitle: "Senior Developer",
            jobDomain: "ML/AI",
            shortDesc: "Experienced mentor in Machine Learning and Artificial Intelligence",
        },
        {
            imageSrc: "https://via.placeholder.com/100",
            name: "Jane Smith",
            jobTitle: "Data Scientist",
            jobDomain: "ML/AI",
            shortDesc: "Passionate about helping students learn Data Science.",
        },
        {
            imageSrc: "https://via.placeholder.com/100",
            name: "Sam Wilson",
            jobTitle: "AI Specialist",
            jobDomain: "AI",
            shortDesc: "Specializing in AI research and mentoring future innovators.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto mt-8">
            {/* Page Heading */}
            {/* <h1 className="text-3xl font-bold text-center mb-8">Meet Our Mentors</h1> */}
            {/* Mentor Profile Cards as Facebook-like Posts */}
            <div className="space-y-6">
                {mentors.map((mentor, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            {/* Mentor Image */}
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                <img src={mentor.imageSrc} alt={mentor.name} className="object-cover w-full h-full" />
                            </div>

                            {/* Mentor Name and Job Domain */}
                            <div>
                                <div className="font-semibold text-green-600">{mentor.name}</div>
                                <div className="text-sm text-gray-600">{mentor.jobTitle} at {mentor.jobDomain}</div>
                            </div>
                        </div>

                        {/* Short Description */}
                        <div className="text-sm text-gray-500 mb-4">{mentor.shortDesc}</div>

                        {/* Buttons */}
                        <div className="flex space-x-4">
                            <a
                                href="https://www.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white py-2 px-6 rounded-full text-sm hover:bg-blue-600"
                            >
                                Job at Google
                            </a>
                            <button className="bg-green-500 text-white py-2 px-8 rounded-full text-sm hover:bg-green-600">
                                Join as Mentor
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
