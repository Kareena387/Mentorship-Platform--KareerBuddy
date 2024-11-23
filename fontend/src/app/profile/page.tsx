
"use client";
import React from "react";
import {
    Mail,
    MapPin,
    Briefcase,
    Calendar,
    Book,
    Facebook,
    Twitter,
    Linkedin,
    ChevronLeft,
    User,
    Code,
    Paintbrush,
    Terminal,
    Users,
} from "lucide-react";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";

//  Course Data with icons and active students
const courses = [
    {
        title: "Frontend React Development",
        category: "Beginner",
        description:
            "Master the basics of React, build interactive UIs, and create your first web application.",
        price: "$20 for 20 days",
        duration: "2 hours/day",
        level: "Beginner",
        bgColor: "bg-blue-100",
        icon: <Code className="w-6 h-6 text-blue-500" />,
        students: "224+",
    },
    {
        title: "Advanced CSS & Animations",
        category: "Mid Level",
        description:
            "Take your CSS skills to the next level by learning complex animations, flexbox, and grid layouts.",
        price: "$30 for 15 days",
        duration: "2 hours/day",
        level: "Intermediate",
        bgColor: "bg-purple-100",
        icon: <Paintbrush className="w-6 h-6 text-purple-500" />,
        students: "543+",
    },
    {
        title: "UI/UX Design Fundamentals",
        category: "Beginner",
        description:
            "Learn the core principles of UI/UX design to create user-friendly and visually appealing interfaces.",
        price: "$25 for 10 days",
        duration: "1.5 hours/day",
        level: "Beginner",
        bgColor: "bg-pink-100",
        icon: <Paintbrush className="w-6 h-6 text-pink-500" />,
        students: "312+",
    },
    {
        title: "Full-Stack Development with MERN",
        category: "Advanced",
        description:
            "Become a full-stack developer by mastering MongoDB, Express, React, and Node.js.",
        price: "$50 for 30 days",
        duration: "3 hours/day",
        level: "Advanced",
        bgColor: "bg-green-100",
        icon: <Terminal className="w-6 h-6 text-green-500" />,
        students: "156+",
    },
];

const MentorProfile = () => {
    const router = useRouter();
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-50 p-8">
                <div className="mx-auto bg-white rounded-xl mt-40 shadow-lg">
                    <div className="p-6">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-shrink-0">
                                <div className="rounded-full overflow-hidden w-[200px] h-[200px] border-4 border-green-500">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/4.jpg"
                                        alt="Mentor Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                    <span className="text-sm text-gray-600">Online</span>
                                </div>
                                <div className="flex gap-4 justify-center text-green-500">
                                    <Facebook className="w-6 h-6 hover:text-green-600" />
                                    <Twitter className="w-6 h-6 hover:text-green-600" />
                                    <Linkedin className="w-6 h-6 hover:text-green-600" />
                                </div>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between">
                                    <h1 className="text-2xl font-bold text-green-500 mb-4">
                                        Dr. Sarah Johnson
                                    </h1>
                                    <button
                                        onClick={() => router.back()}
                                        className="p-1 rounded-md hover:shadow-gray-300 shadow"
                                    >
                                        <ChevronLeft className="w-6 hover:text-green-700 h-6" />
                                    </button>
                                </div>
                                <div className="mt-4">

                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-green-500" />
                                        <span>123 Education Street, Learning City, LC 12345</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Mail className="w-5 h-5 text-green-500" />
                                        <span>sarah.johnson@education.com</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-green-500" />
                                        <span>Senior Educational Consultant</span>
                                    </div>
                                    {/*  */}
                                    <h2 className="font-semibold text-green-500 mb-2">Work Experience</h2>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>10+ years in Educational Psychology</li>
                                        <li>Former Department Head at Learning University</li>
                                        <li>Published Author in Educational Development</li>
                                    </ul>
                                </div>

                                {/* about  */}
                                <div className="mt-4">
                                    <h2 className="font-semibold text-green-500 mb-2">About</h2>
                                    <p className="text-gray-600">
                                        Dedicated educator with a passion for helping students reach their full potential.
                                        Specializing in personalized learning and cognitive development strategies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Courses Section */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold text-green-500 mb-4">Courses Offered</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {courses.map((course, index) => (
                                    <div
                                        key={index}
                                        className={` p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform relative`}
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            {course.icon}
                                            <h3 className="text-xl font-semibold text-green-700">{course.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className={`text-sm text-green-500 font-bold px-2 py-1 rounded ${course.bgColor} `}>
                                                {course.level}
                                            </span>
                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                                <Users className="w-4 h-4 text-green-500" />
                                                {course.students}
                                            </div>
                                        </div>
                                        <div className="text-sm mb-2">
                                            <span className="font-bold">Duration:</span> {course.duration}
                                        </div>
                                        <div className="text-sm mb-4">
                                            <span className="font-bold">Price:</span> {course.price}
                                        </div>
                                        <button
                                            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                                        >
                                            Join Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorProfile;
