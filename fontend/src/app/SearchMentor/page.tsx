import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

const SearchBarWithModal = () => {
    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [mentors, setMentors] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Function to handle modal opening
    const handleOpenModal = () => setIsModalOpen(true);

    // Function to handle modal closing
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSearchQuery("");
        setMentors([]);
        setError("");
    };

    // Function to handle search
    const handleSearch = async () => {
        if (!searchQuery.trim()) return;

        setIsLoading(true);
        setError("");

        try {
            const response = await axios.get(
                `http://localhost:5000/api/auth/getRecommendedMentor?courseName=${searchQuery}`
            );
            setMentors(response.data.recommendedMentors || []);
        } catch (err) {
            setError("Failed to fetch mentors. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {/* Search Bar */}
            <div
                className="flex items-center w-80 bg-gray-100 px-4 py-2 rounded-full  cursor-pointer"
                onClick={handleOpenModal}
            >
                <FaSearch className="text-gray-500  mr-2" />
                <input
                    type="text"
                    placeholder="Search for mentors from Course Name"
                    className="w-full bg-transparent border-none outline-none text-gray-700 pointer-events-none"
                    readOnly
                />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white  top-10 rounded-lg shadow-lg p-6 w-3/4 max-h-[80vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Search Mentors</h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Search Input */}
                        <div className="flex items-center gap-2 mb-4">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Enter course name (e.g., Computer)"
                                className="flex-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                                Search
                            </button>
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-500 mb-4">{error}</p>}

                        {/* Loading State */}
                        {isLoading && <p className="text-gray-500">Loading...</p>}

                        {/* Search Results */}
                        {!isLoading && mentors.length > 0 && (
                            <ul className="space-y-4">
                                {mentors.map((mentor) => (
                                    <li
                                        key={mentor._id}
                                        className="flex items-center gap-4 p-4 border rounded-lg shadow-md"
                                    >
                                        <img
                                            src={mentor.profilePicture}
                                            alt={mentor.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold">{mentor.name}</h3>
                                            <p className="text-gray-500">{mentor.jobTitle}</p>
                                        </div>
                                        <button onClick={() => { router.push(`/mentor/${encodeURIComponent(mentor._id)}`); }} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">

                                            View Profile
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* No Results Found */}
                        {!isLoading && mentors.length === 0 && searchQuery && !error && (
                            <p className="text-gray-500">No mentors found for "{searchQuery}".</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBarWithModal;
