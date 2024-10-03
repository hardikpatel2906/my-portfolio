const Navbar = () => {
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Experience', href: '#', current: false },
        { name: 'Technology', href: '/technology', current: false },
        { name: 'Project', href: '#', current: false },
        { name: 'Education', href: '/education', current: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="flex justify-center p-4 bg-[#7c98a2]">
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'text-[#000000] bg-[#ff834f]' : 'text-[#f8f7e5] hover:text-[#4F4A41] hover:bg-[#ff834f]',
                                'rounded-full px-3 py-2 text-sm font-medium',
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