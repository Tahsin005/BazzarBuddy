import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar bg-base-200 rounded-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-full lg:hidden">
                            <GiHamburgerMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link className='rounded-full' to="/about">About</Link></li>
                            <li><Link className='rounded-full' to="/products">Products</Link></li>
                            <li><Link className='rounded-full' to="/add-products">Add Products</Link></li>
                            <li><Link className='rounded-full' to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <Link className='btn btn-ghost rounded-full text-xl' to="/">BazzarBuddy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal rounded-full px-1">
                        <li><Link className='rounded-full' to="/about">About</Link></li>
                        <li><Link className='rounded-full' to="/products">Products</Link></li>
                        <li><Link className='rounded-full' to="/add-products">Add Products</Link></li>
                        <li><Link className='rounded-full' to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                <Link className='btn btn-ghost rounded-full' to="/dashboard">Dashboard</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
