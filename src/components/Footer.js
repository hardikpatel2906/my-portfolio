import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex justify-center space-x-8 my-10">
            <a
                href="https://www.linkedin.com/in/hardikpatel2906/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-blue-600 transition-transform transform hover:scale-125 duration-300"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/hardikpatel2906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-black transition-transform transform hover:scale-125 duration-300"
            >
                <FaGithub />
            </a>
            <a
                href="https://stackoverflow.com/users/11044604/hardik-patel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 hover:text-orange-500 transition-transform transform hover:scale-125 duration-300"
            >
                <FaStackOverflow />
            </a>
        </div>
    );
};
export default Footer;