function About() {
  return (
    <>
      <header
        className="bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-gray-800 bg-blend-multiply shadow-lg relative"
        data-carousel-item
      >
        <div className="w-full h-full bg-gradient-to-t from-slate-900/50 absolute z-0"></div>
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-40 z-30">
          <h2 className="text-md md:text-lg lg:text-xl font-bold tracking-wider uppercase text-white ">
            about us
          </h2>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tighter  text-white md:text-5xl lg:text-6xl">
            Creating{" "}
            <span className="text-amber-300 underline decoration-double decoration-amber-500 leading-normal">
              {" "}
              exceptional and sustainable
            </span>{" "}
            real estate projects
          </h1>
        </div>
      </header>

      <section className="bg-slate-800 text-white pt-8">
        <div className="px-4 md:px-8 lg:px-12 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
          <div className="w-full h-full rounded-3xl saturate-50 hover:filter-none hover:rounded-md overflow-hidden skew-y-3 transition-all hover:skew-y-0  ">
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
            <p className="mt-3 leading-normal">leading-relaxed</p>
            <p>
              An estate and property development company that specialize in
              creating exceptional and sustainable real estate projects that
              meets the need of a modern society. We utilize sustainable
              building practices and the latest technology to ensure our
              projects are energy-efficient, cost-effective, and completed on
              time and on budget.
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur laboriosam nulla quibusdam velit aliquam inventore.
            </p>
          </div>
        </div>
      </section>
      <section className="vision__story">
        <div className="grid grid-cols-2 gap-5">
          <div className="about__section--content">
            <h1 className="mb-2">Our Vision</h1>
            <p className="mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              fugit aliquam repudiandae fugiat aperiam dolor modi rem asperiores
              dolorum incidunt sequi dolores quasi natus odio explicabo adipisci
              commodi nobis nulla doloremque illo. Eum optio molestiae ipsam nam
              natus nulla nobis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia nesciunt temporibus ad officia eveniet consequuntur ab
              quod culpa dignissimos!
            </p>
          </div>
          <div className="rounded-full overflow-hidden skew-y-6 transition-all hover:skew-y-0">
            <img
              src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="StoryImage"
            />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__story--container">
          <div className="rounded-full overflow-hidden skew-y-6 transition-all hover:skew-y-0">
            <img
              src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="missionImage"
            />
          </div>
          <div className="about__section--content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              fugit aliquam repudiandae fugiat aperiam dolor modi rem asperiores
              dolorum incidunt sequi dolores quasi natus odio explicabo adipisci
              commodi nobis nulla doloremque illo. Eum optio molestiae ipsam nam
              natus nulla nobis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              mollitia nesciunt temporibus ad officia eveniet consequuntur ab
              quod culpa dignissimos!
            </p>
            <p>
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
