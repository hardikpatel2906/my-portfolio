const Navbar = () => {
    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'Experience', href: '#', current: false },
        { name: 'Technology', href: '#', current: false },
        { name: 'Project', href: '#', current: false },
        { name: 'Education', href: '#', current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="flex justify-center p-4 bg-[#88BDBC]">
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'text-[#4F4A41]' : 'text-white hover:text-[#4F4A41]',
                                'rounded-md px-3 py-2 text-lg font-medium',
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
};
export default Navbar;