import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className=" border-red-500 bg-gray-900">
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
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
