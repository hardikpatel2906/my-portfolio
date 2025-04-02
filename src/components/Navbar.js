import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        { name: "Home", href: '/' },
        { name: "Experience", href: '/experience' },
        { name: "Technology", href: '/technology' },
        { name: "Project", href: '/project' },
        { name: "Education", href: '/education' },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <nav className="bg-white shadow-md">
            <div className="mx-auto px-6">
                <div className="flex justify-between p-4 items-center py-4">
                    
                    {/* Logo */}
                    <div className="text-2xl font-bold tracking-widest text-black font-Jost">
                        Hardik Patel
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => setActiveTab(item.name)}
                                className={({ isActive }) =>
                                    classNames(
                                        isActive
                                            ? "text-black bg-[#fead8a]"
                                            : "text-black hover:text-[#4F4A41] hover:bg-[#fead8a]",
                                        "rounded-full px-4 py-2 text-lg font-Jost transition-all"
                                    )
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Email - Visible only on large screens */}
                    <div className="hidden lg:block">
                        <p className="text-lg font-Jost text-gray-600">h.patel290695@gmail.com</p>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col items-center space-y-4 py-4">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                onClick={() => {
                                    setActiveTab(item.name);
                                    setMenuOpen(false); // Close menu after clicking
                                }}
                                className={({ isActive }) =>
                                    classNames(
                                        isActive
                                            ? "text-black bg-[#fead8a]"
                                            : "text-black hover:text-[#4F4A41] hover:bg-[#fead8a]",
                                        "rounded-full px-4 py-2 text-lg font-Jost transition-all"
                                    )
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
