import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";
export const Navbar = () => {
  return (
    <>
      <nav className="bg-[#e7ebee] shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          
            <div className="hidden lg:flex md:flex lg:flex-row lg:w-[6%] md:w-[7%] md:flex-row ">
              <Link to="/"><img className="w-3/4" src={logo} alt="logo" /></Link>
            </div>
          
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              <Link to="/">
                <li className="md:px-4 md:py-2 text-black hover:text-blue-500">
                  Home
                </li>
              </Link>
              <Link to="/product/create">
                <li className="md:px-4 md:py-2 text-black hover:text-blue-500">
                  Add New Product
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
