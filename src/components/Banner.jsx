import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { IoChevronDownOutline, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Banner() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const handleClosed = () => {
    setIsBannerOpen(!isBannerOpen);
  };
  return (
    <>
      {isBannerOpen && (
        <div
          id="informational-banner"
          tabIndex="-1"
          className="sticky top-0 start-0 z-50 flex flex-col justify-between w-full p-4 border-b border-gray-200 md:flex-row bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
        >
          <div className="mb-4 md:mb-0 md:me-4">
            <h2 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
              Discover Our Amazing Property Selection by josh
            </h2>
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              Experience sustainable living in our modern properties
            </p>
          </div>
          <div className="flex items-center flex-shrink-0">
            <Link
              to="/about"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-600 hover:bg-yellow-500"
            >
              Learn More
              <GoChevronRight />
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 gap-3"
            >
              Contact Us
              <IoChevronDownOutline />
            </Link>
            <button
              data-dismiss-target="#informational-banner"
              type="button"
              className="flex-shrink-0 inline-flex justify-center w-10 h-10 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoClose size={35} onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
