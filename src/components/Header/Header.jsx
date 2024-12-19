import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import logo from '../../assets/logo.svg'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="bg-slate-100 rounded-xl">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link to='/' title="" className="flex">
                            <img
                                className="w-auto h-8"
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        type="button"
                        onClick={toggleMenu} // Toggle menu on click
                        className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                    >
                        {/* Menu Icon */}
                        {!isMenuOpen ? (
                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 8h16M4 16h16"
                                ></path>
                            </svg>
                        ) : (
                            // Close Icon
                            <svg
                                className="block w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        )}
                    </button>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="absolute top-[85px] left-0 w-full bg-white bg-opacity-90 lg:hidden">
                            <div className="flex flex-col items-center space-y-4 py-4">
                                <Link to="/about" className="text-base text-black hover:text-opacity-80">
                                    About Us
                                </Link>
                                <Link to="/products" className="text-base text-black hover:text-opacity-80">
                                    Products
                                </Link>
                                <Link to="/add-products" className="text-base text-black hover:text-opacity-80">
                                    Add Product
                                </Link>
                                {/* <Link to="/contact" className="text-base text-black hover:text-opacity-80">
                                    Contact
                                </Link> */}
                                <Link
                                    to='/dashboard'
                                    className="px-5 py-2.5 text-base font-semibold text-white bg-black rounded-full hover:bg-yellow-300 hover:text-black"
                                >
                                    Dashborad
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <Link to="/about" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                            About Us
                        </Link>
                        <Link to="/products" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                            Products
                        </Link>
                        <Link to="/add-products" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                            Add Product
                        </Link>
                        {/* <Link to="/contact" className="text-base text-black transition-all duration-200 hover:text-opacity-80">
                            Contact
                        </Link> */}
                    </div>

                    <Link
                        to='/dashboard'
                        className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-xl"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
