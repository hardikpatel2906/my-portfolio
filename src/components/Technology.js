const techStack = {
    Backend: [
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "Node Js", icon: "/icons/nodejs.png" },
        { name: "Express", icon: "/icons/expressjs.png" },
        // { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "Python", icon: "/icons/python.png" },
    ],
    Frontend: [
        { name: "HTML", icon: "/icons/html5.png" },
        { name: "CSS", icon: "/icons/css3.png" },
        { name: "React", icon: "/icons/reactjs.png" },
        { name: "Redux", icon: "/icons/redux.png" },
        { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
        { name: "BootStrap", icon: "/icons/bootstrap.png" },
    ],
    Database: [
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "Postgresql", icon: "/icons/postgresql.png" },
        { name: "MySQL", icon: "/icons/mysql.png" },
        { name: "Firebase", icon: "/icons/firebase.png" },
    ],
    DevOps: [
        { name: "Docker", icon: "/icons/docker.png" },
        { name: "AWS", icon: "/icons/aws.png" },
        { name: "Google Cloud", icon: "/icons/googlecloud.png" },
        { name: "GitHub", icon: "/icons/github.png" },
    ],
};

const Technology = () => {
    return (
        <div className="px-6 py-12 max-w-6xl mx-auto font-Jost">
            <h1 className="font-Jost text-5xl text-center">Technology Stack</h1>
            <p className="text-lg text-gray-600 mt-2 text-center font-Jost">
                The technologies I use for building web applications and scalable solutions.
            </p>
            <div className="space-y-10 text-center mt-8">
                {Object.entries(techStack).map(([section, tools]) => (
                    <div key={section}>
                        {/* <h3 className="text-2xl font-semibold text-gray-800 border-b-2 inline-block pb-1 border-blue-400">
                            {section}
                        </h3> */}
                        <div className="flex flex-wrap justify-center gap-20 mt-4">
                            {tools.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="flex flex-col items-center gap-2 group transition-transform hover:scale-105"
                                >
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-12 h-12 object-contain"
                                    />
                                    <span className="text-sm text-gray-700">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technology;
