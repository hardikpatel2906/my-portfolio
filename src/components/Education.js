import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educationData = [
    {
        course: "Graduate Certificate in Web Development",
        university: "Conestoga College",
        duration: "January 2023 - April 2024",
        place: "Brantford, Canada",
        description: "Focused on modern full-stack development including frontend frameworks, backend services, and automated testing. Built and tested web applications using Python and Mocha/Chai. Gained practical experience with RESTful APIs, Git workflows, and responsive UI design."
    },
    {
        course: "Master of Engineering in Software Engineering",
        university: "Gujarat Technological University",
        duration: "August 2016 - June 2018",
        place: "Surat, India",
        description: "Specialized in software architecture, design patterns, and system security."
    },
    {
        course: "Bachelor of Engineering in Computer Science & Engineering",
        university: "Gujarat Technological University",
        duration: "August 2012 - May 2016",
        place: "Surat, India",
        description: "Learned core programming concepts, databases, and software engineering principles."
    }
];

const Education = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const openModal = (edu) => setSelectedCard(edu);
    const closeModal = () => setSelectedCard(null);

    return (
        <div className="max-w-6xl mx-auto p-6 py-12">
            {/* Section Title */}
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold text-gray-900 font-Jost mb-4">Education</h2>
                <p className="text-lg text-gray-600">
                    My academic journey shaped my skills in software development & engineering.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {educationData.map((edu, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-100 to-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-transform transform hover:scale-105">
                        <div>
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
                        </div>
                        <button
                            onClick={() => openModal(edu)}
                            className="bg-black rounded-full text-white px-6 py-3 font-Jost text-lg transition-all hover:bg-gray-800"
                        >
                            See More
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedCard && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full relative shadow-xl max-h-[80vh] overflow-y-auto">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-4 text-gray-600 text-2xl hover:text-red-500"
                        >
                            &times;
                        </button>

                        <div className="space-y-2 font-Jost">
                            <h3 className="text-xl font-semibold text-gray-900">{selectedCard.course}</h3>
                            <p className="text-lg text-gray-700">{selectedCard.university}</p>
                            <p className="text-sm text-gray-600 flex items-center">
                                <FaCalendarAlt className="text-[#4A90E2] mr-2" /> {selectedCard.duration}
                            </p>
                            <p className="text-sm text-gray-500 flex items-center">
                                <FaMapMarkerAlt className="text-[#4A90E2] mr-2" /> {selectedCard.place}
                            </p>

                            {/* Description with sentence breaks */}
                            <div className="mt-4 space-y-2 text-sm text-gray-700">
                                {selectedCard.description.split(". ").map((line, i) => (
                                    <p key={i}>• {line.trim()}{line.endsWith('.') ? '' : '.'}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Button */}
            <div className="text-center mt-12">
                <button className="bg-[#4A90E2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#357ABD] transition duration-300">
                    View My Certifications
                </button>
            </div>
        </div>
    );
};

export default Education;
