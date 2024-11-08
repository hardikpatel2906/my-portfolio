const Navbar = () => {
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Experience', href: '#', current: false },
        { name: 'Technology', href: '/technology', current: false },
        { name: 'Project', href: '/project', current: false },
        { name: 'Education', href: '/education', current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="flex justify-between p-4 bg-[#ffffff]">
            <div><p className="font-Jost text-lg">Hardik Patel</p></div>
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'text-[#000000] bg-[#fead8a]' : 'text-[#000000] hover:text-[#4F4A41] hover:bg-[#ff834f]',
                                'rounded-full px-3 py-2 text-lg font-Jost',
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
            <div><p className="font-Jost text-lg">h.patel290695@gmail.com</p></div>
        </div>
    )
};
export default Navbar;