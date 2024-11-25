"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page: React.FC = () => {
    const router = useRouter();
    const [isStudent, setIsStudent] = useState<boolean | null>(null);
    const [isMentor, setIsMentor] = useState<boolean | null>(null);
    // Track if the user is a student or mentor
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",  // Add password field
        phone: "",
        dob: "",
        college: "",
        interestedFields: "",
        officeName: "",
        jobTitle: "",
        workingExperience: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRoleChange = (role: boolean) => {
        setIsStudent(role);
        setIsMentor(!role);
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataWithRole = {
            ...formData,
            role: isStudent ? 'student' : 'mentor',
        };


        console.log(formDataWithRole);
        try {
            const response = await fetch(`http://localhost:5000/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDataWithRole),
            }
            )
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }
            router.push("/Login");
        }
        catch (e) {
            console.warn("API Error" + e)
        }
    };

    return (
        <div>
            <div className="z-10 max-w-md mt-24 mx-auto p-6 bg-white shadow-lg rounded-lg">
                <p className="text-green-500 text-2xl mb-2 text-center font-semibold">KareerBuddy</p>
                <p className="text-center text-lg mb-5 font-medium">SignUp</p>

                {/* User Role (Student or Mentor) */}
                <div className="mb-6">
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => handleRoleChange(true)}
                            className={`px-4 py-2 rounded-md text-white ${isStudent === true ? "bg-green-600" : "bg-gray-300"}`}
                        >
                            Mentee
                        </button>
                        <button
                            onClick={() => handleRoleChange(false)}
                            className={`px-4 py-2 rounded-md text-white ${isMentor === true ? "bg-green-600" : "bg-gray-300"}`}
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
                            name="name"
                            value={formData.name}
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
                        <label className="block font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
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
                    <p className="mb-4 text-center">Already have an account? <a href="/" className="text-green-500 hover:underline">
                        Login
                    </a></p>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
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
