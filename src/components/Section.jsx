import { MdConstruction, MdRealEstateAgent } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div className="bg-slate-900 py-10 md:py-16 lg:py-20 px-16 md:px20 lg:px-28">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-18">
          <a
            href="#"
            className="text-lg gap-2 font-bold inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 text-green-400 mb-2"
          >
            <MdConstruction className="me-1.5" size={25} />
            Design
          </a>
          <h2 className="text-gray-900 dark:text-white text-2xl font-extrabold mb-2">
            Discover Our Innovative Real Estate Solutions
          </h2>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
            At our estate and property development company, we pride ourselves
            on creating exceptional and sustainable real estate projects that
            meet the needs of a modern society. Our team of experts works
            tirelessly to bring your vision to life, ensuring every detail is
            meticulously planned and executed.
          </p>
          <Link
            to="/about"
            className=" text-amber-500 hover:bg-amber-500 hover:text-slate-100 rounded-md px-4 py-1 font-medium text-lg inline-flex items-center gap-3"
          >
            Read More
            <LuChevronRight size={24} />
          </Link>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-18">
          <a
            href="#"
            className="text-lg font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-purple-400 mb-2"
          >
            <LuConstruction className="me-1.5" size={25} />
            Construction
          </a>
          <h2 className="text-gray-900 dark:text-white text-2xl font-extrabold mb-2">
            Experience Luxury Living Like Never Before
          </h2>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
            With our range of premium properties, you can indulge in the
            ultimate luxury living experience. From stunning penthouses with
            panoramic views to spacious villas nestled in serene surroundings,
            we offer the perfect home for every lifestyle.
          </p>
          <Link
            to="/project"
            className=" text-amber-500 hover:bg-amber-500 hover:text-slate-100 rounded-md px-4 py-1 font-medium text-lg inline-flex items-center gap-3"
          >
            Explore
            <LuChevronRight size={24} />
          </Link>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-18">
          <a
            href="#"
            className="text-lg gap-2 font-bold inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 text-green-400 mb-2"
          >
            <MdRealEstateAgent className="me-1.5" size={25} />
            Saving
          </a>
          <h2 className="text-gray-900 dark:text-white text-2xl font-extrabold mb-2">
            Invest in Your Future with Confidence
          </h2>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4">
            Our real estate investment opportunities provide a secure and
            lucrative way to grow your wealth. With our expert guidance and a
            portfolio of carefully selected properties, you can invest in your
            future with confidence.
          </p>

          <Link
            to="/project"
            className=" text-amber-500 hover:bg-amber-500 hover:text-slate-100 rounded-md px-4 py-1 font-medium text-lg inline-flex items-center gap-3"
          >
            Read More
            <LuChevronRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section;
