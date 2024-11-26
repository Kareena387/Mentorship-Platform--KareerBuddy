
"use client";
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";  // Optional: can also use localStorage
import { User } from 'lucide-react';
import SearchBarWithModal from '@/app/SearchMentor/page';


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown visibility
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("token");
        setIsLoggedIn(true)  // Or use localStorage.getItem("token")
    }, []);





    const handleLoginClick = () => {
        router.push("/Login");
    };

    const handleSignupClick = () => {
        router.push("/Signup");
    };

    const handleProfileClick = () => {
        router.push("/Profile");
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token");  // Remove the token from localStorage
        router.push("/Login");
        // router.push("/");
    };

    return (
        <nav className="bg-white shadow-md px-4 py-1 fixed top-0 left-0 right-0 z-10">
            <WelcomeBar />
            <div className="flex items-center justify-between mx-auto">
                <a href="/">

                    <div className="text-xl font-bold text-green-700">KareerBuddy</div>

                </a>    {/* Logo on the left */}
                <SearchBarWithModal />
                {/* Links on the right */}
                <div className="flex space-x-6">
                    <a href="" className="text-green-700 hover:text-green-500">Mentor</a>
                    <a href="/Student" className="text-green-700 hover:text-green-500">Student</a>
                    <a href="#" className="text-green-700 hover:text-green-500">Events</a>
                    <a href="#" className="text-green-700 hover:text-green-500">Careers</a>
                    <a href="#" className="text-green-700 hover:text-green-500">Blogs</a>
                </div>

                {/* Login/Profile Dropdown */}
                <div className="relative">
                    <button
                        className="text-green-700 bg-gray-200  p-2 mr-4 rounded-full hover:text-green-500"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {isLoggedIn ? <User /> : "Login"}
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white z-50 shadow-lg rounded-md">
                            {isLoggedIn ? (
                                <>
                                    <button
                                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                                        onClick={handleProfileClick}
                                    >
                                        View Profile
                                    </button>
                                    <button
                                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                                        onClick={handleLogoutClick}
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                                        onClick={handleLoginClick}
                                    >
                                        Login
                                    </button>
                                    <button
                                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                                        onClick={handleSignupClick}
                                    >
                                        Signup
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <CategoryCards />
        </nav>
    );
};

export default Navbar;


const WelcomeBar = () => {
    const messages = [
        "Welcome to KareerBuddy! Ready to connect with an inspiring mentor?",
        "Excited to meet your mentor? Welcome to KareerBuddy, where opportunities await.",
        "Join KareerBuddy, where students meet mentors for growth and success."
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(0); // Reset the progress
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 5000);

        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + (100 / 70); // 100% over 3 seconds
                }
                return prevProgress;
            });
        }, 100);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, []);

    return (
        <div className="relative w-full h-10 mb-2">
            <div className="bg-green-600 text-white w-full h-full flex justify-center items-center text-center text-base rounded">
                {messages[currentMessageIndex]}
            </div>
            <div
                className="absolute left-0 bg-yellow-500 h-1"
                style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
            />
        </div>
    );
};

const categories = [
    { name: 'Frontend', color: 'bg-blue-600' },
    { name: 'Backend', color: 'bg-red-600' },
    { name: 'ML/AI', color: 'bg-yellow-600' },
    { name: 'UI/UX', color: 'bg-purple-600' },
    { name: 'Digital Marketing', color: 'bg-green-600' },
    { name: 'Data Science', color: 'bg-teal-600' },
    { name: 'Cloud Computing', color: 'bg-indigo-600' },
    { name: 'Cybersecurity', color: 'bg-gray-600' },
    { name: 'Blockchain', color: 'bg-pink-600' },
    { name: 'Game Development', color: 'bg-orange-600' },
    { name: 'Product Management', color: 'bg-yellow-500' },
    { name: 'DevOps', color: 'bg-blue-500' },
    { name: 'Software Testing', color: 'bg-cyan-600' },
    { name: 'Artificial Intelligence', color: 'bg-purple-700' },
    { name: 'Business Analytics', color: 'bg-green-500' },
];

const CategoryCards = () => {
    return (
        <div className="overflow-hidden relative">
            <div className="flex animate-scroll whitespace-nowrap">
                {categories.map((category, index) => (
                    <div key={index} className={`flex items-center justify-center text-white p-1 rounded m-1`}>
                        <h3 className="text-base text-gray-700 hover:text-green-600 font-normal border border-1 hover:border-green-600 rounded-md m-2 p-2">
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
