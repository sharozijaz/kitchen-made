import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BiDish } from "react-icons/bi";
function Navbar() {
  return (
    <>
      <div>
        <nav className="flex p-4 justify-between items-center shadow">
          <div className="text-3xl text-orange-400 font-extrabold">
            <span className="flex place-items-center cursor-pointer">
              <BiDish className="inline text-2lg mr-2" />
              KitchenMade
            </span>
          </div>
          <ul className="md:flex text-xl font-medium sm:hidden">
            <li className="px-2 py-4 mr-5">
              <Link
                to="/home"
                className=" text-slate-900  hover:text-orange-400"
              >
                Home
              </Link>
            </li>
            <li className="px-2 py-4 mr-5 ">
              <Link
                to="/about"
                className=" text-slate-900  hover:text-orange-400"
              >
                About
              </Link>
            </li>
            <li className="px-2   py-4  ">
              <Link
                to="/contact"
                className="text-slate-900  hover:text-orange-400"
              >
                Contact
              </Link>
            </li>
            <li className="px-8 py-4 ml-8 text-white  hover:bg-orange-600 bg-orange-500 rounded-md cursor-pointer">
              <Link to="/started" className=" hover:text-white">
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
