// const Experience = () => {
//     const ExperienceData = [{
//         "company": "AtoZ Infoway LLP",
//         "title": "Software Developer",
//         "duration": "April 2019 - December 2022",
//         "RoleAndResponsibility": "Partnered with front-end developers and stakeholders to gather requirements and translate them into technical specifications, ensuring alignment with project goals through excellent verbal and written communication skills. Directed the development of web applications using React/Redux, UI, NodeJS, WebSocket, NPM, and Webpack in consideration of the software development life cycle resulting in a 25% improvement in user interface responsiveness and a 15% increase in user engagement.Architected and maintained scalable front-end systems with React, utilizing component-based software architecture and React Router for seamless navigation, enhancing code quality and maintainability, leading to a 40% decrease in bug reports and a 25% improvement in overall user satisfaction.Spearheaded the development of dynamic web applications using React, leveraging hooks and context API to manage state and side effects efficiently, which resulted in a 30% reduction in load times and boosted user retention by 20%.Applied asynchronous programming and multithreading concepts, optimizing system performance, dynamic API integration, and responsive design, resulting in a 30% reduction in response time.Conducted code reviews, testing using tools like Mocha and Jest and debugging, identifying and resolving bugs and issues, and documenting resulting in improved application reliability and stability by 20%.Orchestrated the implementation of cutting-edge user authentication and authorization systems leveraging Auth0 and fortified by JSON Web Token encryption. Delivered robust security measures, ensuring seamless access to essential application resources"
//     }];
//     return (
//         <>
//             <div className="mx-auto max-w-6xl mt-6">
//                 <h1 className="font-Jost text-5xl">My Experience</h1>
//                 {
//                     ExperienceData.map(exp => (
//                         <div className="pt-6">
//                             <h1 className="font-Jost text-2xl">{exp.company}</h1>
//                             <h2 className="font-Jost text-xl">{exp.title}</h2>
//                             <h3 className="font-Jost text-lg">{exp.duration}</h3>
//                             <h3 className="font-Jost text-lg mt-3">{exp.RoleAndResponsibility.split(".").map(rr => (
//                                 <h3 className="font-Jost text-lg">-- {rr}</h3>
//                             ))}</h3>
//                         </div>
//                     ))
//                 }
//             </div>
//         </>
//     )
// };
// export default Experience;

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
        techStack: ["Node.js", "Express", "PostgreSQL", "Docker"],
    },
];

const Experience = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h2 className="text-5xl font-bold text-center mb-12 font-Jost text-gray-900">
                Experience
            </h2>

            <div className="relative border-l-4 border-gray-300">
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
                        <div className="absolute -left-4 top-3 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                            <img src={exp.logo} alt={exp.company} className="w-6 h-6 rounded-full" />
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
                                    <span key={i} className="bg-gradient-to-r from-indigo-400 to-purple-500 px-2 py-1 text-sm text-white rounded-md">
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
