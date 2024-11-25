const Technology = () => {

    const techDatas = [
        {
            type: "Core",
            technologies: ["Full-Stack Developer", "Software Engineering", "Back-end Development","Front-end Development", "Database"]
        },
        {
            type: "Languages",
            technologies: ["Javascript", "Python", "Typescript", "HTML","CSS","SQL", "TailwindCSS"]
        },
        {
            type: "Frameworks",
            technologies: ["ReactJS", "NextJS", "NodeJS", "ExpressJS","SailsJS"]
        },
        {
            type: "Databases",
            technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
        }
    ];


    return (
        <>
            <div className="mx-auto max-w-6xl mt-6">
                <h1 className="font-Jost text-5xl">Tools & Technology</h1>
                {techDatas.map((techData) => (
                    <>
                        <p className="mt-4 font-Jost text-2xl">{techData.type}:</p>
                        <div className="flex gap-3 mt-2">
                            {techData.technologies.map((tech) => (<span><button className="bg-gray-700 text-white rounded-full px-4 py-2 text-lg font-Jost">{tech}</button></span>))}
                        </div>

                    </>
                ))}
            </div>
        </>
    )
};
export default Technology;