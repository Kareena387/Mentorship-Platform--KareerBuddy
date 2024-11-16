
"use client"
import React, { useState } from "react";

const Page: React.FC = () => {
    const [isStudent, setIsStudent] = useState<boolean | null>(null);
    const [isMentor, setIsMentor] = useState<boolean | null>();
    // Track if the user is a student or mentor
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        college: "",
        interestedFields: "",
        officeName: "",
        jobTitle: "",
        workingExperience: "",
    });

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle selecting whether the user is a student or mentor
    const handleRoleChange = (role: boolean) => {
        setIsStudent(role);
    };

    // Handle form submission (for now, we just log the data)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // You can replace this with an actual API call to submit the data
    };

    return (

        <div >

            <div className="  z-10 max-w-md mt-24 mx-auto  p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>

                {/* User Role (Student or Mentor) */}
                <div className="mb-6">
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => handleRoleChange(true)}
                            className={`px-4 py-2 rounded-md text-white ${isStudent === true ? "bg-green-600" : "bg-gray-300"}`}
                        >
                            Student
                        </button>
                        <button
                            onClick={() => handleRoleChange(false)}
                            className={`px-4 py-2 rounded-md text-white ${isStudent === false ? "bg-green-600" : "bg-gray-300"}`}
                        >
                            Mentor
                        </button>
                    </div>
                </div>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit}>
                    {/* Basic Information */}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    {/* Conditional Fields for Student */}
                    {isStudent && (
                        <>
                            <div className="mb-4">
                                <label className="block font-medium text-gray-700">College</label>
                                <input
                                    type="text"
                                    name="college"
                                    value={formData.college}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium text-gray-700">Interested Fields</label>
                                <input
                                    type="text"
                                    name="interestedFields"
                                    value={formData.interestedFields}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {/* Conditional Fields for Mentor */}
                    {isMentor && (
                        <>
                            <div className="mb-4">
                                <label className="block font-medium text-gray-700">Office Name</label>
                                <input
                                    type="text"
                                    name="officeName"
                                    value={formData.officeName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium text-gray-700">Job Title</label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block font-medium text-gray-700">Working Experience</label>
                                <input
                                    type="text"
                                    name="workingExperience"
                                    value={formData.workingExperience}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <p>Already have Account?  <a href="/" className="text-green-500 hover:underline">
                        Login
                    </a></p>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Page;


