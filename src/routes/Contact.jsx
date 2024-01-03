function Contact() {
  return (
    <div className="bg-stone-900 min-h-[100vh] text-white p-8 md:p-12 ">
      <head>
        <h1 className="text-md md:text-lg lg:text-xl font-bold tracking-wider uppercase text-white ">
          Contact Us
        </h1>
        <h3 className="mb-4 text-4xl font-extrabold tracking-tighter  text-white md:text-5xl lg:text-6xl">
          Leading way in bilding & Civil contruction
        </h3>
        <div>
          <h5>
            <p className="capitalize text-white text-base md:text-md lg:text-lg">
              Professional staff
            </p>
          </h5>
          <h5>
            <p>100% satisfaction</p>
          </h5>
          <h5>
            <p>accurate testing</p>
          </h5>
          <h5>
            <p>transparent price</p>
          </h5>
        </div>
      </head>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <form
          action=""
          className="col-start-1 col-end-3 bg-orange-500 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 lg:gap-5 py-6 px-8 rounded-sm md:rounded-md lg:rounded-lg"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="py-3 px-1 w-full bg-white rounded-md text-left text-sm
          text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="
          py-3 px-1 w-full bg-white rounded-md  text-left text-sm
          text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="col-start-1 col-end-3 group relative w-full flex justify-center 
          py-3.5 text-lg font-medium text-white transition duration-20
          ease-in-out bg-slate-900 rounded-sm md:rounded-md lg:rounded-lg
          hover:bg-slate-900 focus:z-10"
          >
            Submit Request
          </button>
        </form>
        <div className="col-start-3 col-end-4 bg-orange-500 w-full h-full py-6 px-8 rounded-sm md:rounded-md lg:rounded-lg"></div>
      </div>
    </div>
  );
}

export default Contact;
