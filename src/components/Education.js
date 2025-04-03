import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educationData = [
    {
        "course": "Graduate Certificate in Web Development",
        "university": "Conestoga College",
        "duration": "January 2023 - April 2024",
        "place": "Brantford, Canada",
        "description": "Focused on full-stack web development, modern frameworks, and cloud technologies."
    },
    {
        "course": "Master of Engineering in Software Engineering",
        "university": "Gujarat Technological University",
        "duration": "August 2016 - June 2018",
        "place": "Surat, India",
        "description": "Specialized in software architecture, design patterns, and system security."
    },
    {
        "course": "Bachelor of Engineering in Computer Science & Engineering",
        "university": "Gujarat Technological University",
        "duration": "August 2012 - May 2016",
        "place": "Surat, India",
        "description": "Learned core programming concepts, databases, and software engineering principles."
    }
];

const Education = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 py-12">
            {/* Section Title with Subtitle */}
            <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-center mb-12 font-Jost text-gray-900">
                Education
            </h2>
                <p className="text-lg text-gray-600 mt-2">
                    My academic journey shaped my skills in software development & engineering.
                </p>
            </div>

            {/* Education Cards */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {educationData.map((edu, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center space-x-3">
                            <FaUniversity className="text-[#4A90E2] text-3xl" />
                            <h3 className="text-xl font-semibold text-gray-900">{edu.course}</h3>
                        </div>
                        <p className="text-lg text-gray-700 mt-1">{edu.university}</p>
                        <p className="text-sm text-gray-600 mt-2 flex items-center">
                            <FaCalendarAlt className="text-[#4A90E2] mr-2" /> {edu.duration}
                        </p>
                        <p className="text-sm text-gray-500 mt-1 flex items-center">
                            <FaMapMarkerAlt className="text-[#4A90E2] mr-2" /> {edu.place}
                        </p>
                        <p className="text-sm text-gray-700 mt-3">{edu.description}</p>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10">
                <button className="bg-[#4A90E2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#357ABD] transition duration-300">
                    View My Certifications
                </button>
            </div>
        </div>
    );
};

export default Education;
