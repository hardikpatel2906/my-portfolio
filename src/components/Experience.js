const Experience = () => {
    const ExperienceData = [{
        company: "AtoZ Infoway LLP",
        title: "Software Developer",
        duration: "April 2019 - December 2022",
    }];
    return (
        <>
            <div className="mx-auto max-w-5xl mt-6">
                <h1 className="font-Jost text-5xl">My Experience</h1>

                {
                    ExperienceData.map(exp => (
                        <div className="pt-6">
                            <h1 className="font-Jost text-2xl">{exp.company}</h1>
                            <h2 className="font-Jost text-xl">{exp.title}</h2>
                            <h3 className="font-Jost text-lg">{exp.duration}</h3>
                        </div>

                    ))
                }
            </div>
        </>
    )
};
export default Experience;