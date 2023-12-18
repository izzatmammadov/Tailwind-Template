import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-around absolute top-0 w-full z-10 bg-transparent">
        <h5 className="text-white flex items-start text-xl font-light">TATTOLOG</h5>

      <ul className=" flex justify-center items-center gap-10 text-s  text-white">
        <li className=" cursor-pointer hover:transform hover:-translate-y-1 hover:text-gray-400 transition-all duration-500 font-medium">
          HOME
        </li>
        <li className=" cursor-pointer hover:transform hover:-translate-y-1 hover:text-gray-400 transition-all duration-500 font-medium">
          ABOUT
        </li>
        <li className=" cursor-pointer hover:transform hover:-translate-y-1 hover:text-gray-400 transition-all duration-500 font-medium">
          CONTACT
        </li>
        <li className=" cursor-pointer hover:transform hover:-translate-y-1 hover:text-gray-400 transition-all duration-500 font-medium">
          HELP
        </li>
      </ul>
    </nav>
  );
};
