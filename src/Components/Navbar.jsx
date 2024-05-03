import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import logo from "../assets/Group 6.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const clicked = () => {
    setToggle(!toggle);
  };

  return (<section>
    <nav className="bg-white p-4 flex justify-between items-center container px-5 md:px-44">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12" />
      </div>

      <div
        className={`absolute min-h-[60vh] bg-white ${
          toggle
            ? " z-20 top-0  h-screen w-full"
            : "md:static min-h-fit  top-[-100%] "
        } left-0  flex  md:items-center justify-between md:justify-center `}
      >
        {/* Navbar menu in the center */}

        <ul className="flex pl-8 md:pl-0 pt-14 md:pt-0 text-2xl md:text-sm flex-col md:flex-row gap-8 md:gap-6 text-black font-roboto">
        <Link to="/"><li className="">Home</li></Link>
        <Link to="/projects"><li className="">Projects</li></Link> 
        <Link to="/About"><li className="">About us</li></Link> 
        <Link to="/contact"><li className="">Contact</li></Link> 
        
        </ul>
        <IoClose
          onClick={() => {
            clicked();
          }}
          className="m-5 text-4xl cursor-pointer md:hidden"
        />
      </div>
      {/* Call button on the right */}

      <button className="bg-[#0A23C7]  text-white  py-2 px-3  items-center gap-2 text-xs font-body hidden md:flex">
        <svg
          width="12"
          height="12"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.6 7.8C5 10.6 7.4 12.9 10.2 14.4L12.4 12.2C12.7 11.9 13.1 11.8 13.4 12C14.5 12.4 15.7 12.6 17 12.6C17.6 12.6 18 13 18 13.6V17C18 17.6 17.6 18 17 18C7.6 18 0 10.4 0 1C0 0.4 0.4 0 1 0H4.5C5.1 0 5.5 0.4 5.5 1C5.5 2.2 5.7 3.4 6.1 4.6C6.2 4.9 6.1 5.3 5.9 5.6L3.6 7.8Z"
            fill="white"
          />
        </svg>
        +1(917)523-2418
      </button>
      {!toggle ? (
        <IoMenu
          onClick={() => {
            clicked();
          }}
          className="text-4xl cursor-pointer md:hidden"
        />
      ) : (
        <IoClose
          onClick={() => {
            clicked();
          }}
          className="text-4xl cursor-pointer md:hidden"
        />
      )}
    </nav>
  
    </section>
  );
};

export default Navbar;
