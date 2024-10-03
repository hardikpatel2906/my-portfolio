const Technology = () => {

    const techDatas = [
        {
            type: "Core",
            technologies: ["Full-Stack", "Software Engineering", "Database"]
        },
        {
            type: "Languages",
            technologies: ["Javascript", "Python"]
        },
        {
            type: "Frameworks",
            technologies: ["ReactJS", "NodeJS", "ExpressJS"]
        },
        {
            type: "Databases",
            technologies: ["MongoDB", "MySQL", "PostgreSQL"]
        }
    ];


    return (
        <>
            <h1>Tools & Technology</h1>
            {techDatas.map((techData) => (
                <>
                    <p>{techData.type}:</p>
                    <div className="flex gap-2">
                        {techData.technologies.map((tech) => (<span><button className="bg-gray-600 text-white rounded-lg px-2 py-1 font-bold">{tech}</button></span>))}
                    </div>

                </>
            ))}
        </>
    )
};
export default Technology;