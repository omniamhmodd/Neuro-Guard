import React from "react";
import logo from '../images/logo.svg'

function Header() {
    return (
    <header className=" shadow-md border-spacing-1">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-lg font-bold text-[#000000]">
            <img src={logo} alt="" />
            Neuro Guard 
            </div>
        <nav>
            <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-[#0C7489]">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#0C7489]">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#0C7489]">Find Doctors</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#0C7489]">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#0C7489]">Contact Us</a></li>
            </ul>
        </nav>
        <div>
            <button className="text-sm text-gray-600 mr-4">Log in</button>
            <button className="bg-[#0C7489] text-white px-4 py-2 rounded">Sign Up</button>
        </div>
        </div>
    </header>
    );
}

export default Header;
