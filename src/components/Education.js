const Education = () => {
    const educationData = [
        {
            "course": "Graduate Certificate in Web Development",
            "university": "Conestoga College",
            "duration": "January 2023 - April 2024",
            "place": "Brantford, Canada"
        },
        {
            "course": "Master of Engineering in Software Engineering",
            "university": "Gujarat Technological University",
            "duration": "August 2016 - June 2018",
            "place": "Surat, India"
        },
        {
            "course": "Bachelor of Engineering in Computer Science & Engineering",
            "university": "Gujarat Technological University",
            "duration": "August 2012 - May 2016",
            "place": "Surat, India"
        }
    ]
    return (
        <div className="m-auto max-w-6xl">
            <h1 className="text-3xl">Education</h1>
            {
                educationData.map((education) => (
                    <div className="my-4">
                        <h1 className="text-2xl font-bold">{education.university}, {education.place}.</h1>
                        <h2 className="text-xl font-bold">{education.course}</h2>
                        <h3 className="text-lg">{education.duration}</h3>
                    </div>
                ))
            }
        </div>
    )
};
export default Education;