import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        company: "TechCorp",
        logo: "https://via.placeholder.com/50", // Replace with actual logo
        role: "Full-Stack Developer",
        duration: "Jan 2022 - Present",
        description: [
            "Developed and maintained scalable web applications using React, Node.js, and MongoDB.",
            "Optimized API performance, reducing response time by 40%.",
            "Implemented authentication & authorization using JWT and OAuth.",
            "Led a team of 5 developers in an Agile environment.",
        ],
        techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
        id: 2,
        company: "WebSolutions",
        logo: "https://via.placeholder.com/50", // Replace with actual logo
        role: "Backend Developer",
        duration: "Jun 2020 - Dec 2021",
        description: [
            "Designed and developed RESTful APIs using Node.js & Express.",
            "Integrated PostgreSQL database, reducing query execution time by 30%.",
            "Implemented CI/CD pipelines for faster deployment.",
            "Collaborated with frontend developers to enhance user experience.",
        ],
        techStack: ["Node.js", "Express", "PostgreSQL", "Docker", "MongoDB", "MySQL"],
    },
];

const Experience = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            {/* <h2 className="text-5xl font-bold text-center mb-12 font-Jost text-gray-900">
                Experience
            </h2> */}
            <h1 className="font-Jost text-5xl text-center">Professional Experience</h1>
            <div className="relative border-l-4 border-gray-300 mt-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id} font-Jost
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="mb-10 ml-6 relative"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-4 top-3 w-10 h-2 bg-[#4A90E2] flex items-center justify-center shadow-lg">
                            {/* <img src={exp.logo} alt={exp.company} className="w-6 h-6 rounded-full" /> */}
                        </div>

                        {/* Experience Card */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <h3 className="text-2xl font-semibold font-Jost text-gray-800">{exp.role}</h3>
                            <p className="text-gray-600 text-sm mb-3 font-Jost">{exp.duration}</p>

                            {/* Bullet Points */}
                            <ul className="list-disc list-inside font-Jost text-gray-700 space-y-2">
                                {exp.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="mt-4 flex flex-wrap gap-2 font-Jost">
                                {exp.techStack.map((tech, i) => (
                                    <span key={i} className="bg-white px-4 py-1 rounded-md shadow font-Jost text-gray-800 inline-block m-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
