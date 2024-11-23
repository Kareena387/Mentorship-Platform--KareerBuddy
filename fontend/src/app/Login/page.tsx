"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { email, password } = formData;
        // Mock validation for demo purposes
        if (email === "admin@example.com" && password === "password") {
            router.push("/dashboard"); // Redirect to dashboard or home page
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('https://cdn.pixabay.com/photo/2019/03/03/20/23/background-4032775_640.png')"
            }}
        >
            <div className="absolute inset-0 bg-green-700 opacity-40"></div> {/* White overlay with 20% opacity */}
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {/* <div>KareerBuddy </div> */}
                <p className="text-green-500  text-2xl mb-2 text-center font-semibold">KareerBuddy</p>


                {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        onClick={() => {
                            router.push('/Home');
                        }}
                        className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                    >
                        Login
                    </button>

                    {/* Signup Link */}
                    <div className="text-center mt-4">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <a href="/Signup" className="text-green-500 hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
