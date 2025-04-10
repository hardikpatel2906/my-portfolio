// const Project = () => {
//     const projectTech = ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
//     return (
//         <>
//             <div className="mx-auto max-w-5xl mt-6">
//                 <h1 className="font-Jost text-5xl">My Projects</h1>
//                 <h1 className="font-Jost text-3xl mt-6">1. GatherGro</h1>
//                 <h3 className="font-Jost text-xl">A web solution for the local farmers to sell local products online as well as connect with other localities near by. It also provides a plateform to exchange knowledge with each other.</h3>
//                 <div className="flex flex-wrap gap-3 mt-2">
//                     {
//                         projectTech.map(tech => (
//                             <button className="bg-gray-700 text-white rounded-full px-4 py-2 text-lg font-Jost">{tech}</button>
//                         ))
//                     }
//                 </div>
//                 <div className="mt-5">
//                     <a href="https://gather-gro.netlify.app"><img src="web.png" alt="web" width="40" /></a>
//                 </div>
//             </div>
//         </>
//     )
// };
// export default Project;

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A multi-vendor marketplace built using the MERN stack with authentication, product management, and payments.",
        techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/example/ecommerce",
        liveDemo: "https://ecommerce-demo.com",
        image: "iron-man.jpg",
    },
    {
        title: "AI Quiz App",
        description: "An AI-powered quiz platform (CodeIQ) that categorizes questions based on programming proficiency levels.",
        techStack: ["React.js", "TypeScript", "Vite"],
        github: "https://github.com/example/ai-quiz",
        liveDemo: "https://codeiq.com",
        image: "iron-man.jpg",
    },
    {
        title: "Sales Data Dashboard",
        description: "A dashboard for visualizing quarterly sales data with filtering, sorting, and pagination.",
        techStack: ["ASP.NET Core", "D3.js", "Bootstrap"],
        github: "https://github.com/example/sales-dashboard",
        liveDemo: "https://sales-dashboard.com",
        image: "iron-man.jpg",
    },
];

const Project = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-6">
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
                <p className="text-lg text-gray-600 mt-2">Some of the projects I have built and contributed to.</p>
            </motion.div>

            {/* Project List */}
            <div className="space-y-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >

                        {/* Project Details */}
                        <div className="md:w-1/2 w-full mt-6 md:mt-0 px-6">
                            <h3 className="text-3xl font-semibold text-gray-900">{project.title}</h3>
                            <p className="text-gray-600 mt-3">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-lg">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex space-x-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-800 hover:text-black transition-all"
                                >
                                    <FaGithub className="text-xl" />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-all"
                                >
                                    <FaExternalLinkAlt className="text-xl" />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                        {/* Project Image Preview */}
                        <div className="md:w-1/2 w-full mt-6 md:mt-0 px-6 py-6">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-lg shadow-lg hover:scale-105 transition-all duration-300 w-3/4"
                            />
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Project;
