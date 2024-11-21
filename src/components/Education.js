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
        <div className="mx-auto max-w-5xl mt-6">
            <h1 className="font-Jost text-5xl">Education</h1>
            {
                educationData.map((education) => (

                    <div className="my-3 pt-6">
                        <h1 className="font-Jost text-xl text-[#14142b]">{education.university}, {education.place}.</h1>
                        <h2 className="font-Jost text-2xl">{education.course}</h2>
                        <h3 className="font-Jost text-lg">{education.duration}</h3>
                    </div>
                ))
            }
        </div>
    )
};
export default Education;