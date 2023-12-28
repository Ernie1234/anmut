import { Link, NavLink } from "react-router-dom";

import { IoMenu } from "react-icons/io5";

function NavBar() {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-xl md:text-2xl lg:text-3xl  tracking-widest font-bold whitespace-nowrap dark:text-white">
            ANMUT
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/">
            <button
              type="button"
              className="text-white bg-amber-500 hover:bg-amber-700 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get started
            </button>
          </Link>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <IoMenu size={35} />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 md:p-0 text-white aria-[current=page]:text-amber-400 hover:text-gray-400"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 md:p-0 text-white aria-[current=page]:text-amber-400 hover:text-gray-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="block py-2 px-3 md:p-0 text-white aria-[current=page]:text-amber-400 hover:text-gray-400"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 md:p-0 text-white aria-[current=page]:text-amber-400 hover:text-gray-400"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
