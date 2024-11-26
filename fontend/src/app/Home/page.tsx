"use client";
import React, { useEffect, useState } from "react";
import MentorProfileCard from "./../../components/MentorProfileCard"
import Navbar from "@/components/navbar";
import Footer from '@/components/footer'
import { FiVideo } from "react-icons/fi";

interface Mentor {
    _id: string;
    name: string;
    email: string;
    role: string;
    phone: string;
    dob: string;
    college: string;
    interestedFields: string;
    officeName: string;
    jobTitle: string;
    workingExperience: string;
    availability: any[];
    certifications: any[];
    skills: any[];
    profilePicture: string;
    ratings: any[];
    createdAt: string;
    updatedAt: string;
}

const MentorListPage = () => {
    const [mentors, setMentors] = useState<Mentor[]>([]);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/auth/mentors");
                const data = await response.json();
                setMentors(data); // Assign the fetched data to mentors state
            } catch (error) {
                console.error("Error fetching mentors:", error);
            }
        };

        fetchMentors();
    }, []);

    return (
        <div className="bg-green-50/30">
            <Navbar />
            {/* Mentor Profile Cards */}
            <div className=" grid grid-cols-2 mx-auto space-y-6">
                {mentors.map((mentor) => (
                    <div key={mentor._id}>
                        <MentorProfileCard
                            mentorId={mentor._id}
                            imageSrc={mentor.profilePicture}
                            name={mentor.name}
                            jobTitle={mentor.jobTitle}
                            jobDomain={mentor.interestedFields}
                            shortDesc={mentor.workingExperience}
                            officeName={mentor.officeName}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default MentorListPage;
