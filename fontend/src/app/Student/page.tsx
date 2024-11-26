"use client";
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';

// Define types for the student data
interface Student {
    _id: string;
    name: string;
    college: string;
    interestedFields: string;
    profilePicture: string;
}

const Students = () => {
    const [students, setStudents] = useState<Student[]>([]);

    // Fetch students data from the API
    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/students');
                const data = await response.json();
                console.log(data)
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students data:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1  mt-56 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {students.map((student) => (
                    <div key={student._id} className="bg-white rounded-lg shadow-lg p-4">
                        <img
                            src={student.profilePicture || 'https://via.placeholder.com/150'}
                            alt={student.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center">{student.name}</h3>
                        <p className="text-sm text-center text-gray-500">{student.college}</p>
                        <p className="text-sm text-center text-gray-700 mt-2">
                            Interested in: {student.interestedFields}
                        </p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>

    );
};

export default Students;
