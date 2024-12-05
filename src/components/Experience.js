const Experience = () => {
    const ExperienceData = [{
        "company": "AtoZ Infoway LLP",
        "title": "Software Developer",
        "duration": "April 2019 - December 2022",
        "RoleAndResponsibility": "Partnered with front-end developers and stakeholders to gather requirements and translate them into technical specifications, ensuring alignment with project goals through excellent verbal and written communication skills. Directed the development of web applications using React/Redux, UI, NodeJS, WebSocket, NPM, and Webpack in consideration of the software development life cycle resulting in a 25% improvement in user interface responsiveness and a 15% increase in user engagement.Architected and maintained scalable front-end systems with React, utilizing component-based software architecture and React Router for seamless navigation, enhancing code quality and maintainability, leading to a 40% decrease in bug reports and a 25% improvement in overall user satisfaction.Spearheaded the development of dynamic web applications using React, leveraging hooks and context API to manage state and side effects efficiently, which resulted in a 30% reduction in load times and boosted user retention by 20%.Applied asynchronous programming and multithreading concepts, optimizing system performance, dynamic API integration, and responsive design, resulting in a 30% reduction in response time.Conducted code reviews, testing using tools like Mocha and Jest and debugging, identifying and resolving bugs and issues, and documenting resulting in improved application reliability and stability by 20%.Orchestrated the implementation of cutting-edge user authentication and authorization systems leveraging Auth0 and fortified by JSON Web Token encryption. Delivered robust security measures, ensuring seamless access to essential application resources"
    }];
    return (
        <>
            <div className="mx-auto max-w-6xl mt-6">
                <h1 className="font-Jost text-5xl">My Experience</h1>
                {
                    ExperienceData.map(exp => (
                        <div className="pt-6">
                            <h1 className="font-Jost text-2xl">{exp.company}</h1>
                            <h2 className="font-Jost text-xl">{exp.title}</h2>
                            <h3 className="font-Jost text-lg">{exp.duration}</h3>
                            <h3 className="font-Jost text-lg mt-3">{exp.RoleAndResponsibility.split(".").map(rr => (
                                <h3 className="font-Jost text-lg">-- {rr}</h3>
                            ))}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    )
};
export default Experience;