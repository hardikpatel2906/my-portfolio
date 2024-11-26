import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home");



    const navigation = [
        { name: "Home", href: '/' },
        { name: 'Experience', href: '/experience' },
        { name: 'Technology', href: '/technology' },
        { name: 'Project', href: '/project' },
        { name: 'Education', href: '/education' },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="flex justify-between p-4 bg-[#ffffff]">
            <div>
                <p className="font-Jost text-xl tracking-widest">Hardik Patel</p>
                {/* <img src="GatherGro.png" className="h-[60px]"></img> */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <NavLink
                            onClick={() => { setActiveTab(item.name) }}
                            key={item.name}
                            to={item.href}
                            end={item.href === '/'} 
                            // href={item.href}
                            // aria-current={activeTab ? 'page' : undefined}
                            className={({ isActive }) =>
                                classNames(
                                    isActive ?
                                        'text-[#000000] bg-[#fead8a]' :
                                        'text-[#000000] hover:text-[#4F4A41] hover:bg-[#fead8a]',
                                    'rounded-full px-3 py-2 text-lg font-Jost',
                                )}

                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div><p className="font-Jost text-lg">h.patel290695@gmail.com</p></div>
        </div>
    )
};
export default Navbar;