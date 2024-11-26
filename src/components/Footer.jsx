import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../images/logo.svg'

function Footer() {
    return (
    <footer className="bg-white border-t border-gray-200 py-10 px-20">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
            <div>
            <div className="flex items-center mb-4">
              {/* Logo */}
                <img
                src={logo}
                alt="Neuro Guard Logo"
                className="w-10 h-10 mr-2"
                />
                <span className="text-xl font-bold text-[#000000]">
                Neuro Guard
                </span>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[#000000]" />
                hello@neuroguard.com
                </li>
                <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-[#000000]" />
                +2 01015051219
                </li>
                <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-[#000000]" />
                Somewhere in the World
                </li>
            </ul>
            </div>

          {/* Support Links */}
            <div>
            <h3 className="text-lg font-semibold text-[#0C7489] mb-4">
                Support
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
                <li>
                <a href="#" className="hover:text-[#0C7489]">
                    Getting Started
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-[#0C7489]">
                    FAQs
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-[#0C7489]">
                    Help Articles
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-[#0C7489]">
                    Report an Issue
                </a>
                </li>
            </ul>
            </div>

          {/* Services Links */}
            <div>
            <h3 className="text-lg font-semibold text-[#0C7489] mb-4">
                Services
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
                <li>
                <a href="#" className="hover:text-[#0C7489]">
                    Booking Appointments
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-[#0C7489]">
                    Online Consultations
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-[#0C7489]">
                    Prescriptions
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-[#0C7489]">
                    Medicine Refills
                </a>
                </li>
            </ul>
            </div>

          {/* Social Profiles Section */}
            <div>
            <h3 className="text-lg font-semibold text-[#0C7489] mb-4">
                Social Profiles
            </h3>
            <div className="flex space-x-4">
                <a
                href="#"
                className="text-gray-600 hover:text-[#0C7489] text-lg"
                >
                <FaFacebookF />
                </a>
                <a
                href="#"
                className="text-gray-600 hover:text-[#0C7489] text-lg"
                >
                <FaTwitter />
                </a>
                <a
                href="#"
                className="text-gray-600 hover:text-[#0C7489] text-lg"
                >
                <FaLinkedinIn />
                </a>
            </div>
            </div>
        </div>
        </div>
              {/* Copyright Text */}
                <div className="text-center mt-20 text-sm text-gray-600 " >
            <p>© 2024 NeuroGuard. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
