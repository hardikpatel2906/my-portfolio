import { FaNodeJs, FaReact, FaDocker, FaAws, FaDatabase } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const techData = [
    {
        category: "Backend",
        icon: <FaNodeJs className="text-4xl text-green-500" />,
        technologies: ["JavaScript", "Node.js", "Express.js", "Sails.js", "Python"],
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

const floatingIcons = [
    { icon: <FaReact className="text-blue-300 text-8xl" />, x: "20%", y: "20%" },
    { icon: <FaNodeJs className="text-green-300 text-6xl" />, x: "80%", y: "30%" },
    { icon: <SiExpress className="text-green-300 text-6xl" />, x: "90%", y: "40%" },
    { icon: <FaDatabase className="text-orange-300 text-6xl" />, x: "50%", y: "70%" },
    { icon: <FaDocker className="text-cyan-300 text-6xl" />, x: "20%", y: "80%" },
    { icon: <FaAws className="text-yellow-300 text-6xl" />, x: "70%", y: "90%" },
];

const Technology = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-6">
            {/* <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-Jost text-gray-800">Technology Stack</h2>
                <p className="text-lg text-gray-600 mt-2">
                    The technologies I use for building web applications and scalable solutions.
                </p>
            </div> */}
            <h1 className="font-Jost text-5xl text-center">Technology Stack</h1>
            <p className="text-lg text-gray-600 mt-2 text-center font-Jost">
                The technologies I use for building web applications and scalable solutions.
            </p>
            {/* Tree Structure */}
            <div className="flex flex-col items-center mt-8">
                {techData.map((tech, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="relative flex items-center space-x-6 bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg rounded-lg px-6 py-4 w-3/4 my-4"
                    >
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