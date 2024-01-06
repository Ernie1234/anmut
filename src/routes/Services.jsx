import { PiProjectorScreenChart } from "react-icons/pi";
import { IoChatbubblesOutline, IoConstructSharp } from "react-icons/io5";
import { RiEmotionHappyLine } from "react-icons/ri";

import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className=" flex relative z-20 items-center  overflow-hidden bg-cover bg-no-repeat bg-[url('https://www.mhwilliams.com/wp-content/uploads/2020/01/11.jpeg')] bg-gray-800 bg-blend-multiply shadow-lg">
        <div className="container mx-auto px-6 flex relative py-16  max-w-screen-xl">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col justify-center relative z-20 ">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 className="uppercase text-4xl md:text-6xl  font-black  leading-none text-white">
              A{" "}
              <span className="text-amber-400 text-4xl md:text-7xl">
                great dream
              </span>{" "}
              for you
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place. Providing
              Construction Solutions. Truly, the Future belongs to those who
              believe of their dreams.
            </p>
            <div className="flex mt-8">
              <Link
                to="/"
                className="uppercase py-2 px-4 rounded-lg bg-amber-500 border-2 border-transparent text-white text-md mr-4 hover:bg-amber-600"
              >
                Connect with us
              </Link>
              <Link
                to="/about"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white text-md"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center md:w-2/3 lg:w-3/5 relative md:ml-8 lg:ml-16">
            <img
              src="/src/assets/Construction-PNG-Image.png"
              className="w-full shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-900 flex items-center overflow-hidden ">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 relative gap-3 md:gap-8 py-16 max-w-screen-xl text-white">
          <div id="section--1" className="flex flex-col justify-center">
            <div className="flex items-center gap-3 md:gap-7">
              <span className="w-12 h-1 bg-white"></span>
              <p className="capitalize">fact about us </p>
            </div>
            <h1 className="capitalize text-3xl md:text-5xl font-black mt-2 text-white">
              who we are
            </h1>
            <p className="text-justify mt-6 md:mt-8">
              An estate and property development company that specialize in
              creating exceptional and sustainable real estate projects that
              meets the need of a modern society. We utilize sustainable
              building practices and the latest technology to ensure our
              projects are energy-efficient, cost-effective, and completed on
              time and on budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center mt-4 md:mt-8">
                <div className="bg-amber-500 p-1.5 md:p-3 mr-3 border-white border-2 flex justify-center items-center">
                  <IoConstructSharp size={30} />
                </div>
                <div>
                  <h6 className="font-semibold">5 Yrs of Experience</h6>
                  <p className="text-sm text-gray-400">
                    It is a long establish fact of hard workers
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-8">
                <div className="bg-amber-500 p-1.5 md:p-3 mr-3 border-white border-2 flex justify-center items-center">
                  <RiEmotionHappyLine size={30} />
                </div>
                <div>
                  <h6 className="font-semibold">78+ Happy Clients</h6>
                  <p className="text-gray-400 text-sm">
                    It is a long establish fact of hard workers
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-8">
                <div className="bg-amber-500 p-1.5 md:p-3 mr-3 border-white border-2 flex justify-center items-center">
                  <PiProjectorScreenChart size={30} />
                </div>
                <div>
                  <h6 className="font-semibold">120+ Project Done</h6>
                  <p className="text-gray-400 text-sm">
                    It is a long establish fact of hard workers
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-8">
                <div className="bg-amber-500 p-1.5 md:p-3 mr-3 border-white border-2 flex justify-center items-center">
                  <IoChatbubblesOutline size={30} />
                </div>
                <div>
                  <h6 className="font-semibold">100+ Feedback</h6>
                  <p className="text-gray-400 text-sm">
                    It is a long establish fact of hard workers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-end items-center">
            <img src="/src/assets/Daco_4142804.png" className="w-full" />
          </div>
        </div>
      </div>
      <div
        className="flex items-center overflow-hidden bg-cover bg-no-repeat bg-[url('/src/assets/Daco_4142804.png')] bg-gray-800 bg-blend-multiply shadow-lg relative"
        id="our--services"
      >
        <div>
          <div className="hidden lg:block absolute bottom-0 right-0 w-2/5">
            <img src="/src/assets/Daco_4142804.png" className="w-full" />
          </div>
        </div>
        <div className="container mx-auto px-6 relative gap-3 md:gap-8 py-16 max-w-screen-xl text-white">
          <div id="section--1" className="flex flex-col justify-center">
            <div className="flex items-center gap-3 md:gap-7">
              <span className="w-12 h-1 bg-white"></span>
              <p className="capitalize">Our Services </p>
            </div>
            <h1 className="capitalize text-3xl md:text-5xl font-black mt-2 text-white">
              what we are doing?
            </h1>
            <p className="mt-6 md:mt-8">
              We revolutionize communities through innovative construction,
              building solutions and collaborative partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
