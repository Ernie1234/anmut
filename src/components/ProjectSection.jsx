import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

import Card from "./Card";

function ProjectSection() {
  return (
    <div className="py-10 md:py-16 lg:py-20 px-16 md:px20 lg:px-28 bg-slate-900 text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-md font-semibold capitalize">insights</p>
        <h3
          className="text-2xl md:text-3xl lg:text-5xl font-bold my-3 md:my-5 capitalize tracking-wider"
          id="projects"
        >
          Check our latest Projects
        </h3>
        <p className="text-md font-semibold capitalize">
          stay informed with our valuable resources
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-8 place-content-center">
        <Card
          tag="read estate"
          pic="https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=600"
          headTitle="the future of sustainble housing"
          subTitle="RBD District, Akure
Rbd district is a prestigious mixed-use real estate that seamlessly combines luxury and tranquility, located at Igbatoro road, Akure"
        />
        <Card
          tag="Sustainablity"
          pic="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600"
          headTitle="creating green spaces in urban areas"
          subTitle="Learn how urban areas are embracing green spaces for sustainable future"
        />
        <Card
          tag="Interior Design"
          pic="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=600"
          headTitle="Innovative Interior Design Ideas"
          subTitle="Get inspired by the latest interior design trends and ideas."
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center my-5 md:my-8">
        <Link
          to="/contact"
          className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 gap-3 capitalize"
        >
          view all
          <LuArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default ProjectSection;
