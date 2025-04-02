import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12">
      {/* Left Section */}
      <div className="max-w-2xl text-center lg:text-left">
        <p className="mt-6 text-lg leading-8 font-semibold text-black font-Jost">Hey, I'm</p>
        <p className="text-black text-8xl sm:text-6xl md:text-7xl font-Jost font-bold">Hardik Patel</p>
        <p className="mt-6 leading-snug font-semibold text-2xl sm:text-3xl md:text-4xl text-black font-Jost">
          A dedicated full-stack developer with a passion for crafting dynamic and efficient web applications.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
          <Link
            className="bg-black rounded-full text-white px-6 py-3 font-Jost text-lg transition-all hover:bg-gray-800"
            to="/git"
          >
            Get in touch
          </Link>
          <Link
            className="bg-black rounded-full text-white px-6 py-3 font-Jost text-lg transition-all hover:bg-gray-800"
            to="/resume"
          >
            My Resume
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex items-center justify-center lg:justify-end">
        <img
          src="MyProfile.png"
          alt="Profile"
          className="mt-10 h-48 sm:h-60 md:h-72 lg:h-[400px] rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
