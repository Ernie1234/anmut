import { Header } from "../components";

function About() {
  return (
    <>
      <Header
        title="About Us"
        image="https://images.pexels.com/photos/396303/pexels-photo-396303.jpeg?auto=compress&cs=tinysrgb&w=600"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        nam repudiandae voluptatem magni voluptates atque fugit error sint natus
        ad repellat facilis possimus, debitis doloribus?
      </Header>

      <section className="about__story">
        <div className="container grid grid-cols-2 gap-5">
          <div className="rounded-full overflow-hidden skew-y-6 transition-all hover:skew-y-0 lg:w-[60%]">
            <img
              src="https://images.pexels.com/photos/388830/pexels-photo-388830.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="StoryImage"
            />
          </div>
          <div className="about__section--content">
            <h1 className="mb-2">Our Story</h1>
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
            <p>
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
