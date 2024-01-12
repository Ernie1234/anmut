function About() {
  return (
    <>
      <header
        className="bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-gray-800 bg-blend-multiply shadow-lg relative"
        data-carousel-item
      >
        <div className="w-full h-full bg-gradient-to-t from-slate-900/50 absolute z-0"></div>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32 z-30">
          <h2 className="text-md md:text-lg lg:text-xl font-bold tracking-wider uppercase text-white">
            about us
          </h2>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tighter  text-white md:text-5xl lg:text-6xl">
            Tranforming{" "}
            <span className="text-amber-300 underline decoration-double decoration-amber-500 leading-normal">
              {" "}
              Dreams
            </span>{" "}
            into Concrete
            <span className="text-amber-300 underline decoration-double decoration-amber-500 leading-normal">
              {" "}
              Realities!
            </span>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            We specialize in estate development and construction projects that
            redefine urban living. Our passion for excellence and a commitment
            to innovation have propelled us to the forefront of the industry. We
            believe in revolutionizing communities through innovative
            construction, building solutions, and collaborative partnerships. By
            utilizing sustainable building practices and the latest technology,
            we ensure our projects are energy-efficient, cost-effective, and
            completed on time and on budget.
          </p>
        </div>
      </header>

      <section className="bg-slate-800 text-white px-5 py-8 md:py-12">
        <div className="px-4 md:px-8 lg:px-12 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-10">
          <div className="w-full h-full rounded-3xl saturate-50 hover:filter-none hover:rounded-md overflow-hidden skew-y-3 transition-all hover:skew-y-0">
            <img
              className=" max-w-full h-full object-cover"
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="StoryImage"
            />
          </div>
          <div className="flex flex-col justify-center items-start ">
            <h1 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide underline">
              who we are
            </h1>

            <p className="mt-5 leading-normal">
              An estate and property development company that specialize in
              creating exceptional and sustainable real estate projects that
              meets the need of a modern society. We utilize sustainable
              building practices and the latest technology to ensure our
              projects are energy-efficient, cost-effective, and completed on
              time and on budget.
            </p>
            <p className="mt-3 leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur laboriosam nulla quibusdam velit aliquam inventore.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-slate-900 text-white px-5 py-8 md:py-12">
        <div className="px-4 md:px-8 lg:px-12 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-10">
          <div className="flex flex-col justify-center items-start ">
            <h1 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide underline">
              Our Vision
            </h1>
            <p className="mt-5 leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              fugit aliquam repudiandae fugiat aperiam dolor modi rem asperiores
              dolorum incidunt sequi dolores quasi natus odio explicabo adipisci
              commodi nobis nulla doloremque illo. Eum optio molestiae ipsam nam
              natus nulla nobis!
            </p>
            <p className="mt-3 leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia nesciunt temporibus ad officia eveniet consequuntur ab
              quod culpa dignissimos!
            </p>
          </div>
          <div className="w-full h-full rounded-3xl saturate-50 hover:filter-none hover:rounded-md overflow-hidden skew-y-3 transition-all hover:skew-y-0">
            <img
              src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="StoryImage"
              className=" max-w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-800 text-white px-5 py-8 md:py-12">
        <div className="px-4 md:px-8 lg:px-12 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-10">
          <div className="w-full h-full rounded-3xl saturate-50 hover:filter-none hover:rounded-md overflow-hidden skew-y-3 transition-all hover:skew-y-0">
            <img
              src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="missionImage"
              className=" max-w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start ">
            <h1 className="mb-2 text-xl md:text-2xl lg:text-3xl font-bold tracking-wide underline">
              Our Mission
            </h1>
            <p className="mt-5 leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              fugit aliquam repudiandae fugiat aperiam dolor modi rem asperiores
              dolorum incidunt sequi dolores quasi natus odio explicabo adipisci
              commodi nobis nulla doloremque illo. Eum optio molestiae ipsam nam
              natus nulla nobis!
            </p>
            <p className="mt-3 leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia nesciunt temporibus ad officia eveniet consequuntur ab
              quod culpa dignissimos!
            </p>
            <p className="mt-3 leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur laboriosam nulla quibusdam velit aliquam inventore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
