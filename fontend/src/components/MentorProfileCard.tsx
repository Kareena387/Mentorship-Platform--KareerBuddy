import React from "react";

interface MentorProfileCardProps {
    imageSrc: string;
    name: string;
    jobTitle: string;
    jobDomain: string;
    shortDesc: string;
}

const MentorProfileCard: React.FC<MentorProfileCardProps> = ({
    imageSrc,
    name,
    jobTitle,
    jobDomain,
    shortDesc,
}) => {
    return (
        <div className="flex bg-white p-4 rounded-lg shadow-lg hover:shadow-xl">
            {/* Left side - Image */}
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mr-4">
                <img src={imageSrc} alt="Mentor" className="object-cover w-full h-full" />
            </div>

            {/* Right side - Details */}
            <div className="flex-1">
                <div className="text-green-600 font-bold text-lg">{name}</div>
                <div className="text-sm text-gray-600 mb-2">{jobTitle} at {jobDomain}</div>
                <div className="text-gray-500 text-sm mb-4">{shortDesc}</div>

                <div className="flex justify-between items-center">
                    {/* Button */}
                    <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white py-2 px-6 rounded-full text-sm hover:bg-blue-600"
                    >
                        Job at Google
                    </a>

                    {/* Join Button */}
                    <button className="bg-green-500 text-white py-2 px-8 rounded-full text-sm hover:bg-green-600">
                        Join as Mentor
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MentorProfileCard;
