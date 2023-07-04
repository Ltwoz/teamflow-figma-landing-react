import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const menuHandler = () => setIsOpen(false);

        window.addEventListener("click", menuHandler);

        return () => {
            window.removeEventListener("click", menuHandler);
        };
    }, []);

    const handleOnclick = (e) => {
        e.stopPropagation();

        setIsOpen((prev) => !prev);
    };

    return (
        <nav className="max-w-[1110px] mx-auto px-4 md:px-0 py-8 md:py-12">
            <div className="flex flex-row justify-between items-center">
                <div id="logo">
                    <a
                        href="/"
                        className="text-2xl tracking-tight font-josefin"
                    >
                        team.flow
                    </a>
                </div>
                <div
                    id="nav-items-group"
                    className="hidden md:flex flex-row items-center space-x-10 font-medium"
                >
                    <a href="#">How it Works</a>
                    <a href="#">Products</a>
                    <a href="#">Pricing</a>
                    <a href="#">Resources</a>
                </div>
                <div
                    id="cta"
                    className="hidden md:flex flex-row items-center space-x-4 font-medium"
                >
                    <a href="#">Log in</a>
                    <a
                        href="#"
                        className="px-6 py-3 bg-[#ECE5FF] hover:bg-[#e5def8] text-[#794CFF] rounded"
                    >
                        Get started free
                    </a>
                </div>
                <div
                    id="hamburger"
                    className="flex md:hidden w-8 h-8"
                    onClick={handleOnclick}
                >
                    <svg
                        viewBox="0 -0.5 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.5 11.75C6.08579 11.75 5.75 12.0858 5.75 12.5C5.75 12.9142 6.08579 13.25 6.5 13.25V11.75ZM18.5 13.25C18.9142 13.25 19.25 12.9142 19.25 12.5C19.25 12.0858 18.9142 11.75 18.5 11.75V13.25ZM6.5 15.75C6.08579 15.75 5.75 16.0858 5.75 16.5C5.75 16.9142 6.08579 17.25 6.5 17.25V15.75ZM18.5 17.25C18.9142 17.25 19.25 16.9142 19.25 16.5C19.25 16.0858 18.9142 15.75 18.5 15.75V17.25ZM6.5 7.75C6.08579 7.75 5.75 8.08579 5.75 8.5C5.75 8.91421 6.08579 9.25 6.5 9.25V7.75ZM18.5 9.25C18.9142 9.25 19.25 8.91421 19.25 8.5C19.25 8.08579 18.9142 7.75 18.5 7.75V9.25ZM6.5 13.25H18.5V11.75H6.5V13.25ZM6.5 17.25H18.5V15.75H6.5V17.25ZM6.5 9.25H18.5V7.75H6.5V9.25Z"
                            fill="#000000"
                        />
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div id="mobile-nav" className="flex flex-col pt-4">
                    <div
                        id="nav-items-group"
                        className="flex flex-col items-start font-medium"
                    >
                        <a href="#" className="py-2">How it Works</a>
                        <a href="#" className="py-2">Products</a>
                        <a href="#" className="py-2">Pricing</a>
                        <a href="#" className="py-2">Resources</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
