// components/Navbar.tsx

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-4 py-4">
            <WelcomeBar />
            <div className="flex items-center justify-between  mx-auto">

                {/* Logo on the left */}
                <div className="text-xl font-bold text-green-700">
                    KareerBuddy
                </div>

                {/* Search bar in the center */}
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-1/2">
                    <FaSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search for mentors, events, or blogs..."
                        className="w-full bg-transparent border-none outline-none text-gray-700"
                    />
                </div>

                {/* Links on the right */}
                <div className="flex space-x-6">
                    <a href="#" className="text-green-700 hover:text-green-500">Mentor</a>
                    <a href="#" className="text-green-700 hover:text-green-500">Events</a>
                    <a href="#" className="text-green-700 hover:text-green-500">Careers</a>
                    <a href="#" className="text-green-700 hover:text-green-500">Blogs</a>
                </div>
            </div>
            <CategoryCards />
        </nav>
    );
};

export default Navbar;


// components/WelcomeBar.tsx
const WelcomeBar = () => {
    return (
        <div className="bg-green-600 text-white py-2 text-center mb-2 text-sm rounded">
            Welcome student to KareerBuddy. Connect with a mentor.
        </div>
    );
};

// // components/CategoryCards.tsx

// const categories = [
//     { name: 'Frontend', color: 'bg-blue-600' },
//     { name: 'Backend', color: 'bg-red-600' },
//     { name: 'ML/AI', color: 'bg-yellow-600' },
//     { name: 'UI/UX', color: 'bg-purple-600' },
//     { name: 'Digital Marketing', color: 'bg-green-600' },
// ];

// const CategoryCards = () => {
//     return (
//         <div className="flex mx-auto">
//             {categories.map((category, index) => (
//                 <div key={index} className={`flex  items-center justify-center text-white p-1 rounded m-1 `}>
//                     <h3 className="text-base text-gray-700 hover:text-green-600 font-normal border border-1 hover:border-green-600 rounded-md m-2 p-2">{category.name}</h3>
//                 </div>
//             ))}
//         </div>
//     );
// };


// components/CategoryCards.tsx

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
];

const CategoryCards = () => {
    return (
        <div className="overflow-hidden relative">
            {/* Scrollable container */}
            <div className="flex animate-scroll whitespace-nowrap">

                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center text-white p-1 rounded m-1`}
                    >
                        <h3 className="text-base text-gray-700 hover:text-green-600 font-normal border border-1 hover:border-green-600 rounded-md m-2 p-2">
                            {category.name}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};




