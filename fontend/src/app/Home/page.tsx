
import React from "react";
import MentorProfileCard from "./../../components/MentorProfileCard"
import Navbar from "@/components/navbar";
import Footer from '@/components/footer'
import { FiVideo } from "react-icons/fi";

const page: React.FC = () => {
    const mentors = [
        {
            imageSrc: "https://randomuser.me/api/portraits/men/1.jpg",
            name: "John Doe",
            jobTitle: "Senior Developer",
            jobDomain: "ML/AI",
            officeName: "Nokia Inc.",
            shortDesc: "Experienced mentor in Machine Learning and Artificial Intelligence",
        },
        {
            imageSrc: "https://randomuser.me/api/portraits/men/2.jpg",
            name: "David Smith",
            jobTitle: "Data Scientist",
            jobDomain: "ML/AI",
            officeName: "NASA Inc.",
            shortDesc: "Passionate about helping students learn Data Science.",
        },
        {
            imageSrc: "https://randomuser.me/api/portraits/men/3.jpg",
            name: "Sam Wilson",
            jobTitle: "AI Specialist",
            jobDomain: "AI",
            officeName: "Twitter",
            shortDesc: "Specializing in AI research and mentoring future innovators.",
        },
        {
            imageSrc: "https://randomuser.me/api/portraits/men/4.jpg",
            name: "Michael Johnson",
            jobTitle: "Full Stack Developer",
            jobDomain: "Web Development",
            officeName: "StarLink",
            shortDesc: "Helping students build strong foundations in web development.",
        },
        {
            imageSrc: "https://randomuser.me/api/portraits/men/5.jpg",
            name: "Robert Brown",
            jobTitle: "Blockchain Expert",
            jobDomain: "Blockchain",
            officeName: "upWork",
            shortDesc: "Expert in blockchain development and decentralized systems.",
        },
        {
            imageSrc: "https://randomuser.me/api/portraits/men/6.jpg",
            name: "James Lee",
            jobTitle: "Cloud Architect",
            jobDomain: "Cloud Computing",
            officeName: "Google",
            shortDesc: "Mentoring future cloud engineers with a focus on scalable solutions.",
        },
        {
            imageSrc: "https://randomuser.me/api/portraits/men/7.jpg",
            name: "Daniel White",
            jobTitle: "Cybersecurity Consultant",
            jobDomain: "Cybersecurity",
            officeName: "upWork",
            shortDesc: "Protecting systems and data by educating the next generation of security experts.",
        },
        {
            imageSrc: "https://randomuser.me/api/portraits/men/8.jpg",
            name: "William Harris",
            jobTitle: "Software Engineer",
            jobDomain: "Software Development",
            officeName: "Tesla",
            shortDesc: "Guiding students to become proficient software engineers in various programming languages.",
        },
        {
            imageSrc: "https://randomuser.me/api/portraits/men/9.jpg",
            name: "Ethan Martinez",
            jobTitle: "Data Engineer",
            jobDomain: "Big Data",
            officeName: "Google",
            shortDesc: "Teaching students the importance of data engineering for scalable systems.",
        },
        {
            imageSrc: "https://randomuser.me/api/portraits/men/10.jpg",
            name: "Alexander Scott",
            jobTitle: "DevOps Engineer",
            jobDomain: "DevOps",
            officeName: "F1Soft",
            shortDesc: "Helping students learn the practices that enhance development and operational workflows.",
        },
    ];


    return (
        <div className="bg-green-50/30">
            <Navbar />
            {/* Home page */}
            <div className="max-w-4xl mx-auto ">
                {/* Page Heading */}
                {/* Mentor Profile Cards as Facebook-like Posts */}
                <div className="space-y-6">
                    {mentors.map((mentor, index) => (
                        <div key={index}>
                            < MentorProfileCard officeName={mentor.officeName} name={mentor.name} imageSrc={mentor.imageSrc} jobDomain={mentor.jobDomain} jobTitle={mentor.jobTitle} shortDesc={mentor.shortDesc} />
                        </div>
                        // <div key={index} className="bg-white p-4 rounded-lg  hover:shadow-green-400/30 hover:bg-green-100/20 shadow-md">
                        //     <div className="flex items-center mb-4">
                        //         {/* Mentor Image */}
                        //         <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        //             <img src={mentor.imageSrc} alt={mentor.name} className="object-cover w-full h-full" />
                        //         </div>

                        //         {/* Mentor Name and Job Domain */}
                        //         <div>
                        //             <div className="font-semibold text-green-600">{mentor.name}</div>
                        //             <div className="text-sm text-gray-600">{mentor.jobTitle} at {mentor.jobDomain}</div>
                        //         </div>
                        //     </div>

                        //     {/* Short Description */}
                        //     <div className="text-sm text-gray-500 mb-4">{mentor.shortDesc}</div>

                        //     {/* Buttons */}
                        //     <div className="flex space-x-4">
                        //         <a
                        //             href="https://www.google.com"
                        //             target="_blank"
                        //             rel="noopener noreferrer"
                        //             className="bg-blue-500 text-white py-2 px-6 rounded-full text-sm hover:bg-blue-600"
                        //         >
                        //             Job at Google
                        //         </a>
                        //         <button className="bg-green-500 text-white py-2 px-8 rounded-full text-sm hover:bg-green-600">
                        //             Join as Mentor
                        //         </button>
                        //     </div>
                        // </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default page;
