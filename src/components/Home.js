const Home = () => {
    return (
        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-10">
            <div className="flex justify-between">
                <div>
                    <p className="mt-6 text-lg leading-8 font-semibold text-[#000000] text-justify font-Jost">Hey, I'm </p>
                    <p className='tracking-tight font-bold text-[#000000] text-8xl font-Jost'>Hardik Patel</p>
                    <p className="mt-6 leading-snug font-semibold text-6xl text-[#000000] font-Jost text-justify">I'm a dedicated full-stack developer with a passion for crafting dynamic and efficient web applications.</p>
                    {/* Currently, I focus on building responsive, user-friendly interfaces and robust backend systems, always aiming to deliver high-quality software solutions.</p> */}
                    {/* <p className="mt-6 text-lg leading-8 font-semibold text-[#000000] text-justify">
                    Throughout my career, I've gained extensive experience in developing web applications across various industries. I've worked on diverse projects, from corporate websites and e-commerce platforms to educational portals and non-profit organization websites. My ability to seamlessly integrate front-end and back-end technologies has consistently led to successful project outcomes and satisfied clients.
                </p>
                <p className="mt-6 text-lg leading-8 font-semibold text-[#000000] text-justify">
                    I have a strong foundation in technologies like Node.js, React.js, JavaScript, and frameworks like Express.js and Sails. Additionally, I’m skilled in working with databases such as MongoDB, PostgreSQL, and MySQL. My expertise extends to REST API development and API testing, ensuring that the applications I build are not only functional but also reliable and efficient.
                </p> */}
                </div>

                {/* <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
                    <img src="./assets/Blue-Shape.svg" alt="1st" className="-rotate-45 h-64 md:h-72 lg:h-[400px]" />
                    <img src="./assets/Pink-Shape.svg" alt="2st" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]" />
                    <img src="./assets/Purple-Shape.svg" alt="3st" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]" />
                    <img src="./assets/Hero-Model.png" alt="Hero" className="absolute h-64 md:h-72 lg:h-[400px]" />
                </div> */}
            </div>
        </div>
    )
};
export default Home;