

"use client";
import React from "react";
import {
    MapPin,
    Mail,
    BookOpen,
    CheckCircle,
    Users,
} from "lucide-react";
import Navbar from "@/components/navbar";

// Updated courses array with mentor information
const courses = [
    {
        title: "Frontend React Development",
        status: "Running",
        completion: 40,
        icon: <BookOpen className="w-6 h-6 text-blue-500" />,
        mentor: {
            name: "Sarah Williams",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
        },
    },
    {
        title: "Advanced CSS & Animations",
        status: "Completed",
        completion: 100,
        icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        mentor: {
            name: "David Smith",
            photo: "https://randomuser.me/api/portraits/men/30.jpg",
        },
    },
    {
        title: "UI/UX Design Fundamentals",
        status: "Running",
        completion: 10,
        icon: <BookOpen className="w-6 h-6 text-pink-500" />,
        mentor: {
            name: "Emily Johnson",
            photo: "https://randomuser.me/api/portraits/women/55.jpg",
        },
    },
    {
        title: "Full-Stack Development with MERN",
        status: "Running",
        completion: 60,
        icon: <BookOpen className="w-6 h-6 text-green-500" />,
        mentor: {
            name: "Michael Brown",
            photo: "https://randomuser.me/api/portraits/men/21.jpg",
        },
    },
];

const StudentDashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-50 mt-44 p-8">
                <div className="max-w-[95%] mx-auto bg-white rounded-xl shadow-lg p-6">
                    {/* Student Information Section */}
                    <div className="flex items-center gap-6 mb-6">
                        <div className="flex-shrink-0">
                            <div className="rounded-full overflow-hidden w-[150px] h-[150px] border-4 border-green-500">
                                <img
                                    src="https://randomuser.me/api/portraits/men/23.jpg"
                                    alt="Student Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                <span className="text-sm text-gray-600">Online</span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-green-500">Alex Johnson</h1>
                            <div className="text-gray-600 flex items-center gap-2 mt-2">
                                <MapPin className="w-5 h-5 text-green-500" />
                                <span>123 Learning Avenue, Education City</span>
                            </div>
                            <div className="text-gray-600 flex items-center gap-2 mt-1">
                                <Mail className="w-5 h-5 text-green-500" />
                                <span>alex.johnson@learningmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Joined Courses Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-green-500 mb-4">
                            Joined Courses
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courses.map((course, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                                >
                                    {/* Course Title and Icon */}
                                    <div className="flex items-center gap-2 mb-3">
                                        {course.icon}
                                        <h3 className="text-xl font-semibold text-green-700">
                                            {course.title}
                                        </h3>
                                    </div>

                                    {/* Course Status */}
                                    <p
                                        className={`text-sm w-20% font-bold px-2 py-1 rounded mb-3 ${course.status === "Completed"
                                            ? "bg-green-100 text-green-500"
                                            : "bg-blue-100 text-blue-500"
                                            }`}
                                    >
                                        {course.status}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="text-sm text-gray-600 mb-2">
                                        <div className="flex justify-between items-center mb-1">
                                            <span>Completion:</span>
                                            <span>{course.completion}%</span>
                                        </div>
                                        <div className="w-full bg-gray-300 rounded-full h-2">
                                            <div
                                                className={`h-full rounded-full ${course.status === "Completed"
                                                    ? "bg-green-500"
                                                    : "bg-blue-500"
                                                    }`}
                                                style={{ width: `${course.completion}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Mentor Information */}
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300">
                                            <img
                                                src={course.mentor.photo}
                                                alt={course.mentor.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <span className="text-sm text-gray-700">
                                            Mentor:{" "}
                                            <span className="font-semibold text-green-700">
                                                {course.mentor.name}
                                            </span>
                                        </span>
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        className={`w-full mt-4 py-2 rounded-lg text-white ${course.status === "Completed"
                                            ? "bg-gray-500 cursor-not-allowed"
                                            : "bg-green-500 hover:bg-green-600"
                                            }`}
                                        disabled={course.status === "Completed"}
                                    >
                                        {course.status === "Completed" ? "View Details" : "Continue"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;

