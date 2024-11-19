import React from "react";
interface MentorProfileCardProps {
    imageSrc: string;
    name: string;
    jobTitle: string;
    jobDomain: string;
    shortDesc: string;
    officeName: string;
}

const MentorProfileCard: React.FC<MentorProfileCardProps> = ({
    imageSrc,
    name,
    jobTitle,
    jobDomain,
    shortDesc,
    officeName,
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

                <div className="flex justify-start items-center">
                    {/* Button */}
                    <p
                        // href="https://www.google.com"
                        className=" flex gap-1 text-white bg-blue-400 py-2 px-6 rounded-full text-sm hover:bg-blue-600"
                    >
                        Job at {officeName}
                    </p>

                    {/* Join Button */}
                    <a href="/profile" className="bg-green-500 text-white py-2 px-8 rounded-full text-sm hover:bg-green-600">
                        Join as Mentor
                    </a>

                </div>
            </div>
        </div>
    );
};

export default MentorProfileCard;
