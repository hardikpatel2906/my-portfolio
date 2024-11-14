const Home = () => {
    return (
        <div class="mx-auto max-w-6xl flex justify-between">
            <div className="max-w-2xl">
                <p className="mt-6 text-lg leading-8 font-semibold text-[#000000] text-justify font-Jost">Hey, I'm </p>
                <p className="text-[#000000] text-8xl font-Jost">Hardik Patel</p>
                <p className="mt-6 leading-snug font-semibold text-5xl text-[#000000] font-Jost text-left">A dedicated full-stack developer with a passion for crafting dynamic and efficient web applications.</p>
            <button className="bg-black rounded-full text-white p-5 font-Jost font-bold mt-10 text-lg">Get in touch</button>
            </div>
            <div>
                <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
                    <img src="MyProfile.png" alt="1st" className="mt-10 h-64 md:h-72 lg:h-[400px]" />
                    {/* <img src="./assets/Pink-Shape.svg" alt="2st" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]" />
                    <img src="./assets/Purple-Shape.svg" alt="3st" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]" />
                    <img src="./assets/Hero-Model.png" alt="Hero" className="absolute h-64 md:h-72 lg:h-[400px]" /> */}
                </div>
            </div>
        </div>
    )
};
export default Home;