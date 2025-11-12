import React from 'react';
import { Button } from "./../components/button"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-green-50 hover:bg-green-100/20 py-5 mt-20">
            <div className=" mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">

                    {/* Logo and Social Links */}
                    <div className="col-span-1 flex flex-col">
                        <h2 className="text-2xl font-bold mb-4 text-green-700">KareerBuddy</h2>
                        <p className="mb-4 text-sm text-gray-700">
                            Empowering students to connect with mentors and shape their careers.
                        </p>
                        <div className="flex  gap-4">
                            <FaFacebook className="text-blue-600" />
                            <FaLinkedin className="text-blue-700" />
                            <FaTwitter className="text-blue-400" />
                            <FaInstagram className="text-pink-500" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-green-700">Quick Links</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li><a href="#" className="hover:text-green-500">Home</a></li>
                            <li><a href="#" className="hover:text-green-500">About Us</a></li>
                            <li><a href="#" className="hover:text-green-500">Services</a></li>
                            <li><a href="#" className="hover:text-green-500">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-green-700">Resources</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li><a href="#" className="hover:text-green-500">Blogs</a></li>
                            <li><a href="#" className="hover:text-green-500">FAQs</a></li>
                            <li><a href="#" className="hover:text-green-500">Mentorship Programs</a></li>
                            <li><a href="#" className="hover:text-green-500">Career Advice</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-green-700">Contact Us</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>Email: <a href="mailto:support@kareerbuddy.com" className="hover:text-green-500">support@kareerbuddy.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="hover:text-green-500">+977-9812333221</a></li>
                            <li>Address: <span>Naxal, Kathmandu, Nepal</span></li>
                        </ul>
                    </div>

                </div>
                <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600">
                      © {new Date().getFullYear()} KareerBuddy. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
