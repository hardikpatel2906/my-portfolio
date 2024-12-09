const Project = () => {
    const projectTech = ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]
    return (
        <>
            <div className="mx-auto max-w-5xl mt-6">
                <h1 className="font-Jost text-5xl">My Projects</h1>
                <h1 className="font-Jost text-3xl mt-6">GatherGro</h1>
                <h3 className="font-Jost text-xl">A web solution for the local farmers to sell local products online as well as connect with other localities near by. It also provides a plateform to exchange knowledge with each other.</h3>
                <div className="flex flex-wrap gap-3 mt-2">
                    {
                        projectTech.map(tech => (
                            <button className="bg-gray-700 text-white rounded-full px-4 py-2 text-lg font-Jost">{tech}</button>
                        ))
                    }
                </div>
                <div className="mt-5">
                    <a href="https://gather-gro.netlify.app"><img src="web.png" alt="web" width="40" /></a>
                </div>
            </div>
        </>
    )
};
export default Project;