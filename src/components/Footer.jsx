import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

function Footer() {
  return (
    <>
      <footer className="p-6 py-8 md:py12 lg:py-16 bg-slate-900">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/assets/logo-main.png"
                  className="mr-3 h-24"
                  alt="FlowBite Logo"
                />
                {/* <span className="self-center text-2xl md:text-3xl lg:text-4xl font-semibold whitespace-nowrap text-white capitalize">
                  anmut developers
                </span> */}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 ">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Location
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li>
                    <span
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Address- Igbatoro Road, Opp.
                    </span>
                  </li>
                  <li>
                    <span
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      The Dome, Alagbaka, Akure
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact Us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <span className="hover:underline ">
                      07062783359, 07081361898.
                    </span>
                  </li>
                  <li>
                    <Link
                      to="https://gmail.gg/rbddistrict.com"
                      className="hover:underline"
                      target="_blank"
                    >
                      anmutestateandpropertydev@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com" className="hover:underline">
                JOWIS™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link
                to="https://www.facebook.com/Anmutdevelopers/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <IoLogoFacebook size={35} />
              </Link>
              <Link
                to="https://www.instagram.com/anmutdevelopers?fbclid=IwAR1B3I-DvhW42Qyew_9vUYsoWPMPmALzaxD17pVAVf6yKq7V9ncdjfRtIbI"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <IoLogoInstagram size={35} />
              </Link>
              <Link
                to="https://x.com/Anmutdevelopers?s=20"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <IoLogoTwitter size={35} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
