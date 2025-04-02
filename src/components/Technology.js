// const Technology = () => {

//     const techDatas = [
//         {
//             type: "Core",
//             technologies: ["Full-Stack Developer", "Software Engineering", "Back-end Development","Front-end Development", "Database", "Typescript", "HTML","CSS","SQL", "TailwindCSS"]
//         },
//         {
//             type: "Languages",
//             technologies: ["Javascript", "Python", "Typescript", "HTML","CSS","SQL", "TailwindCSS"]
//         },
//         {
//             type: "Frameworks",
//             technologies: ["ReactJS", "NextJS", "NodeJS", "ExpressJS","SailsJS"]
//         },
//         {
//             type: "Databases",
//             technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
//         }
//     ];


//     return (
//         <>
//             <div className="mx-auto max-w-6xl mt-6">
//                 <h1 className="font-Jost text-5xl">Tools & Technology</h1>
//                 {techDatas.map((techData) => (
//                     <>
//                         <p className="mt-4 font-Jost text-2xl">{techData.type}:</p>
//                         <div className="flex flex-wrap gap-3 mt-2">
//                             {techData.technologies.map((tech) => (<span><button className="bg-gray-700 text-white rounded-full px-4 py-2 text-lg font-Jost">{tech}</button></span>))}
//                         </div>

//                     </>
//                 ))}
//             </div>
//         </>
//     )
// };
// export default Technology;

import { FaNodeJs, FaReact, FaDocker, FaAws, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const techData = [
    {
        category: "Backend",
        icon: <FaNodeJs className="text-4xl text-green-500" />,
        technologies: ["JavaScript","Node.js", "Express.js", "Sails.js", "Python"],
    },
    {
        category: "Frontend",
        icon: <FaReact className="text-4xl text-blue-500" />,
        technologies: ["React.js", "Redux", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
        category: "Databases",
        icon: <FaDatabase className="text-4xl text-orange-500" />,
        technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    },
    {
        category: "DevOps & Cloud",
        icon: <FaDocker className="text-4xl text-cyan-500" />,
        technologies: ["Docker", "Kubernetes", "Google Cloud Platform", "AWS", "CI/CD Pipelines"],
    },
];

const Technology = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-8">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-Jost text-gray-800">Technology Stack</h2>
                <p className="text-lg text-gray-600 mt-2">
                    The technologies I use for building web applications and scalable solutions.
                </p>
            </div>

            {/* Tree Structure */}
            <div className="flex flex-col items-center">
                {techData.map((tech, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="relative flex items-center space-x-6 bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg rounded-lg px-6 py-4 w-3/4 my-4"
                    >
                        {/* Vertical Line Connector */}
                        {/* {index !== techData.length - 1 && (
                            <div className="absolute left-6 w-1 h-16 bg-gray-400 top-full"></div>
                        )} */}

                        {/* Icon */}
                        <div className="p-3 bg-gray-200 rounded-full">{tech.icon}</div>

                        {/* Category + Technologies */}
                        <div>
                            <h3 className="text-2xl font-semibold font-Jost text-gray-900">{tech.category}</h3>
                            <div className="mt-2 space-y-1">
                                {tech.technologies.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.1 }}
                                        className="bg-white px-4 py-1 rounded-lg shadow font-Jost text-gray-800 inline-block m-1"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technology;

