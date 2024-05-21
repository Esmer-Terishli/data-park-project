import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0 border-b border-gray-200 bg-[#0D2033]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link to="/">
              <img src="../src/assets/images/Group.png" alt="" />
            </Link>
          </span>
          <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            <Button
              type="button"
              onClick={() => alert("Login functionality")}
              className="loginBtn focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center text-[#F9A820] bg-[transparent]"
            >
              Login
            </Button>

            <Button
              type="button"
              onClick={() => alert("Sign Up functionality")}
              className="signupBtn text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center bg-[#F9A820]"
            >
              Sign Up
            </Button>
            <button
              type="button"
              onClick={toggleNav}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isNavOpen}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars />
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isNavOpen ? "flex" : "hidden"
            } lg:flex`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent w-full">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-center rounded md:bg-transparent duration-700 md:p-0 text-[#C3C3C3] hover:text-[#F9A820]"
                  aria-current="page"
                >
                  Forum
                </Link>
              </li>
              <li>
                <Link
                  to="/academy"
                  className="block py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent duration-700 md:p-0 text-[#C3C3C3] hover:text-[#F9A820]"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting"
                  className="block py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent duration-700 md:p-0 text-[#C3C3C3] hover:text-[#F9A820]"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="block py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent duration-700 md:p-0 text-[#C3C3C3] hover:text-[#F9A820]"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="block py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent duration-700 md:p-0 text-[#C3C3C3] hover:text-[#F9A820]"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/center"
                  className="block py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent duration-700 md:p-0 text-[#C3C3C3] hover:text-[#F9A820]"
                >
                  Center of Excellences
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="block py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent duration-700 md:p-0 text-[#C3C3C3] hover:text-[#F9A820]"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
