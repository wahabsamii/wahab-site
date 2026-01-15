import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Github
} from "lucide-react";

import logo from '../assets/logomain.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
        {/* Logo & Subscribe */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="" className="w-[200px]"/>
          </div>
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Get Ready <span className="text-gray-400 font-normal">To Create</span> <br /> Great
          </h2>
          <div className="mt-4">
            <label className="block text-sm mb-2">Email Adress</label>
            <div className="flex items-center border-b border-gray-700 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 text-white w-full focus:outline-none"
              />
              <Mail className="w-5 h-5 text-white ml-2" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2 flex-col flex text-gray-300">
            <Link to='/about'>About Me</Link>
            <Link to="/services">Service</Link>
            <Link to='/contact'>Contact Me</Link>
            <Link to='/blogs'>Blog Post</Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3 ">
              <Mail className="w-4 h-4 " /> wahabsami.dev@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4" /> Ring Road Peshawar Kabootar Chowk
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" /> +92-311-1535281
            </li>
          </ul>
          <div className="flex gap-4 mt-5">
            <Link to='https://github.com/wahabsamii'><Github className="w-5 h-5 hover:text-[#FF014F] cursor-pointer" /></Link>
            <Link to='https://www.linkedin.com/in/abdul-wahab-148427277/'><Linkedin className="w-5 h-5 hover:text-[#FF014F] cursor-pointer" /></Link>
            <Link><Twitter className="w-5 h-5 hover:text-[#FF014F] cursor-pointer" /></Link>
            <Link to='https://www.facebook.com/profile.php?id=100025706373338&_rdc=1&_rdr#'><Facebook className="w-5 h-5 hover:text-[#FF014F] cursor-pointer" /></Link>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row justify-between text-sm text-gray-500 px-4">
        <p>©AbdulWahab 2025 | All Rights Reserved</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Trams & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
